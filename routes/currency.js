let express = require('express')
let router = express.Router()

let Client = require('node-rest-client').Client

let options = {
  proxy: { host: 'tw.rter.info' },
}
let client = new Client(options)

const needsList = [
  'USDUSD',
  'USDHKD',
  'USDGBP',
  'USDAUD',
  'USDCAD',
  'USDSGD',
  'USDCHF',
  'USDJPY',
  'USDZAR',
  'USDSEK',
  'USDNZD',
  'USDTHB',
  'USDPHP',
  'USDIDR',
  'USDEUR',
  'USDKRW',
  'USDVND',
  'USDMYR',
  'USDCNY',
  'USDTWD',
]

router.get('/', (req, res) => {
  let url = 'https://tw.rter.info/capi.php'

  client.get(url, datas => {
    let realData = JSON.parse(Buffer.from(datas, 'hex').toString())
    let dataObject = {}
    const valueList = Object.values(realData)
    Object.keys(realData).forEach((data, index) => {
      if (needsList.find(key => data === key)) {
        dataObject[data] = valueList[index]
      }
    })

    res.json({
      ...dataObject,
    })
  })
})

module.exports = router
