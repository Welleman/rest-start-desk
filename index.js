import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3002;
const log = console.log;

import mainPage from './app/routes/main.js';
import testPage from './app/routes/testRoutes.js';

app.use(cors({
    origin:"http://localhost:*"
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', mainPage)
app.use('/test', testPage)

app.listen(port, log(`SERVER STTARTED http://localhost:${port}`))