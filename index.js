import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];


server.post('/sign-up', (req, res) => {
    const userData = req.body;
    users.push(userData);
    res.send("OK");
  });

  server.post('/tweets', (req, res) => {
    const tweetData = req.body;
    tweets.push(tweetData);
    res.send("OK");
  });


  function getLastTen (tweets, users) { //lógica para pegar os últimos 10 tweets da array 'tweets' com o 'avatar' do array 'users'!
    const tweetsDiplay = [];


    if(tweets.length <=10) {
      for(let i = tweets.length-1; i >= 0; i--){
        for(let j = 0; j < users.length; j++) {
          if(tweets[i].username === users[j].username) {
            const username = tweets[i].username;
            const avatar = users[j].avatar;
            const tweet = tweets[i].tweet;
            tweetsDiplay.push(
              {
                username: username,
                avatar: avatar,
                tweet: tweet
              }
            );
          }
        }
      }
    } else {
      for(let i = tweets.length -1; i > tweets.length -11; i--){
        for(let j = 0; j < users.length; j++) {
          if(tweets[i].username === users[j].username) {
            const username = tweets[i].username;
            const avatar = users[j].avatar;
            const tweet = tweets[i].tweet;
            tweetsDiplay.push(
              {
                username: username,
                avatar: avatar,
                tweet: tweet
              }
            );
          }
        }
      }
    }
    return tweetsDiplay;
  }

  server.get('/tweets', (req, res) => {
    res.send(getLastTen(tweets, users));
  });



server.listen(5000);