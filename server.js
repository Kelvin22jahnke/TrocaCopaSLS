const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.json());

// Dados simulados para figurinhas e locais
let figurinhas = [
  { id: 1, nome: 'Messi', quantidade: 2, usuario: 'João' },
  { id: 2, nome: 'Neymar', quantidade: 1, usuario: 'Maria' },
  // Adicione mais figurinhas conforme necessário
];

let locais = [
  { nome: 'Praça Central', endereco: 'Rua Principal, São Lourenço do Sul', contato: '5511999999999' },
  { nome: 'Estádio Municipal', endereco: 'Av. Esportiva, São Lourenço do Sul', contato: '5511988888888' },
  // Adicione mais locais
];

// Rota para obter figurinhas
app.get('/api/figurinhas', (req, res) => {
  res.json(figurinhas);
});

// Rota para obter locais
app.get('/api/locais', (req, res) => {
  res.json(locais);
});

// Rota para adicionar figurinha (simples, sem autenticação)
app.post('/api/figurinhas', (req, res) => {
  const novaFigurinha = { id: figurinhas.length + 1, ...req.body };
  figurinhas.push(novaFigurinha);
  res.status(201).json(novaFigurinha);
});

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});