Page({

  /**
   * 页面的初始数据
   */
  data: {
    proInfo: {
      name: "企业智联",
      desc: "银行和企业的连接。银行将自身所能够提供的服务功能，以接口的形式嵌入到企业的财资系统中，使企业财务人员可以直接通过自身的财务系统、资金系统向银行发起服务请求。",
      keywords: ["智联", "对接", "系统"],
      advantages: ["提高资金流转及使用效率，线上流程化办理，减少排队时间，节省人工成本，业务系统对接，提高收益，降低管理费用",
        "按照自身业务特点，线上流程化定制管控，可进行限额管控、流程管控等，缩短企业与银行结算时间，降低未达账项等偏差。",
        "可按照客户需求进行定制服务，便捷客户操作，定期进行版本迭代优化，拓展版本功能。"
      ],
      fitCus: "财务规范管理、注重财务工作效率的中大型企业；对银行账户、资金信息的实时性要求较高的中大型企业；具有资金集中管理需求的中大型企业",
      case: {
        caseName: "XC公司使用银企直联案例",
        caseBack: "XC公司为我国最大在线旅游企业（OTA），世界第二大OTA企业，市值超过270亿美元，年销售总额超过3000亿元人民币。总部设在中国上海，全国共计拥有员工人数超3万人。XC公司自2017年起开始建设资金管理平台，并与境内外主流银行陆续开展银企直联合作。截止2017年底，XC公司超1000家成员公司的银行账户纳入集团资金管理平台，公司总部和各成员公司财务部门通过资金管理平台对银行账户实现高效结算交易处理，银行账户和资金结算覆盖率双双超过90%。",
        comNeed: ["（1）银企直联上线账户余额变动情况推送功能。", "（2）银企直联上线批量对账功能。", "（3）推出包含上网代理功能的新版银企直联客户端代理", "（4）银企直联虚拟子账户电子回单推送功能", "（5）银企直联虚拟子账户批量支付功能", "（6）决策支持系统银企直联相关流量报表功能"],
        solu: " 分行成立专项工作小组，积极响应客户需求，总行交易银行部指派专家指导项目整个上线过程，对客户的任何疑问均在第一时间反馈解决。分行运营管理部、信息科技部和网络金融部等不断根据客户的需求，开发测试新功能。取得成果：经不懈营销努力，2017年6月份，XC公司决定与兴业银行对接银企直联系统。银企直联项目上线后，XC公司成员公司开立在兴业的银行账户都纳入统一账户管理体系，同时将兴业银行作为主要结算账户行之一，目前总计以后9家子公司及关联公司账户已纳入兴业银企直联平台。截止2018年4月底，XC公司成员公司在分行年日均存款达6.4亿元，日均理财达40亿元，年结算量超300亿元。基于我行完善的系统及优质的服务，经XC公司决定，将兴业银行纳入全国火车票收款合作行，进一步为分行与XC公司未来的战略合作打下了坚实的基础。"

      },
      recoProd: [{
        name: "全球资金管理SWIFT AMH",
        desc: "单点链接全球万家银行",
        id: "1"
      },{
        name: "跨行资金管理平台",
        desc: "集团企业资金管理",
        id: "2"
      } ,{
        name: "跨行资金管理平台",
        desc: "集团企业资金管理",
        id: "3"
      } ,{
        name: "跨行资金管理平台",
        desc: "集团企业资金管理",
        id: "4"
      } ]
    }

  },
  onLoad: function (option) {
    console.log(option)
  }

})