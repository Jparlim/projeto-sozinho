import fastify from 'fastify'

const app = fastify()

app.listen({ port: 3000 }, () => console.log('SERVER IS RUNNING'))