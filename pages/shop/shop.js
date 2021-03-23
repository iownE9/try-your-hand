// pages/shop/shop.js
Page({
  data: {
    // 轮播图数组
    swiperList: []
  },
  // 页面开始加载 就会触发
  onLoad: function (options) {
   // 1 发送异步请求获取轮播图数据  优化的手段可以通过es6的 promise来解决这个问题 
    
    wx.request({
       //接口地址
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //  成功的回调函数
      success: (result) => {
        this.setData({
         swiperList: result.data.message
        })
      }
    });  
  },  
})