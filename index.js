const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Gestion de Commandes. For more information, visit https://newexample.com/docs');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});