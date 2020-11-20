const express = require('express');

const app = express();

app.use('/opa', (req, res) => {
  res.send('Estou bem!');
});

app.listen(3000, () => {
  console.log("Backend running...");
});
