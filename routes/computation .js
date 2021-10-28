var express = require('express');
var router = express.Router();
var value = Math.round(Math.random()*100);
var x=Math.pow(value); 
var y=Math.sign(value) 
var z=Math.tanh(value) 
var w=Math.trunc(value) 

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(`[Math.pow] applied to [${value}] is [${x}]<br>
  [Math.sign] applied to [${value}] is [${x}]<br>
  [Math.tanh] applied to [${value}] is [${x}]<br>
  [Math.trunc] applied to [${value}] is [${x}]<br>`); 
});

module.exports = router;