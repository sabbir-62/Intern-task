const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/',{
            target: "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10",
            changeOrigin: true
        })
    )
}