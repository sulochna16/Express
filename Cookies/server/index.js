const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const PORT = 3000;
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    secret: "anythingwecanwrite",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
  })
);

app.get('/user', (req, res) => {
  let username = req.session.username;
  console.log(username);
  res.send("username: " + username);
});

app.get('/user/:uname', (req, res) => {
  let un = req.params.uname;
  req.session.username = un;
  res.send("Hey there, welcome!");
});

app.post('/users', (req, res) => {
  let obj = req.body;
  console.log(req.cookies);
  console.log(obj.cname);
  console.log(obj.cvalue);
  res.cookie(obj.cname, obj.cvalue);
  res.send('Got a request');
});

app.listen(PORT, () =>
  console.log('Example app listening on port', PORT)
);