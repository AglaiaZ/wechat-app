/**
 * passport Model
 * 
 * @author zhangboxuan
 */

const ajax = require('../utils/ajax.js');

/**
 * 获取openId
 */
const getOpenid = (success) => {
  wx.login({
    success: function (res) {
      ajax.doGet({
        url: 'https://api.weixin.qq.com/sns/jscode2session',  // 微信提供的接口
        data: {
          appid: '',        // 设置微信的appid
          secret: '',
          grant_type: '',
          js_code: res.code
        },
        success: success
      })
    }
  })
}

module.exports = {
  getOpenid: getOpenid
}
