const express = require('express');
const app = express();
const port = 3001;

app.use('/', (req, res) => res.send('API Projeto 1 funcionando!'));

app.listen(port, () => {
  console.log(`Projeto1 API rodando em http://localhost:${port}`);
});