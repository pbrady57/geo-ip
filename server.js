const geoip = require('geoip-lite');
const cors = require('cors');
const express = require('express');

const app = express();
app.use('*', cors());
app.use(express.json({ limit: '10kb' }));

app.get('/:ip', async (req, res) => {
  try {
    const { country } = geoip.lookup(req.params.ip);
    res.status(200).json({ country });
  } catch (error) {
    console.error(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
