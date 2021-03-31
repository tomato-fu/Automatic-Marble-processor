// pages/detail/detail.js
const db = wx.cloud.database()
const product = db.collection('product')
Page({

  /**
   * Page initial data
   */
  data: {
    show:false
  },
  delete() {
    this.setData({
      show:true
    })
    
  },
  getData() {
    product.doc(this.data.id).get().then(res=>{
      this.setData({
        listData:res.data
      })
    })
  },
  gotoEdit() {
    wx.navigateTo({
      url: '/pages/edit/edit?id=' + this.data.id,
    })
  },
  editting() {
    console.log(this.data.listData)
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  onDelete() {
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    product.doc(this.data.id).remove().then(res=>{
      wx.hideLoading()
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
      this.onClose()

    wx.reLaunch({
      url: '/pages/look/look',
    })
    })
    
  },
  getFileUrl(fileID) {
    let that = this;
    wx.cloud.getTempFileURL({
      fileList:[fileID],
    }).then(res=>{
      wx.setClipboardData({
        data: res.fileList[0].tempFileURL
      }).then(res=>console.log(res))
    }).catch(err=>console.log(err))
  },
  
  getLink() {
    wx.cloud.callFunction({
      name:"convertExcel",
       data:{
         product_id:this.data.id,
         name:this.data.listData.main_info.name,
         model:this.data.listData.main_info.model
       },
         }).then(res=>{
           this.getFileUrl(res.result.fileID);
         })
       },
  
  

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id:options.id
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
    this.getData()
    wx.stopPullDownRefresh()
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