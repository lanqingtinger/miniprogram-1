// pages/firstPage/firstPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      'https://s4.ax1x.com/2022/02/11/HaV1zT.jpg',
      'https://s4.ax1x.com/2022/02/11/HaV1zT.jpg',
      'https://s4.ax1x.com/2022/02/11/HaV1zT.jpg',

      // 'https://s4.ax1x.com/2022/02/11/HaepCt.jpg',
      // 'https://s4.ax1x.com/2022/02/11/HaVo6S.jpg'
    ],
    links: [
      '../product/product',
      '../incomService/IncomService',
      '../mine/mine'
    ],
    scrollHeight: "",
    productList: [
      [{ "name": "银企直连", "value": "提升财务工作效率","id":"1" },
      { "name": "跨行资金管理平台", "value": "集团企业资金管理","id":"2" },
      { "name": "结算中心", "value": "总部对成员单位资金统一监控和管理","id":"3" },
      { "name": "企业网上银行", "value": "全面的网上公司","id":"4" }]
      ,
      [{ "name": "企业网上银行", "value": "全面的网上公司金融服务平台","id":"5" },
      { "name": "单证通", "value": "集团企业资金管理","id":"6" },
      { "name": "结算中心", "value": "总部对成员单位资金统一监控和管理","id":"7" },
      { "name": "企业网上银行", "value": "全面的网上公司金融服务平台","id":"8" }]
    ],
    planList: [
      {
        "imgSrc": "https://s4.ax1x.com/2022/02/11/HaV1zT.jpg",
        "planTheme": "跨行资金解决方案",
        "planDescrib": "解决您的跨行资金问题",
        "id":"1"
      },
      {
        "imgSrc": "https://s4.ax1x.com/2022/02/11/HaV1zT.jpg",
        "planTheme": "智慧园区解决方案",
        "planDescrib": "智慧园区解决方案",
        "id":"2"
      },
      {
        "imgSrc": "https://s4.ax1x.com/2022/02/11/HaV1zT.jpg",
        "planTheme": "制造业行业解决方案",
        "planDescrib": "制造业行业解决方案",
        "id":"3"
      },
      {
        "imgSrc": "https://s4.ax1x.com/2022/02/11/HaV1zT.jpg",
        "planTheme": "制造业行业解决方案",
        "planDescrib": "制造业行业解决方案",
        "id":"4"
      }
    ],
    zwHeight:"",
    user:{
      name:"小条条",
      teamId:"367890",
      comAddress:"上海分行闽兴支行",
      phoneNum:"13867812389"
    }
  },
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent]
    })
  },
  //更多
  viewMore() {
    wx.switchTab({
      url: '../product/product',
    })
  },
  //电话
  callTell(){
    let phone = this.data.user.phoneNum.replace(/[^0-9]+/g,'')
    wx.makePhoneCall({
      phoneNumber: phone,
      success:function(){
        console.log("come in?");
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取tabbar高度
    let tabBarHeight = wx.getStorageSync('tabHeight');
    //获取屏幕信息
    let res = wx.getSystemInfoSync();
    //获取屏幕宽度
    let windowWidth1 =res.windowWidth;
    let radio = 750/windowWidth1;
    //获取屏幕高度
    let windowHeight1 = res.windowHeight;
    //底部高度适配iphonex等底部有空白的机型
    const { screenHeight, safeArea: { bottom } } = res;
    if (screenHeight && bottom){
      let safeBottom = screenHeight - bottom;
      let zwHeight = (tabBarHeight+safeBottom)*radio+"rpx";
       //获取屏幕可用高度
      let scrollHeight = (windowHeight1 - tabBarHeight-safeBottom)*radio +"rpx";
      this.setData({
        zwHeight: zwHeight,
        scrollHeight: scrollHeight,
      })
    }else{
  //获取屏幕可用高度
    let scrollHeight = (windowHeight1 - tabBarHeight)*radio +"rpx";
    let zwHeight = tabBarHeight*radio+"rpx";
    this.setData({
      scrollHeight: scrollHeight,
      zwHeight:zwHeight
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
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        // 当前页面的 tabBar 索引
        active: 0
      })
    };
   

  },
// attached(){
//   var query = wx.createSelectorQuery();
//   query.select('van-tabbar-item').boundingClientRect()
//   query.exec(function (res) {
//     //res就是 所有标签为mjltest的元素的信息 的数组
//     console.log(res);
//     //取高度
//     // console.log(res[0].height);
//   })
// },
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

})