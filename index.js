const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("Antes...");
  next();
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
