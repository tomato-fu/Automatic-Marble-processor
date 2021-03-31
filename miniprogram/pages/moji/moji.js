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
    result:[],
    piece_number_1:"",
    piece_number_2:"",
    piece_number_3:"",
    piece_number_4:"",
    piece_number_5:"",
    piece_number_6:"",
    piece_number_7:"",
    piece_number_8:"",
    piece_number_9:"",
    total_pian:"",
    total_piece:"",
    checker:"",
    moji_worker:"",
    moji_manager:'',
    note_4:'',
    note_ban:'',
    currentDate_up: new Date().getTime(),
    currentDate_down: new Date().getTime(),
    currentDate_cut: new Date().getTime(),
    currentDate_d: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    date_in_a:"",
    date_in_b:"",
    date_in_c:"",
    date_in_d:"",
    show_up:false,
    show_down:false,
    show_cut:false,
    show_review:false,
    show_d:false,
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
  onInput_d(event) {
    this.setData({
      currentDate_d: event.detail,
    });
  },
  onChange(event) {
    this.setData({
      result: event.detail,
    });
  },
   onConfirm_up(event) {
  
    this.setData({
      date_in_a: this.timeFormat(event.detail),
      show_up: false
    });
  },

  onConfirm_down(event) {
  
    this.setData({
      date_in_b: this.timeFormat(event.detail),
      show_down: false
    });
  },

  onConfirm_cut(event) {
  
    this.setData({
      date_in_c: this.timeFormat(event.detail),
      show_cut: false
    });
  },
   onConfirm_d(event) {
  
    this.setData({
      date_in_d: this.timeFormat(event.detail),
      show_d: false
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
  onDisplay_d() {
    this.setData({ show_d: true });
  },
  onClose_d() {
    this.setData({ show_d: false });
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
        moji:{
          result:this.data.result,
          piece_number_1:Number(this.data.piece_number_1),
          piece_number_2:Number(this.data.piece_number_2),
          piece_number_3:Number(this.data.piece_number_3),
          piece_number_4:Number(this.data.piece_number_4),
          piece_number_5:Number(this.data.piece_number_5),
          piece_number_6:Number(this.data.piece_number_6),
          piece_number_7:Number(this.data.piece_number_7),
          piece_number_8:Number(this.data.piece_number_8),
          piece_number_9:Number(this.data.piece_number_9),
          total_pian:Number(this.data.total_pian),
          total_piece:Number(this.data.total_piece),
          checker:this.data.checker,
          moji_manager:this.data.moji_manager,
          moji_worker:this.data.moji_worker,
          note_4:this.data.note_4,
          note_ban:this.data.note_ban,
          cumo:{
            date:this.data.date_in_a,
            IsChosen:this.data.a
          },
          yaguang:{
            date:this.data.date_in_b,
            IsChosen:this.data.b
          },
          fanggu:{
            date:this.data.date_in_c,
            IsChosen:this.data.c
          },
          guang:{
            date:this.data.date_in_d,
            IsChosen:this.data.d
          },
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
    product.where({
      name:'bobno'
      
    }).get().then(res=>{
      console.log( res.data[0]._id)
    }).catch(err=>console.log('fail'))
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