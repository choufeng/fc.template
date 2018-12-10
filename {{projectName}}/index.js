const config = require('./config')

handler ({{event === 'HTTP' ? 'req, rep, ctx' : 'context, callback'}}) {
  {{event === 'HTTP' ? "rep.send('Hello World')" : "callback(null, '')"}}
}

initializer (context, callback){
  callback(null, '')
}

module.exports {
  handler,
  initializer
}
