function getTypeData() {
    var data = [
      {
        "id": 1,
        "desc":"热门推荐",
       
      },
      {
        "id": 2,
        "desc":"投资银行",
       
      },
      {
        "id": 3,
        "desc":"贸易金融",
      
      }

    ];
    return data || [];
  };
  function getProductList(type){
    return [
      {
        'id':1,
        title:"债券承销",
        desc:"商业银行金融债券",
        type:"hot"
      },
      {
        'id':2,
        title:"国内反响",
        desc:"国内反响堡垒",
        type:"hot"
      },
      {
        'id':3,
        title:"产业基金",
        desc:"产业基金保险",
        type:"new"
      },
      {
        'id':4,
        title:"内保外带",
        desc:"带有支付承诺的结算方式",
        type:"new"
      }, 
      {
        'id':13,
        title:"债券承销",
        desc:"商业银行金融债券",
        type:"hot"
      },
      {
        'id':14,
        title:"债券承销",
        desc:"商业银行金融债券",
        type:"hot"
      },
      {
        'id':12,
        title:"债券承销",
        desc:"商业银行金融债券",
        type:"hot"
      },
      {
        'id':18,
        title:"债券承销",
        desc:"商业银行金融债券",
        type:"hot"
      },
      {
        'id':19,
        title:"债券承销",
        desc:"商业银行金融债券",
        type:"hot"
      },
    ]
  }

  module.exports = {
    getTypeData: getTypeData,
    getProductList:getProductList
  }