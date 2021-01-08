const geoip = require('geoip-lite');
const publicIp = require('public-ip');
const cors = require('cors');
const express = require('express');

const app = express();
app.use('*', cors());

app.get('/', async (req, res) => {
  try {
    const geo = geoip.lookup(await publicIp.v4());
    console.log(geo);
    res.status(200).json({ geo });
  } catch (error) {
    console.error(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
