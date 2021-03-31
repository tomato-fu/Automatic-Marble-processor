// pages/search/search.js
const db = wx.cloud.database()
const product = db.collection('product')
const _=db.command
Page({

  /**
   * Page initial data
   */
  data: {

  },
  getData() {

    product.where(_.or([
      {
        'main_info.name':db.RegExp({
          regexp:'.*' + this.data.name,
          options:'i',
        })
      },
      {
        'main_info.model':db.RegExp({
          regexp:'.*' + this.data.name,
          options:'i',
        })
      },
      {
        'main_info.fullname':db.RegExp({
          regexp:'.*' + this.data.name,
          options:'i',
        })
      }
    ]

    )).field({
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

  pop() {
    wx.navigateTo({
      url: '/pages/part/part?name=' + this.data.name,
    })
    
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name:options.name
    })


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