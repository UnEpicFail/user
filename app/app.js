try {
  var bodyParser = require('body-parser')
  var express = require('express');
  var config = require('../config/config.json');
  var app = express();

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  if(typeof config === 'undefined'){
    console.error('Bad config');
    return;
  }

  if(typeof config.port === 'undefined' || !config.port){
    console.error('No valid config');
    return;
  }


  /**
  *Api router
  **/

  app.get('/', function(req, res){
    sendOk(res, {
      'get':'ok'
    })
  })

  app.post('/create', function(req, res){
    console.log('post /create ', req.body);
    sendOk(res, {
      email: req.body.email,
      password: req.body.pwd
    })
  })

  app.put('/', function(req, res){
    sendOk(res, {

    })
  })

  app.delete('/', function(req, res){
    sendOk(res, {

    })
  })

  app.listen(config.port, function () {
    console.log('User module start on port 3000!');
  });

  function sendOk (res, data){
    res.send(JSON.stringify({
      data: data,
      success: true
    }))
  }

  function sendNotOk (res, data){
    res.send(JSON.stringify({
      data: data,
      error: true
    }))
  }
} catch (e) {
    console.error('Main error', e);
}
