// components/plan/plan.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc:{type:String,value:""},
    planTheme: {type:String,value:""},
    planDescrib: {type:String,value:""},
    // planUrl:{type:String,value:""}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    viewPlan(e){
      console.log("ooooo",e)
      let plan =e.currentTarget.dataset.plan;
      if(plan=="跨行资金解决方案"){
        wx.navigateTo({
          url: '../../pages/incomResolvePlan/incomResolvePlan',
        })
      }
    }
  }
})
