const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/FrontendTienda'));

app.get('/*', (req,res) => {
  res.sendFile('index.html', {root: '/dist/FrontendTienda'})
});

app.listen(process.env.PORT || 4200);

