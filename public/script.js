// Função para mostrar seções
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

// Carregar figurinhas
async function loadFigurinhas() {
  const response = await fetch('/api/figurinhas');
  const figurinhas = await response.json();
  const container = document.getElementById('lista-figurinhas');
  container.innerHTML = '';
  figurinhas.forEach(fig => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>🏅 ${fig.nome}</h3>
      <p>📊 Quantidade: ${fig.quantidade}</p>
      <p>👤 Usuário: ${fig.usuario}</p>
      <button onclick="contactar('${fig.usuario}', '${fig.nome}')">💬 Marcar Troca via WhatsApp</button>
    `;
    container.appendChild(card);
  });
}

// Carregar locais
async function loadLocais() {
  const response = await fetch('/api/locais');
  const locais = await response.json();
  const container = document.getElementById('lista-locais');
  container.innerHTML = '';
  locais.forEach(local => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>📍 ${local.nome}</h3>
      <p>🏠 ${local.endereco}</p>
      <button onclick="contactarLocal('${local.contato}', '${local.nome}')">📱 Contato via WhatsApp</button>
    `;
    container.appendChild(card);
  });
}

// Função para contactar via WhatsApp
function contactar(usuario, figurinha) {
  const message = `Olá ${usuario}, estou interessado em trocar a figurinha ${figurinha}.`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function contactarLocal(contato, local) {
  const message = `Olá, gostaria de informações sobre trocas no ${local}.`;
  const url = `https://wa.me/${contato}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Adicionar figurinha
document.getElementById('form-figurinha').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const usuario = document.getElementById('usuario').value;
  await fetch('/api/figurinhas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, quantidade: parseInt(quantidade), usuario })
  });
  loadFigurinhas();
  e.target.reset();
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  loadFigurinhas();
  loadLocais();
});