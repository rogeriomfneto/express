const express = require('express');
const saudacao = require('./saudacaoMid');

const app = express();

app.use(saudacao('Rogerinho'));

app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

app.post('/corpo', (req, res) => {
  let corpo = '';
  req.on('data', parte => corpo += parte);
  req.on('end', () => res.send(corpo));
});

app.get('/clientes/relatorio', (req, res) => {
  res.send(`Cliente relatório:\n completo = ${req.query.completo}\n ano = ${req.query.ano}`);
});

app.get('/clientes/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado`);
});

app.get('/opa', (req, res, next) => {
  console.log("Durante...");

  res.json({
    data: [
      { id: 7, name: 'Ana', position: 1 },
      { id: 34, name: 'Bia', position: 2 },
      { id: 73, name: 'carlos', position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });

  next();

  // res.send('Estou bem!');
});

app.use((req, res) => {
  console.log("Depois...");
});

app.listen(3000, () => {
  console.log("Backend running...");
});
