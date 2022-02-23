// pages/audiobook/audiobook.js
var data_ = require('../../utils/datas.js')
 
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0,
    
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
    this.setData({
      navLeftItems: data_.getTypeData(),
      navRightItems: data_.getProductList()
    })
  },
 
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.detail,
      index = e.detail;
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index,
      navRightItems: data_.getProductList()
    })
  }
})