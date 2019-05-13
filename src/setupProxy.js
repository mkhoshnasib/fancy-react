const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy('/api', { target: 'https://accounts.spotify.com', changeOrigin: true}));
  app.use(proxy('/v1', { target: 'https://api.spotify.com', changeOrigin: true }));
};