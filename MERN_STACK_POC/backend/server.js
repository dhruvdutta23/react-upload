const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


server.use(middlewares, jsonServer.bodyParser)

server.get('/greet', (req, res) => {
 // res.jsonp(req.query)
 res.status(201).send("hi from server")
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})