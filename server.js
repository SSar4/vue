var express = require('express')
var path = require('path')
var serverStatic = require('serve-static')

var app = express()
app.use(serverStatic(path.join(__dirname,'dist')))

var port = 5000

app.listen(process.env.PORT || port)