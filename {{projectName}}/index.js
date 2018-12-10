const config = require('./config')

const handler = ({{event === 'HTTP' ? 'req, rep, ctx' : 'context, callback'}}) => {
  {{event === 'HTTP' ? "rep.send('Hello World')" : "callback(null, '')"}}
}

const initializer = (context, callback) => {
  callback(null, '')
}

module.exports = {
  handler,
  initializer
}
