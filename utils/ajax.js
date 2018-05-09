/**
 * Ajax 工具类
 * 
 * @author zhangboxuan
 * 
 * args: 
 *    uri  若存在url则舍弃该key
 *    url
 *    data
 *    header
 *    success
 */

const prefix = ''; // 自定义接口前缀

const request = (args, method) => {
  wx.request({
    url: args.url || prefix + args.uri,
    data: args.data,
    header: args.header,
    method: method,
    success: args.success
  })
}

const doGet = (args) => {
  request(args, 'GET')
}

const doPost = (args) => {
  request(args, 'POST')
}

module.exports = {
  doGet: doGet,
  doPost: doPost
}
