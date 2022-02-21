Page({
    data: {
        mapCtx: null,

        // 地图的宽高
        mapWidth: 100,
        mapHeight: 1200,

        // 位置的经纬度
        longitude: 120.1551,
        latitude: 30.27415,

        markers: [],
        textData: {
            name: '',
            desc: ''
        },

        //0: 加载完成 1:加载中
        searchLoadingStatus: 0,

        currentLocationInfo: {
            longitude: 0,
            latitude: 0
        }
    },
    onClickLeft() {
        wx.switchTab({
            url: '/pages/mine/mine',
        })
    },
    regionChange: function (e) {
        var that = this;
        var changeType = e.type;
    },
    amapGetRegeo: function (longitude, latitude) {
        var that = this;
        myAmapFun.getRegep({
            location: longitude + ',' + latitude,
            success: function (data) {
                if (data != null && data.length > 0) {
                    this.setData({
                        textData: {
                            name: data[0].desc,
                            desc: data[0].regeocodeData.formatted_address
                        },
                        currentLocationInfo: {
                            longitude: longitude,
                            latitude: latitude
                        }
                    });
                }
                that.setData({
                    searchLoadingStatus: 0
                });
            }
        })
    },
    onReady: function (e) {
        var that = this;
        // 使用wxwx.createMapContext 获取map上下文
        that.mapCtx = wx.createMapContext('locationMap', this);
    },
    onLoad(options) {
        var that = this;
        that.authorAddress();
    },
    // 用户地理位置授权
    authorAddress: function () {
        var that = this;
        that.getCurrentLocation('gcj02', function (res) {
            console.log(res);
            that.setData({
                longitude: res.longitude,
                latitude: res.latitude
            });
        });
    },
    // 初始化当前位置
    getCurrentLocation: function (typeCode, succFun) {
        var that = this;
        wx.getLocation({
            type: typeCode,
            success: function (res) {
                return succFun(res);
            },
            fail: function (res) {
                wx.openSetting({
                    success: function (data) {
                        console.log(data);
                        that.authorAddress();
                    },
                    fail: function () {
                        console.info("设置失败返回数据")
                    }
                })
            }
        })
    }
})