
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      proTitle: {type:String,value:""},
      proDescrib: {type:String,value:""},
      type:{type:String,value:""},
      proId:{type:String,value:""},
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
      checkProDetail(e){
        console.log(e)
        let id=e.currentTarget.dataset.proid;
         
          console.log(id)
          wx.navigateTo({
            url: `../../pages/productInfo/productInfo?id=${id}`,
          })
        
      }
    },
    onLoad:function(){
         console.log(this.proTitle)
    }
  })
  