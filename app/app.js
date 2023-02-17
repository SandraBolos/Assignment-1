/* app.js
Sandra Bolos
301260176
02/09/2023 */


import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session  from 'express-session';
import mongoose from 'mongoose';

import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const port=3000;
import { Secret, MongoURI } from '../config/index.js';

import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

let localStrategy = passportLocal.Strategy;

import User from './models/user.js';

import indexRouter from '../app/routes/index.js';
import contactRouter from '../app/routes/contacts.js';
import authRouter from '../app/routes/auth.js';

const app = express();

mongoose.connect(MongoURI);
const db = mongoose.connection;

db.on('open', () => console.log(`Connected to MongoDB`));
db.on('error', () => console.log("Mongo Connection Error"));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/css',express.static(__dirname +'public/css'))
app.use('/pdf',express.static(__dirname +'public/pdf'))
app.use('/imgages',express.static(__dirname +'public/images'))



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));


app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/',indexRouter);
app.use('/',contactRouter);
app.use('/', authRouter);

app.listen(3000, () =>{console.log("running on 3000");
})
export default app;