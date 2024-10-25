import express, { json, urlencoded } from 'express';

const app = express();

app.use(json()) // for parsing application/json
app.use(urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/courses', (req, res) => {
    res.status(200).json({ name: 'api testing' });
});

app.get('/course', (req, res) => {
    let name = req.query.name;
    res.json({ id: '1', name: name });
});

app.get('/course/:id', (req, res) => {
    let id = req.params.id;
    let name;
    if(id === '1') {
        name = 'mocha';
    };
    res.json({ id: id, name: name });
});

app.post('/course', (req, res) => {
    let name = req.body.name;
    res.json({ id: '2', name: name });
});

app.post('/course', (req, res) => {
    let name = req.body.name;
    res.json({ id: '2', name: name });
});

export default app;