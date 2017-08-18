var express = require('express');
// var Mock = require('mockjs');
var router = express.Router();


// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// });

var data = {
    a:'3'
};

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    console.log(req.path);
    res.send(data);
});

router.get('/about', function(req, res) {
    console.log(req.url);
    res.send('About birds');
});

module.exports = router;