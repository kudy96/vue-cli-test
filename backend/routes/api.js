var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    res.json({data : {test : "1234"}})
});

module.exports = router;
