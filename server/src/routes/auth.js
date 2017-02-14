import cors  from 'cors';
import bodyParser from 'body-parser';
import database from '../database/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import config from '../../config';
import { SESSION_COOKIE } from '../app';




export default function(router) {
    router.use(cors())
    router.use(bodyParser.json())
    router.use(cookieParser())

    router.post('/register', (req, res)=> {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const {fname, lname, email, password} = req.body.users;
    const hash = bcrypt.hashSync(password, salt);

    database.query('INSERT INTO users(fname, lname, email, password) VALUES($1, $2, $3, $4) returning userid',
    [fname, lname, email, hash]).then(result => {
      const sessionUser = {email:email}
      const JWT = jwt.sign(sessionUser, config.get('APP_SECRET'))
        res.status(200).cookie(SESSION_COOKIE, JWT, {
            secure: config.get('HTTPS'),
            maxAge: 7200000,
            httpOnly: true
        }).json(result.rows)
    }).catch((error)=> {
        res.status(401).json({error})
    })

        //CREATE A USER WITH A HASHED PASSWORD
        //CREATE OBJECT WITH USER EMAIL
        //ENCRYPT THE OBJECT USING JWT
        //SEND THE TOKEN BACK TO THE USER
    })

    router.post('/login', (req, res)=> {
        database.query('')
    })

    router.post('/logout', (req, res)=> {
        if(req.cookies.token){
            res.clearCookie(SESSION_COOKIE);
        }
        res.status(200).json({success: 'Thank you come again!'})
    })

    return router;
}