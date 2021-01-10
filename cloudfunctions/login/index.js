

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  const wxContext = await cloud.getWXContext()
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID
  }
}
