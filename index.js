import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const username = req.users;
    const avatar = req.avatar;
    users.push({
        username: {username},
        avatar: {avatar}
    });
    res.send("OK");
  });

  server.post('/tweets', (req, res) => {
    const username = req.username;
    const tweet = req.tweet;
    tweets.push({
        username: {username},
        tweet: {tweet}
    });
    res.send("OK");
  });


  function getLastTen (tweets) { //lógica para pegar os últimos 10 tweets da array 'tweets'
    let lastTen = [];
    if(tweets.length <= 10) {
        lastTen = tweets;
    } else {
        for(let i = tweets.length; i > tweets.length - (10-1); i--) {
            push.lastTen(tweets[i]);
        }
    }
    return lastTen;
  }

  server.get('/tweets', (req, res) => {
    res.send(getLastTen(tweets));
  });



server.listen(5000);