
const axios = require('axios');

exports.index = (req, res) => {
  let endpoint = 'https://bo21t0ju3b.execute-api.us-east-1.amazonaws.com/prod/portfolios/' // it could get .env file

  let portfolios = []
  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
    url: endpoint,
  };
  try {
    (async () => {
        let response =  await axios(options)
        portfolios = JSON.parse(response.data.body);
        res.render('index', {
          title: 'Portfolios',
          portfolios
        });
    })();
  } catch (err) {
    res.render('index', {
      title: 'Portfolios',
      portfolios
    });
  }
}
