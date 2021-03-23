// pages/home/school/school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "学校要闻",
        isActive: true
      },
      {
        id: 1,
        value: "综合信息",
        isActive: false
      },
      {
        id: 2,
        value: "通知公告",
        isActive: false
      },
      {
        id: 3,
        value: "学术动态",
        isActive: false
      }
    ],
  },
    // 点击事件  顶部栏
    noticeId(e){
      // 1 获取点击的索引序号
      const {index} = e.currentTarget.dataset;
      console.log(index);
      // 2 修改源数组
      let {tabs}=this.data;
      //循环遍历tabs数组 v 循环项  i 索引； 当i等于被点击的索引序号时，变为true,否则变为flase
      tabs.forEach((v,i)=> i===index ? v.isActive=true : v.isActive=false);
      // 3 赋值到data中
      this.setData({
        tabs
       })
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

  }
})