const Twit = require('twit');

const T = new Twit({
  consumer_key: 'k3nRN8rAy6WiFr5vnr9YBWofn',
  consumer_secret: 'AX0aSuleWZWmVUBHWJFTaRBTnOl0p264svhY2Lur7SmvCKCOrM',
  access_token: '245129880-xXnMmrOx5ASrHTc1k2RTu29dsjC4ZZb1EOUM6q8z',
  access_token_secret: 'vulCRjydmlTgC35ErhIE1bIxy1iXxzq7tMiLPB0l24UrM'
});

const users = [];

const stream = T.stream('statuses/filter', {follow: users});

stream.on('tweet', tweet => {
  if (users.indexOf(tweet.user.id_str) > -1) {
    console.log(tweet.user.name + ": " + tweet.text);
    T.post('statuses/retweet/:id', { id: tweet.id_str }, (err, data, response) => {
      console.log(data);
    });
  }
});