# wechat-app
小程序demo

如何获取openid

getOpenid = (success) => {

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
