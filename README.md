# Troca Copa SLS

Site para troca de figurinhas da Copa do Mundo em São Lourenço do Sul.

## Funcionalidades

- Listar figurinhas disponíveis para troca
- Encontrar locais de troca na cidade
- Adicionar novas figurinhas
- Marcar trocas via WhatsApp

## Como executar

1. Instale as dependências:
   ```
   npm install
   ```

2. Execute o servidor:
   ```
   npm start
   ```

3. Abra o navegador em `http://localhost:3000`

## Desenvolvimento

Para desenvolvimento, use:
```
npm run dev
```

Isso usará nodemon para reiniciar o servidor automaticamente em mudanças.

## Estrutura do Projeto

- `server.js`: Servidor Express
- `public/index.html`: Página principal
- `public/styles.css`: Estilos CSS
- `public/script.js`: Lógica JavaScript do frontend
- `package.json`: Dependências e scripts

## Notas

- Dados são armazenados em memória, reiniciam ao parar o servidor.
- Para produção, considere usar um banco de dados.
- Os números de WhatsApp são fictícios; substitua pelos reais.