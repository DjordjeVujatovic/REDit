import express from 'express';
import { resolve } from 'path';
import cors  from 'cors';
import fallback from 'express-history-api-fallback';
import bodyParser from 'body-parser';

import config from '../config'
const mockData = require('./database/mock-data.json');

const app = express();


const logger = (req, res, next) => {
  console.log('logging..');
  next();
}
app.use(logger);
app.use(cors());
app.use(bodyParser.json());

app.get('/posts', function (req, res) {
  res.json(mockData.posts);
})

app.get('/weeks', function(req, res) {
  res.json(mockData.weeks)
})

app.get('/categories', (req, res) => {
  const { weeks } = mockData;
  const categories = weeks.map(week => week.categories)
        .reduce((el, nextEl) => el.concat(nextEl))
        .filter((category, index, categories) => categories.indexOf(category) === index);
  res.json(categories);
});


app.use((req, res, next) => {
  res.status(404).send('Page not found...');
  next();
});

module.exports = app;
