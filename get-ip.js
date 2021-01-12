const publicIp = require('public-ip');

(async () => {
  try {
    const userIp = await publicIp.v4().then;
    window.top.postMessage(userIp, '*');
  } catch (error) {
    console.error(error);
  }
})();
