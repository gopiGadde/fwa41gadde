var express = require('express');
var router = express.Router();
var value = Math.round(Math.random()*100);
var value2 = Math.round(Math.random()*10);
var x=Math.pow(value,value2); 
var y=Math.sign(value) 
var z=Math.tanh(value) 
var w=Math.trunc(value) 

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(`[Math.pow] applied to [${value}] is [${x}]<br>
  [Math.sign] applied to [${value}] is [${y}]<br>
  [Math.tanh] applied to [${value}] is [${z}]<br>
  [Math.trunc] applied to [${value}] is [${w}]<br>`); 
});

module.exports = router;
