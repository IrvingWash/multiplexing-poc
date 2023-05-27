const express = require('express');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(cors({ origin: '*' }));

app.get('/1', (_req, res) => {
	console.log('Request received to endpoint [/1]');

	res.send({ name: 'Bulbasaur' });
});

app.get('/2', (_req, res) => {
	console.log('Request received to endpoint [/2]');

	res.send({ name: 'Charmander' });
});

app.get('/3', (_req, res) => {
	console.log('Request received to ednpoint [/3]');

	res.send({ name: 'Squirtle' });
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
