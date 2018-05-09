/**
 * Storage 工具类
 * 
 * @author zhangboxuan
 * 
 */
const doSet = (key, data, complete) => {
  wx.setStorage({
    key: key,
    data: data,
    complete: complete
  })
}

const doGet = (key, complete) => {
  wx.getStorage({
    key: key,
    complete: complete
  })
}

const remove = (key, complete) => {
  wx.removeStorage({
    key: key,
    complete: complete
  })
}

const clear = () => {
  wx.clearStorage();
}

module.exports = {
  doSet: doSet,
  doGet: doGet,
  remove: remove,
  clear: clear
}
