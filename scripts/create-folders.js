const fs = require('fs');
const path = require('path');

const countries = [
  'brasil',
  'argentina',
  'franca',
  'alemanha',
  'espanha',
  'portugal'
];

const baseDir = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'copa-mundo-2026'
);

function ensureFolders() {
  countries.forEach(country => {
    const countryDir = path.join(baseDir, country);

    if (!fs.existsSync(countryDir)) {
      fs.mkdirSync(countryDir, { recursive: true });
      console.log(`Pasta criada: ${country}`);
    }
  });
}

ensureFolders();

console.log('Estrutura criada com sucesso.');