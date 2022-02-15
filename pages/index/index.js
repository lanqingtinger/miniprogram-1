// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    console.log(event);
  },
});
