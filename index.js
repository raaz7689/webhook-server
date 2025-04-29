const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    res.status(200).send('Webhook received');
});

app.listen(PORT, () => {
    console.log(`Webhook server is running on http://localhost:${PORT}`);
});