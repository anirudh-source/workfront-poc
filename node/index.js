var request = require("request");
var options = {
  method: "POST",
  url: "https://teknopointapacptrsd.my.workfront.com/attask/api/v15.0/login?username=anirudh.kadam%40teknopoint.in&password=Omniking%24007",
  headers: {
    apiKey: "mzasgg8h99277ib4hgir7jiies53f5w5",
    Cookie: "wf-node=c8615d63-148a-4263-aad8-466ea20d0273",
  },
  gzip: "true"
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
