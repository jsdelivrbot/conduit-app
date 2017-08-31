var router = require('express').Router();
const request = require('request');

//fake users
const options = {
  url: 'https://api.github.com/users',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-reddit-client'
  }
}

router.get('/git-users', function(req, res) {
  request(options, function(err, output, body) {
    var json = JSON.parse(body);
    res.send(json);
  });
});

router.get('/test', function(req, res) {
  res.send("hello word");
});

module.exports = router;
