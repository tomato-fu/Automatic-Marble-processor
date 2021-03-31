// pages/part/part.js
const db = wx.cloud.database()
const product = db.collection('product')
const _=db.command
Page({

  /**
   * Page initial data
   */
  data: {
    result:[],
    show:false
  },
  delete() {
    this.setData({
      show:true
    })
    console.log(this.data.result)
    
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
   wx.cloud.callFunction({
     name:'removeAll',
     data:{
       result:this.data.result
     }
   }).then(res=>{
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

  selectAll() {
    var resultAll=[];
    for (let index = 0; index < this.data.listData.length; index++) {
      resultAll.push(this.data.listData[index].main_info.fullname);
    }
    this.setData({
      result:resultAll
    });

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
  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  noop() {},
  onChange(event) {
    this.setData({
      result: event.detail,
    });
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
      name:"AllconvertExcel",
       data:{
         result:this.data.result
       },
         }).then(res=>{

          console.log(res)
           this.getFileUrl(res.result.fileID);
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
    this.getData();
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