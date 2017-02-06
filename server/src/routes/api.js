import cors  from 'cors';
import bodyParser from 'body-parser';
import database from '../database/db';
import { SESSION_COOKIE } from '../app.js';
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken';

export default function APIRoutes(router) {
router.use(cors({
  origin:['http://localhost:3000'],
  credentials: true
}));
router.use(bodyParser.json())
router.use(cookieParser())

router.use((req, res, next) => {
  if(!req.cookies[SESSION_COOKIE]){
    return res.status(403).json({error: 'Not authorized'});
  }
  const sessionUser = jwt.decode(req.cookies[SESSION_COOKIE])
  next();
})

router.get('/posts/1', (req, res) => {
const postsQuery = `select
                    "posts"."postId",
                    posts.title,
                    posts.date,
                    posts.description,
                    posts.votes,
                    json_agg(category.title) as category,
                    json_agg(tags.name) as tags
                    from
                      posts
                      inner join category on category."categoryId" = "posts"."categoryId"
                      left outer join posttags on "posttags"."postId" = "posts"."postId"
                      left outer join tags on tags."tagId" = tags."tagId"
                    group by
                      "posts"."postId"
                    order by
                      "posts"."postId" asc`
                  database.query(postsQuery, []).then((response)=>{
    res.json(response.rows);
  }).catch((error)=> {
    res.status(500).json({error});
  })
})

router.get('/weeks', (req, res) => {
  console.log('hi1')
    database.query(`select
                      weeks."weekId",
                      weeks.title,
                      json_agg(json_build_object("categoryId", category."categoryId", 'category', category.title)) as category
                    from
                      weeks
                      inner join category on category.weekid = weeks."weekId"
                    group by
                      weeks."weekId"
                    order by
                      weeks.title asc;`).then((response)=> {
                          console.log('hi3')
      res.json(response.rows);
        console.log('hi3')
    }).catch((error)=> {
      console.log(error)
    res.status(500).json({error});
    })
})

router.post('/votes/:postId', (req, res) => {
  const { postId, userId } = req.body.votes;
  database.query('INSERT INTO userpostvotes ("postId", "userId") VALUES ($1,$2)',
  [
    postId,
    userId
  ])
  .then((response)=> {
    req.status(200).json({success: true})
  }).catch((error)=> {
    res.status(418).json({error})
  })
})

router.post('/posts', (req, res) => {
  const {title, link, description, userid, categoryId, date } = req.body.posts;
  database.query('INSERT INTO posts (title, link, description, userid, "categoryId", date) VALUES($1, $2, $3, $4, $5, $6 )',
  [ title, link, description, userid, categoryId, date ]).then((response)=> {
  res.status(200).json({success: true})
}).catch((error)=> {
  res.status(500).json({error})
  })
})

return router;
}

// /post/:lessonid GET
// /weeks GET
// /votes/:postid POST
// /users   POST
// /posts POST