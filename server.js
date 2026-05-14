const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.json());

// Dados simulados para figurinhas, usuários e eventos
let figurinhas = [
  { id: 1, nome: 'Messi', jogador: 'Messi', pais: 'Argentina', duplicatas: 2, usuario: 'João', dataAnuncio: new Date() },
  { id: 2, nome: 'Neymar Jr', jogador: 'Neymar Jr', pais: 'Brasil', duplicatas: 1, usuario: 'Maria', dataAnuncio: new Date() },
  { id: 3, nome: 'Mbappé', jogador: 'Mbappé', pais: 'França', duplicatas: 3, usuario: 'Pedro', dataAnuncio: new Date() },
];

let usuarios = [
  { id: 1, nome: 'João', nivel: 12, figurinhasColetadas: 120, faltam: 32 },
  { id: 2, nome: 'Maria', nivel: 8, figurinhasColetadas: 85, faltam: 67 },
  { id: 3, nome: 'Kelvin', nivel: 15, figurinhasColetadas: 140, faltam: 12 },
];

let eventos = [
  { 
    id: 1, 
    nome: 'Encontro de Trocas', 
    local: 'Praça Central de São Lourenço do Sul',
    data: '2024-05-25T15:00:00',
    participantes: 32
  },
  {
    id: 2,
    nome: 'Mega Troca',
    local: 'Estádio Municipal',
    data: '2024-06-01T14:00:00',
    participantes: 45
  }
];

let locais = [
  { nome: 'Praça Central', endereco: 'Rua Principal, São Lourenço do Sul', contato: '5511999999999' },
  { nome: 'Estádio Municipal', endereco: 'Av. Esportiva, São Lourenço do Sul', contato: '5511988888888' },
  { nome: 'Parque da Amizade', endereco: 'Av. Parque, São Lourenço do Sul', contato: '5511977777777' },
];

// Rota para obter figurinhas
app.get('/api/figurinhas', (req, res) => {
  res.json(figurinhas);
});

// Rota para obter usuários
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota para obter eventos
app.get('/api/eventos', (req, res) => {
  res.json(eventos);
});

// Rota para obter locais
app.get('/api/locais', (req, res) => {
  res.json(locais);
});

// Rota para adicionar figurinha
app.post('/api/figurinhas', (req, res) => {
  const novaFigurinha = { 
    id: figurinhas.length + 1, 
    ...req.body,
    dataAnuncio: new Date()
  };
  figurinhas.push(novaFigurinha);
  res.status(201).json(novaFigurinha);
});

// Rota para registrar uma troca realizada
app.post('/api/trocas', (req, res) => {
  const { usuarioA, usuarioB, figurinhaA, figurinhaB } = req.body;
  res.json({ 
    sucesso: true, 
    mensagem: 'Troca registrada com sucesso!',
    trocaId: Math.random().toString(36).substr(2, 9)
  });
});

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  console.log(`📱 Troca Copa SLS - Versão 2.0`);
});