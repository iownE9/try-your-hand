//获取应用实例
const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  
  data: {

  },

   //form提交函数
   formSubmit: function (e) {
    console.log(e.detail.value);
    wx.request({
      url: 'http://localhost:8080/login',
      header: {"Content-Type": "application/x-www-form-urlencoded" },//使用form方式传递参数
      //对应GO后端 PostForm 字段只支持 application/x-www-form-urlencoded 编码
      method: "POST",
      data: { school: e.detail.value.school, 
        studentID: e.detail.value.studentID, 
        studentPassword: e.detail.value.studentPassword, 
      },
      //请求成功
      success: function (res) {
        console.log(res);//打印服务器返回的数据
        if (res.statusCode == 200) {
          wx.showToast({
            title: '提交成功！！！',//状态码200，则登录成功
            icon: 'success',
            duration: 1000
          })
          // 将必要信息存储至用户手机 
          wx.setStorageSync("studentInfo", e.detail.value);
          wx.navigateBack({//跳转回原页面
            delta: 2
          })
        }
      }
    })//request函数
  


  },//formSubmit

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

  }
})