
const db = wx.cloud.database()
const product = db.collection('product')
Page({

  /**
   * Page initial data
   */
  data: {
    machine:"",
    company:"",
    thickness:"",
    beiwang:"",
    shua:"",
    note:"",
    daqie:{
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
      date_up:"",
      date_down:"",
      date_cut:"",
    },
    glue: {
      number_piece:"",
      dian:"",
      glue_used:"",
      glue_man:"",
      beiwang_glue:"",
      glue_used_beiwang:"",
      glue_man_beiwnag:"",
      shua_glue:"",
      glue_used_shua:"",
      glue_man_shua:"",
      xie_car:"",
      repair_piece:"",
      combine_piece:"",
      add_piece:"",
      shua_glue_glue:"",
      glue_manager:"",
      note_3:"",
      date_pao:"",
      date_bei:"",
      date_shua:"",
    },

    moji: {
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
      date_in_a:"",
      date_in_b:"",
      date_in_c:"",
      date_in_d:"",
    },

    currentDate: new Date().getTime(),
    currentDate_b: new Date().getTime(),
    currentDate_c: new Date().getTime(),
    currentDate_d: new Date().getTime(),
    currentDate_pao: new Date().getTime(),
    currentDate_bei: new Date().getTime(),
    currentDate_shua: new Date().getTime(),
    currentDate_up: new Date().getTime(),
    currentDate_down: new Date().getTime(),
    currentDate_cut: new Date().getTime(),
    currentDate_in: new Date().getTime(),
    currentDate_out: new Date().getTime(),
    minDate: new Date().getTime()-63080000000,
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    
    
    
    show:false,
    show_b:false,
    show_c:false,
    show_d:false,
    show_up:false,
    show_down:false,
    show_cut:false,
    show_pao:false,
    show_bei:false,
    show_shua:false,
    show_in:false,
    show_out:false,




  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  onInput_b(event) {
    this.setData({
      currentDate_b: event.detail,
    });
  },
  onInput_c(event) {
    this.setData({
      currentDate_c: event.detail,
    });
  },
  onInput_d(event) {
    this.setData({
      currentDate_d: event.detail,
    });
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

  onInput_pao(event) {
    this.setData({
      currentDate_pao: event.detail,
    });
  },

  onInput_bei(event) {
    this.setData({
      currentDate_bei: event.detail,
    });
  },

  onInput_shua(event) {
    this.setData({
      currentDate_shua: event.detail,
    });
  },

  onInput_in(event) {
    this.setData({
      currentDate_in: event.detail,
    });
  },

  onInput_out(event) {
    this.setData({
      currentDate_out: event.detail,
    });
  },

  onConfirm(event) {
 
    this.setData({
      'moji.cumo.date': this.timeFormat(event.detail),
      show: false
    });
  },

  onConfirm_b(event) {
    
    this.setData({
      'moji.yaguang.date': this.timeFormat(event.detail),
      show_b: false
    });
  },
  onConfirm_c(event) {
    
    this.setData({
      'moji.fanggu.date': this.timeFormat(event.detail),
      show_c: false
    });
  },
  onConfirm_d(event) {
  
    this.setData({
      'moji.guang.date': this.timeFormat(event.detail),
      show_d: false
    });
  },

  onConfirm_up(event) {
  
    this.setData({
      'daqie.date_up': this.timeFormat(event.detail),
      show_up: false
    });
   
  },

  onConfirm_down(event) {
  
    this.setData({
      'daqie.date_down': this.timeFormat(event.detail),
      show_down: false
    });
  },

  onConfirm_cut(event) {
  
    this.setData({
      'daqie.date_cut': this.timeFormat(event.detail),
      show_cut: false
    });
  },

  onConfirm_pao(event) {
  
    this.setData({
      'glue.date_pao': this.timeFormat(event.detail),
      show_pao: false
    });
  },


  onConfirm_bei(event) {
  
    this.setData({
      'glue.date_bei': this.timeFormat(event.detail),
      show_bei: false
    });
  },


  onConfirm_shua(event) {
  
    this.setData({
      'glue.date_shua': this.timeFormat(event.detail),
      show_shua: false
    });
  },

  onConfirm_in(event) {
  
    this.setData({
      'main_info.date_in': this.timeFormat(event.detail),
      show_in: false
    });
  },

  onConfirm_out(event) {
  
    this.setData({
      'main_info.date_out': this.timeFormat(event.detail),
      show_out: false
    });
  },

  timeFormat(time) {
    var date = new Date(time);
    return date.getMonth() + 1 +'/'+date.getDate()+'/'+date.getFullYear();
  },

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  onDisplay_b() {
    this.setData({ show_b: true });
  },
  onClose_b() {
    this.setData({ show_b: false });
  },
  onDisplay_c() {
    this.setData({ show_c: true });
  },
  onClose_c() {
    this.setData({ show_c: false });
  },
  onDisplay_d() {
    this.setData({ show_d: true });
  },
  onClose_d() {
    this.setData({ show_d: false });
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

  onDisplay_pao() {
    this.setData({ show_pao: true });
  },
  onClose_pao() {
    this.setData({ show_pao: false });
  },

  onDisplay_bei() {
    this.setData({ show_bei: true });
  },
  onClose_bei() {
    this.setData({ show_bei: false });
  },

  onDisplay_shua() {
    this.setData({ show_shua: true });
  },
  onClose_shua() {
    this.setData({ show_shua: false });
  },

  onDisplay_in() {
    this.setData({ show_in: true });
  },
  onClose_in() {
    this.setData({ show_in: false });
  },

  onDisplay_out() {
    this.setData({ show_out: true });
  },
  onClose_out() {
    this.setData({ show_out: false });
  },
  onChange(event) {
    this.setData({
      'moji.result': event.detail,
    });
  },
  getData() {
    product.doc(this.data.id).get().then(res=>{
      console.log(res)
      this.setData({
        daqie:res.data.daqie,
        glue:res.data.glue,
        moji:res.data.moji,
        main_info:res.data.main_info,
        production_info:res.data.production_info
      })
    })
  },
  formsubmit(res) {
    console.log(res)
    var main_info = {
      name:res.detail.value.name,
      model:res.detail.value.model,
      length:res.detail.value.length,
      width:res.detail.value.length,
      weight:res.detail.value.weight,
      height:res.detail.value.height,
      company:res.detail.value.company,
      date_in:res.detail.value.date_in,
      date_out:res.detail.value.date_out,
    }

    var production_info = {
      
      thickness:res.detail.value.thickness,
      beiwang:res.detail.value.beiwang,
      shua:res.detail.value.shua,
      machine:res.detail.value.machine,
      note:res.detail.value.note,
    }

    var daqie = {
      huang:res.detail.value.huang,
      daban:res.detail.value.daban,
      total_number_piece:res.detail.value.total_number_piece,
      bian_piece:res.detail.value.bian_piece,
      piece:res.detail.value.piece,
      flatness:res.detail.value.flatness,
      worker_responsible:res.detail.value.worker_responsible,
      car_number:res.detail.value.car_number,
      qie_manager:res.detail.value.qie_manager,
      cut_confirm:res.detail.value.cut_confirm,
      note:res.detail.value.note_2,
      date_up:this.data.daqie.date_up,
      date_down:this.data.daqie.date_down,
      date_cut:this.data.daqie.date_cut
    }

    var moji = {
          result:this.data.moji.result,
          piece_number_1:res.detail.value.piece_number_1,
          piece_number_2:res.detail.value.piece_number_2,
          piece_number_3:res.detail.value.piece_number_3,
          piece_number_4:res.detail.value.piece_number_4,
          piece_number_5:res.detail.value.piece_number_5,
          piece_number_6:res.detail.value.piece_number_6,
          piece_number_7:res.detail.value.piece_number_7,
          piece_number_8:res.detail.value.piece_number_8,
          piece_number_9:res.detail.value.piece_number_9,
          total_pian:res.detail.value.total_pian,
          total_piece:res.detail.value.total_piece,
          checker:res.detail.value.checker,
          moji_manager:res.detail.value.moji_manager,
          moji_worker:res.detail.value.moji_worker,
          note_4:res.detail.value.note_4,
          note_ban:res.detail.value.note_ban,
          cumo:{
            date:this.data.moji.cumo.date,
            IsChosen:res.detail.value.a
          },
          yaguang:{
            date:this.data.moji.yaguang.date,
            IsChosen:res.detail.value.b
          },
          fanggu:{
            date:this.data.moji.fanggu.date,
            IsChosen:res.detail.value.c
          },
          guang:{
            date:this.data.moji.guang.date,
            IsChosen:res.detail.value.d
          }
    }

    var glue = {
          date_pao:this.data.glue.date_pao,
          date_bei:this.data.glue.date_bei,
          date_shua:this.data.glue.date_shua,
          number_piece:res.detail.value.number_piece,
          dian:res.detail.value.dian,
          glue_used:res.detail.value.glue_used,
          glue_man:res.detail.value.glue_man,
          beiwang_glue:res.detail.value.beiwang_glue,
          glue_used_beiwang:res.detail.value.glue_used_beiwang,
          glue_man_beiwnag:res.detail.value.glue_man_beiwnag,
          shua_glue:res.detail.value.shua_glue,
          glue_used_shua:res.detail.value.glue_used_shua,
          glue_man_shua:res.detail.value.glue_man_shua,
          xie_car:res.detail.value.xie_car,
          repair_piece:res.detail.value.repair_piece,
          combine_piece:res.detail.value.combine_piece,
          add_piece:res.detail.value.add_piece,
          worker_responsible_glue:res.detail.value.worker_responsible_glue,
          glue_manager:res.detail.value.glue_manager,
          note_3:res.detail.value.note_3
    }

    wx.showLoading({
      title: '加载中',
    })

    product.doc(this.data.id).update({
      data:{
        main_info:main_info,
        production_info:production_info,
        daqie:daqie,
        glue:glue,
        moji:moji
      }
    }).then(res=>{
      wx.hideLoading({
        success: (res) => {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1500
          })
        },
      })
      
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