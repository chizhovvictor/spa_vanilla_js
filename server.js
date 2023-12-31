const express = require('express');
const path = require('path');

const app = express();


app.use('/src', express.static(path.resolve(__dirname, 'frontend', 'src')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('Server working...'));

