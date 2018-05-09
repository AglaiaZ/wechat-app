/**
 * Toast 工具类
 * 
 * @author zhangboxuan
 * 
 */

const success = (text, success) => {
  wx.showToast({
    title: text,
    duration: 500,
    complete: success
  })
}

const loading = (text, success) => {
  wx.showToast({
    title: text,
    icon: 'loading',
    duration: 500,
    complete: success
  })
}

module.exports = {
  success: success,
  loading: loading
}
