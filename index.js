const express = require('express');
const bodyParser = require('body-parser');
const saudacao = require('./saudacaoMid');
const usuarioApi = require('./api/usuario');
const produtoApi = require('./api/produto');

const app = express();
produtoApi(app, 'texto adicional');

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);

app.use(saudacao('Rogerinho'));

app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

app.post('/corpo', (req, res) => {
  // let corpo = '';
  // req.on('data', parte => corpo += parte);
  // req.on('end', () => res.send(corpo));
  // console.log(typeof req.body);
  // console.log(req.body);
  res.send(req.body);
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
