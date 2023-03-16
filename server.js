const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz');
const jobsheetRoute = require('./router/jobsheet');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/quizaja', quizRoute)
app.use('/api/jawabansoal', jobsheetRoute)

app.listen(port,  () => console.log(`App Listening on port http://localhost:${port} !`));

