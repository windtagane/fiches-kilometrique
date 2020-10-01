import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ElectronApp from './main';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import rolesRouter from './routes/roles';

const app = express();
const electron = new ElectronApp();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/'));
app.use(express.static(path.join(__dirname, process.cwd() + '/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/roles', rolesRouter);
electron.start();

export default app;
