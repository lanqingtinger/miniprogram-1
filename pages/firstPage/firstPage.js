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
      'https://s4.ax1x.com/2022/02/11/HaepCt.jpg',
      'https://s4.ax1x.com/2022/02/11/HaVo6S.jpg'
    ],
    links: [
      '../product/product',
      '../incomService/IncomService',
      '../mine/mine'
    ],
    scrollHeight: "",
    productList: [
       [{ "name": "1sss", "value": "value1" },
      { "name": "2sss", "value": "value2" },
      { "name": "3sss", "value": "value3" },
      { "name": "4ssss", "value": "value4" }]
    , 
      [{ "name": "pagesss", "value": "value1" },
      { "name": "page2sss", "value": "value2" },
      { "name": "page3sss", "value": "value3" },
      { "name": "page4ssss", "value": "value4" }]
    ]
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
  viewMore() {
    wx.switchTab({
      url: '../product/product',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取屏幕可用高度
    let screenHeight = wx.getSystemInfoSync().windowHeight + "px";
    this.setData({
      scrollHeight: screenHeight
    })
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
     }
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

})