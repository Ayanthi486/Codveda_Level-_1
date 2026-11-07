const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' }
];

app.get('/api/items', (req, res) => {
    res.json(items);
});

app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});