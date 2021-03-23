Page({
  data: {

    // 轮播图数组
    swiperList: [],

    //要闻通知栏
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

  //滑动距离
  onPageScroll: function (t) {
    console.log(t.scrollTop)
  },

  // 要闻点击事件
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

  
})