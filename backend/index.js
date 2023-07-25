const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ 
        evento: 'pi-senac',
        test: 'fernando'
    });
});

app.listen(3333);
