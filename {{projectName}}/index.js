const config = require('./config')

const handler = ({{event === 'HTTP' ? 'req, rep, ctx' : 'context, callback'}}) => {
  {{event === 'HTTP' ? "rep.send(config.base.title)" : "callback(null, config.base.title)"}}
}

const initializer = (context, callback) => {
  callback(null, '')
}

module.exports = {
  handler,
  initializer
}
