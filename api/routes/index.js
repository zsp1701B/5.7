var express = require('express');
var router = express.Router();
var mongo = require('mongodb-curd')

/* GET home page. */
var db = 'search';
var content = 'content'
router.post('/api/getData', function(req, res, next) {
    let name = RegExp(req.body.name);
    mongo.find(db, content, { "name": name }, function(result) {
        if (!result) {
            res.send({
                code: 0,
                msg: "error"
            })
        } else {
            res.send({
                code: 1,
                msg: "success",
                data: result
            })
        }
    })
});


router.post('/api/find', function(req, res, next) {
    let name = RegExp(req.body.name);
    let style = req.body.style;
    let page = req.body.page;
    let pageSize = req.body.pageSize;
    mongo.find(db, content, { "name": name, "style": style }, function(result) {
        if (!result) {
            res.send({
                code: 0,
                msg: "error"
            })
        } else {
            res.send({
                code: 1,
                msg: "success",
                data: result
            })
        }
    }, {
        skip: (page - 1) * pageSize,
        sort: {
            money: 1
        }
    })
});

module.exports = router;