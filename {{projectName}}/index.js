const config = require('./config')

module.exports.handler = function ({{event === 'HTTP' ? 'req, rep, ctx' : 'context, callback'}}) {
  {{event === 'HTTP' ? "rep.send('Hello World')" : "callback(null, '')"}}
}
