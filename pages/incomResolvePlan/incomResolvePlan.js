// pages/incomResolvePlan/incomResolvePlan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: "",
    resolvePlan:{    
    "title":"跨行资金解决方案",
    "preface":"企业面临的问题：合作银行分散、u盾管理繁琐、手工环节多、集中管控难、资金效率低。",
    "outLine":"功能与特点:",
    "mainBody":[{"text":"统一的用户体系：系统支持统一的用户体系、权限与审批流程设置"},{"text":"统一的账户管理:基于已对接超过100家银行的强大直连能力，我们可将不同银行的不同架构体系聚合至系统中"},{"text":"统一的支付结算：通过对超过100百家银行银企直连接口的适配以及日处理量可达百万"}]
  }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取屏幕信息
    let res = wx.getSystemInfoSync();
    //获取屏幕宽度
    let windowWidth1 = res.windowWidth;
    let radio = 750 / windowWidth1;
    //获取屏幕高度
    let windowHeight1 = res.windowHeight;
    //获取屏幕可用高度
    let scrollHeight = windowHeight1 * radio + "rpx";
    this.setData({
      scrollHeight: scrollHeight,
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