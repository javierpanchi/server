// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
const mongoose = require('mongoose');
const routes = require('./routes');

// Declare a route
// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

mongoose.connect('mongodb://localhost/pte')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err));
 
 routes.forEach((route, index) => {
 fastify.route(route)
})
 
 
start()