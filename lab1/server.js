const express = require('express');

const app = express();


app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
    });

    next();
});


app.get('/', (req, res) => {
    res.status(200).send('Welcome to Node.js and Express Server!');
});


app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Daram Spoorthi',
        section: 'S-10'
    });
});


app.get('/time', (req, res) => {
    res.status(200).json({
        currentTime: new Date()
    });
});


app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});


app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
});