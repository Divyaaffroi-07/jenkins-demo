const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('Backend API is working');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Backend running on port 3000');
});
