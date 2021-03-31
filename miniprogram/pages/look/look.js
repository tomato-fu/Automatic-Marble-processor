// pages/look/look.js
const db = wx.cloud.database()
const product = db.collection('product')
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  getData() {
    product.field({
      main_info:true
    }).get().then(res=>{
      var stone_data;
      console.log(res)
      for (stone_data of res.data) {
        stone_data.main_info.date_in = stone_data.main_info.date_in.slice(0,-5)
        stone_data.main_info.date_out = stone_data.main_info.date_out.slice(0,-5)
      }
      this.setData({
        listData:res.data
      })
    })

  },
  gotoDetail(res) {
    var id = res.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },
  goSearch(res) {
  
    var name = res.detail
    wx.navigateTo({
      url: '/pages/search/search?name=' + name,
    })
  },
  onLoad: function (options) {
    this.getData()

  
  
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        // 当前页面的 tabBar 索引
        active: 'look'
      })
    }
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    this.getData()
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})