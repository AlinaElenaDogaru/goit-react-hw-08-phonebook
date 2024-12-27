const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://connections-api.goit.global',
      changeOrigin: true,
    })
  );
};




