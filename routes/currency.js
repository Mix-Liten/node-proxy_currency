var express = require('express');
var router = express.Router();

var Client = require('node-rest-client').Client;
var client = new Client();

const needsList = ["USDUSD", "USDHKD", "USDGBP", "USDAUD", "USDCAD", "USDSGD", "USDCHF", "USDJPY", "USDZAR", "USDSEK", "USDNZD", "USDTHB", "USDPHP", "USDIDR", "USDEUR", "USDKRW", "USDVND", "USDMYR", "USDCNY", "USDTWD"]

router.get('/', function (req, res, next) {
  let queries = req.query
  let url = 'https://tw.rter.info/capi.php'
  var options = {
    host: url,
    method: 'GET'
  };

  client.get(url, function (datas, response) {
    let dataObject = {}
    const valueList = Object.values(datas)
    Object.keys(datas).forEach((data, index, arr) => {
      if (needsList.find(key => data === key)) {
        dataObject[data] = valueList[index]
      }
    })

    res.json({
      ...dataObject
    })
  });
});
module.exports = router;