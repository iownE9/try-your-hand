// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxInfo:{},//用户的微信信息
  },


  getUserInfo(e){
    console.log(e);//打印获取到的全部微信信息
    const wxUserInfo = e.detail.userInfo;//取出有用的信息-头像昵称等
    // 将信息存储至本地  
    wx.setStorageSync("wxInfo", wxUserInfo);
    //赋给mine页面数据变量  因为onLand函数此时已无法调用
    let wxInfo = wx.getStorageSync('wxInfo');
    this.setData({
      wxInfo
    });
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 读取存入本地的微信信息
    let wxInfo = wx.getStorageSync('wxInfo');
    if(wxInfo){ //若存在
      this.setData({
        wxInfo//存入mine页面数据
      })
    }
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

  }
})