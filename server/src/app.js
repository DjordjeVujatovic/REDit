
import express from 'express';
import { resolve } from 'path';
import fallback from 'express-history-api-fallback';
import APIRoutes from './routes/api';
import './database/db';
import config from '../config';
import AUTHRoutes from './routes/auth';

const root = resolve(process.cwd(), config.get('STATIC_PATH'));
const app = express();
export const SESSION_COOKIE = 'redit_session';

const logger = (req, res, next) => {
  console.log('logging..');
  next();
}

const router = express.Router({
  mergeParams: true
})

app.use('/auth', AUTHRoutes(router))
app.use('/api',APIRoutes(router))

app.use(express.static(root));
app.use(fallback('index.html', {root}));


module.exports = app;
