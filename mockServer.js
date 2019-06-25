let express    = require('express');        // call express
let app        = express();                 // 获得express定义的app，app对象此时代表整个web应用
let Mock = require('mockjs')

let initData = (num) => {
  let start = new Date().getTime()
  let nums = num || 10
  let { list } = Mock.mock({
    [`list|${nums}`]: [{
      'date': '@date',
      'name': '@name',
      "sex|1-2": true,
      'email': '@email',
      'province': '@province',
      'city': '@city',
      'age|1-100': 100,
      'number|1-1000': 1000,
      'zip': '@zip',
      'height|1-200': 200,
      'weight|1-100': 100,
      'company': '@name',
      'country': '@name',
      'protocol': '@protocol',
      'ip': '@ip',
      'url': '@url',
      'region|1': ['华东', '华南', '华中', '西南']
    }]
  })
  console.log((new Date().getTime() - start)/1000)
  return list
}
bodyParser = require('body-parser');

// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8181;        // set our port

// API路由配置
// =============================================================================
let router = express.Router();              // 获得express router对象
// 用get动词访问 http://localhost:8080/api
router.get('/:count', function(req, res) {
  let count = req.params.count
  count = Number(count)
  isNaN(count)? res.json(initData()) : res.json(initData(count));
});

// 跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 注册路由
// 所有的路由会加上“／api”前缀
app.use('/api', router);

// 启动server
// =============================================================================
//开始监听端口
app.listen(port);
console.log('Magic happens on port ' + port);
