// pages/home/home.js
const db = wx.cloud.database()
const manager = db.collection('manager')
Page({

  /**
   * Page initial data
   */
  data: {
    Ismanager:true,
  },
  getOpenID() {
      wx.cloud.callFunction({
        name:'getUserID'
      }).then(res=>{
        console.log(res)
        this.setData({
          user_openid:res.result.openid
        })
      })
  },
  gotoIndex() {
    var that = this;
    if (that.data.user_openid == that.data.openId_2) {
    wx.redirectTo({
      url: '/pages/daqie/daqie',
    })
  }
   if (that.data.user_openid == that.data.openId_3) {
    wx.redirectTo({
      url: '/pages/glue/glue',
    })
   }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
   
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