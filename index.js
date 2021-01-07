const http = require('http');
const geoip = require('geoip-lite');

http.get({ host: 'api.ipify.org', port: 80, path: '/' }, function (res) {
  res.on('data', function (ip) {
    const geo = geoip.lookup(String(ip));
    console.log(geo);
  });
});
