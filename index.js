import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    users.push({
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    });
    res.send("OK");
  });

  server.post('/tweets', (req, res) => {
    tweets.push({
        username: "bobesponja",
        tweet: "eu amo o hub"
    });
    res.send("OK");
  });

  const lastTen = [];

  //lógica para pegar os últimos 10 tweets da array 'tweets'

  server.get('/tweets', (req, res) => {
    res.send(lastTen);
  });



server.listen(5000);