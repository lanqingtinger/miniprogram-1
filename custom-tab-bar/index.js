Component({
    data: {
        // 选中的 tab 
        active: 0,
        // 菜单列表
        list: [{
                "pagePath": "/pages/firstPage/firstPage",
                "text": "首页",
                "icon": "wap-home-o"
            },
            {
                "pagePath": "/pages/product/product",
                "text": "产品",
                "icon": "bag-o"
            },
            {
                "pagePath": "/pages/incomService/IncomService",
                "text": "金融服务",
                "icon": "balance-o"
            },
            {
                "pagePath": "/pages/mine/mine",
                "text": "我的",
                "icon": "user-o"
            }
        ]
    },
    methods: {
        // 标签切换
        onChange: function (event) {
            this.setData({
                active: event.detail
            })
            wx.switchTab({
                url: this.data.list[event.detail].pagePath,
            })
        }
    },
    ready: function () {
        let query=wx.createSelectorQuery().in(this);
        query.select(".tab-item").boundingClientRect(function(rect){
            wx.setStorageSync('tabHeight', rect.height)
        }).exec();     
      },
})