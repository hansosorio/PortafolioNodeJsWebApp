
const axios = require('axios');
var Twitter = require('twitter');

exports.index = (req, res)  => {

  let idportfolio = req.params.idportfolio
  let endpoint = 'https://bo21t0ju3b.execute-api.us-east-1.amazonaws.com/prod/portfolios/' + idportfolio.toString()

  let client = new Twitter({
    'bearer_token': "AAAAAAAAAAAAAAAAAAAAANpfGAEAAAAAISUzgnu4F8PCWq%2BsX90H4%2F04SCQ%3DRy4fvI0GeG9MrcxFof4CXL7BKRggVlrKyvZfXg0BpEEfqwVj7h",
    'consumer_key': "W0uELNI8vVrZi98eEYLtEkIGq",
    'consumer_secret': "N9yZtlpkZPfXkokHzfV3O1iH8vYAW5CKBHuB731WYyIT2oBlf0"
  });
 
  let profile = {}
  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
    url: endpoint
  };
  res.setHeader("Content-Type", "text/html");
  try {
    axios(options)
      .then(data => {
        profile = data.data.Item;

        // let endpointTwitter = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + profile.username + '&count=2'
        var params = {
          screen_name: profile.username,
          count: 5
        };
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if (!error) {
            res.render('portfolio', {
              profile,
              tweets
            });
          }
          res.render('portfolio', {
            profile
          });
          res.setHeader("Content-Type", "text/html");
        });            
    }).catch(err => {
      res.render('portfolio', {
        profile
      });
    })
  } catch (err) {
    console.log("Error1")
    res.render('portfolio', {
      profile
    });
  }
}


exports.update = (req, res) => {

  let endpoint = 'https://bo21t0ju3b.execute-api.us-east-1.amazonaws.com/prod/portfolios/1/'

  let portfolios = []
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: endpoint,
    data: res.params
  };
  try {
    (async () => {
      let response =  await axios(options)
      portfolios = JSON.parse(response.data.body);
      res.redirect('/')
  })();      
  } catch (err) {
    res.redirect('/')
  }
};