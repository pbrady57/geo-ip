const http = require('http');
const geoip = require('geoip-lite');

http
  .get('http://api64.ipify.org', res => {
    res.on('data', ip => {
      const geo = geoip.lookup(String(ip));
      console.log(geo);
    });
  })
  .on('error', err => {
    console.error(err.message);
  });
