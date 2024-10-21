var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://teknopointapacptrsd.my.workfront.com/attask/api/v15.0/login?username=anirudh.kadam@teknopoint.in&password=Omniking$007',
  'headers': {
    'apiKey': 'dl5xtsaqnemxwhn9zwe6g911oqs347g1',
    'Cookie': 'wf-node=c8615d63-148a-4263-aad8-466ea20d0273'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
