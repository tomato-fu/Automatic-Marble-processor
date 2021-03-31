// pages/daqie/daqie.js
const db = wx.cloud.database()
const product = db.collection('product')
Page({

  /**
   * Page initial data
   */
  data: {
    name:"",
    model:"",
    huang:"",
    daban:"",
    total_number_piece:"",
    bian_piece:"",
    piece:"",
    flatness:"",
    worker_responsible:"",
    car_number:"",
    qie_manager:"",
    cut_confirm:"",
    note_2:"",
    currentDate_up: new Date().getTime(),
    currentDate_down: new Date().getTime(),
    currentDate_cut: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    date_up:"",
    date_down:"",
    date_cut:"",
    show_up:false,
    show_down:false,
    show_cut:false,
    show_review:false,
  },
  goReview() {
    this.setData({
      show_review:true
    })
  },

  onInput_up(event) {
    this.setData({
      currentDate_up: event.detail,
    });
  },
  onInput_down(event) {
    this.setData({
      currentDate_down: event.detail,
    });
  },
  onInput_cut(event) {
    this.setData({
      currentDate_cut: event.detail,
    });
  },
   onConfirm_up(event) {
  
    this.setData({
      date_up: this.timeFormat(event.detail),
      show_up: false
    });
   
  },

  onConfirm_down(event) {
  
    this.setData({
      date_down: this.timeFormat(event.detail),
      show_down: false
    });
  },

  onConfirm_cut(event) {
  
    this.setData({
      date_cut: this.timeFormat(event.detail),
      show_cut: false
    });
  },
  timeFormat(time) {
    var date = new Date(time);
    return date.getMonth() + 1 +'/'+date.getDate()+'/'+date.getFullYear();
  },
  onDisplay_up() {
    this.setData({ show_up: true });
  },
  onClose_up() {
    this.setData({ show_up: false });
  },

  onDisplay_down() {
    this.setData({ show_down: true });
  },
  onClose_down() {
    this.setData({ show_down: false });
  },

  onDisplay_cut() {
    this.setData({ show_cut: true });
  },
  onClose_cut() {
    this.setData({ show_cut: false });
  },
  onClose_review() {
    this.setData({
      show_review:false
    })
  },
  formsubmit(event) {
    console.log(event)
    this.setData({
      show_review:true
    })
    this.setData(event.detail.value)
    
  },
  onSave() {
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    wx.cloud.callFunction({
      name:'getID',
      data:{
        name:this.data.name,
        model:this.data.model
      },
    }).then(res=>{
      wx.hideLoading()
      this.setData({
      product_id:res.result
    })
    console.log(this.data.product_id)
    if(this.data.product_id==undefined) {
      wx.showToast({
        title: '品种或编号不存在,请确认输入是否正确!',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        show_review:false
      })
    }
    else {
  
    product.doc(this.data.product_id).update({
      data:{
        daqie:{
          huang:this.data.huang,
          daban:this.data.daban,
          total_number_piece:Number(this.data.total_number_piece),
          bian_piece:Number(this.data.bian_piece),
          piece:Number(this.data.piece),
          flatness:Number(this.data.flatness),
          worker_responsible:this.data.worker_responsible,
          car_number:Number(this.data.car_number),
          qie_manager:this.data.qie_manager,
          cut_confirm:this.data.cut_confirm,
          note:this.data.note_2,
          date_up:this.data.date_up,
          date_down:this.data.date_down,
          date_cut:this.data.date_cut
      }
    }
    }).then(res=>{
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
      this.setData({
        show_review:false
      })
    })
  }
  })
  
  
  
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