// Featured Players Data
const featuredPlayers = [
  { name: 'Lionel Messi', country: 'Argentina', position: 'Frente 1', level: 10, image: 'images/copa-mundo-2026/argentina/arg-17-lionel-messi.webp' },
  { name: 'Lautaro Martinez', country: 'Argentina', position: 'Frente 1', level: 10, image: 'images/copa-mundo-2026/argentina/arg-18-lautaro-martinez.webp' },
  { name: 'Vinícius Junior', country: 'Brasil', position: 'Ala 1', level: 20, image: 'images/copa-mundo-2026/brasil/bra-14-vinicius-junior.webp' },
  { name: 'Rodrygo', country: 'Brasil', position: 'Ala 1', level: 11, image: 'images/copa-mundo-2026/brasil/bra-15-rodrygo.webp' },
  { name: 'Julián Álvarez', country: 'Argentina', position: 'Ala 1', level: 9, image: 'images/copa-mundo-2026/argentina/arg-19-julian-alvarez.webp' },
  { name: 'Estêvão', country: 'Brasil', position: 'Ala 1', level: 8, image: 'images/copa-mundo-2026/brasil/bra-20-estevao.webp' },
];

// Recommendations Data
const recommendations = [
  {
    user: 'Maria',
    status: 'Online',
    avatar: '👩',
    offering: 'Messi',
    offeringCountry: 'Argentina',
    wanting: 'Neymar Jr',
    wantingCountry: 'Brasil',
    compatibility: 85
  },
  {
    user: 'Kelvin',
    status: 'Online',
    avatar: '👨',
    offering: 'Mbappé',
    offeringCountry: 'França',
    wanting: 'Cristiano Ronaldo',
    wantingCountry: 'Portugal',
    compatibility: 65
  },
  {
    user: 'Ana',
    status: 'Offline',
    avatar: '👩',
    offering: 'Vinícius Jr',
    offeringCountry: 'Brasil',
    wanting: 'Qualquer figurinha',
    wantingCountry: '',
    compatibility: 90
  }
];

// Recent Activity Data
const recentActivity = [
  { user: 'Maria', action: 'solicitou troca de figurinha Neymar Jr', time: 'há 5 min', icon: '👩' },
  { user: 'Kelvin', action: 'ofereceu a figurinha Mbappé', time: 'há 10 min', icon: '👨' },
  { user: 'João', action: 'completou a figurinha Messi', time: 'há 30 min', icon: '👨' },
  { user: 'Pedro', action: 'se cadastrou', time: 'há 1 h', icon: '👤' }
];

// Load Featured Players
function loadFeaturedPlayers() {
  const container = document.getElementById('featured-cards');
  container.innerHTML = '';
  
  featuredPlayers.slice(0, 5).forEach((player, index) => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
      <span class="level">${player.level}</span>
      <span class="position">${player.position}</span>
      <img src="${player.image}" alt="${player.name}" class="player-image" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 0.5rem;" />
      <div class="player-name">${player.name}</div>
      <div class="player-country">${player.country}</div>
      <div class="country-flag">🏆</div>
      <button onclick="openTradeModal('${player.name}')" style="background: rgba(0,0,0,0.3); color: white; border: none; padding: 0.5rem; border-radius: 4px; cursor: pointer; width: 100%; margin-top: 0.5rem;">
        Iniciar Troca
      </button>
    `;
    container.appendChild(card);
  });
}

// Load Recommendations
function loadRecommendations() {
  const container = document.getElementById('recommendations');
  container.innerHTML = '';
  
  recommendations.forEach((rec, index) => {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    const statusColor = rec.status === 'Online' ? '#00C754' : '#ccc';
    
    card.innerHTML = `
      <div class="user-info">
        <div class="user-avatar">${rec.avatar}</div>
        <div>
          <div class="user-name">${rec.user} quer trocar</div>
          <div class="user-status" style="color: ${statusColor}">● ${rec.status}</div>
        </div>
      </div>
      
      <div class="offer-info">
        <div class="offer-label">Sua oferta</div>
        <div class="offer-item">
          <span class="item-image">⚽</span>
          <span class="item-name">${rec.offering}</span>
          <span style="font-size: 0.8rem; color: #666;">${rec.offeringCountry}</span>
        </div>
      </div>
      
      <div class="offer-info">
        <div class="offer-label">O que ele quer</div>
        <div class="offer-item">
          <span class="item-image">⚽</span>
          <span class="item-name">${rec.wanting}</span>
          <span style="font-size: 0.8rem; color: #666;">${rec.wantingCountry}</span>
        </div>
      </div>
      
      <div class="compatibility">
        Compatibilidade
        <div class="compatibility-bar">
          <div class="compatibility-fill" style="width: ${rec.compatibility}%"></div>
        </div>
        ${rec.compatibility}%
      </div>
      
      <button class="propose-btn" onclick="proposeTradeModal('${rec.user}', '${rec.offering}', '${rec.wanting}')">
        📨 Enviar Proposta
      </button>
    `;
    container.appendChild(card);
  });
}

// Load Recent Activity
function loadRecentActivity() {
  const container = document.getElementById('recent-activity');
  container.innerHTML = '';
  
  recentActivity.forEach((activity, index) => {
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.innerHTML = `
      <div class="activity-avatar">${activity.icon}</div>
      <div class="activity-content">
        <div class="activity-name">${activity.user}</div>
        <div class="activity-action">${activity.action}</div>
        <div class="activity-time">${activity.time}</div>
      </div>
    `;
    container.appendChild(item);
  });
}

// Scroll Carousel
function scrollCarousel(direction) {
  const container = document.getElementById('featured-cards');
  const scrollAmount = 200;
  const parent = container.parentElement;
  
  if (direction === 1) {
    parent.scrollLeft += scrollAmount;
  } else {
    parent.scrollLeft -= scrollAmount;
  }
}

// Switch Tabs
function switchTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  // Show selected tab
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
  
  // Update nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  
  event.target.classList.add('active');
  event.preventDefault();
}

// Open Announce Modal
function openAnnounceModal() {
  document.getElementById('announceModal').classList.remove('hidden');
}

// Close Announce Modal
function closeAnnounceModal() {
  document.getElementById('announceModal').classList.add('hidden');
}

// Open Trade Modal
function openTradeModal(playerName) {
  alert(`Iniciando troca com ${playerName}!\n\nRedirecionando para conversas...`);
}

// Propose Trade Modal
function proposeTradeModal(userName, offering, wanting) {
  alert(`Proposta enviada para ${userName}!\n\nOferecendo: ${offering}\nPedindo: ${wanting}`);
}

// Form submission
document.getElementById('announce-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('figurinha-nome').value;
  const jogador = document.getElementById('figurinha-jogador').value;
  const pais = document.getElementById('figurinha-pais').value;
  const duplicatas = document.getElementById('figurinha-duplicatas').value;
  
  // Save to server
  fetch('/api/figurinhas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome: nome,
      jogador: jogador,
      pais: pais,
      duplicatas: parseInt(duplicatas),
      usuario: 'João' // Current user
    })
  }).then(response => {
    if (response.ok) {
      alert('Figurinha anunciada com sucesso!');
      closeAnnounceModal();
      this.reset();
      loadFeaturedPlayers(); // Reload featured
    }
  }).catch(err => console.error('Erro:', err));
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedPlayers();
  loadRecommendations();
  loadRecentActivity();
});