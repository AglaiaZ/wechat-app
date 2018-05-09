// pages/login/login.js
const passportModel = require('../../models/passport.js');
const toast = require('../../utils/toast.js');
const storage = require('../../utils/storage.js');

const globalStorage = getApp().globalData.storage;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 验证表单
   */
  formVerify: function (data) {
    if (!data.username) {
      toast.loading('请输入用户名', () => {
        return false;
      });
    } else if (!data.password) {
      toast.loading('请输入密码', () => {
        return false;
      });
    } else {
      return true;
    }  
  },
  /**
   * 提交登录表单
   */
  formSubmit: function (e) {
    var _this = this;
    var data = e.detail.value;
    if (!this.formVerify(data)) {
      return;
    } else {
      this.bindWechat();
    }
  },
  /**
   * 绑定微信号
   */
  bindWechat: function () {
    storage.doGet(globalStorage.OPENID, success);
    function success(openidRes) {
      storage.doGet(globalStorage.SESS_KEY, function (sessKeyRes) {
        // 绑定微信接口方法
      });
    }
  }
})