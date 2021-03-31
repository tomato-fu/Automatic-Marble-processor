const db = wx.cloud.database()
const product = db.collection('product')
Page({

  /**
   * 页面的初始数据
   */
  data: {
        name:"",
        model:"",
        company:"",
        length:"",
        width:"",
        height:"",
        weight:"",
        date_in:"",
        show:false,
        date_out:'',
        show_out:false,
        minDate: new Date().getTime()-63080000000,
     
  
        currentDate_in:new Date().getTime(),
        currentDate_out:new Date().getTime(),
        formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date_in: this.formatDate(event.detail),
    });
  },
  onDisplayOut() {
    this.setData({ show_out: true });
  },
  onCloseOut() {
    this.setData({ show_out: false });
  },
  onConfirmOut(event) {
    console.log(event)
    this.setData({
      show_out: false,
      date_out: this.formatDate(event.detail),
    });
  },
  formsubmit(res) {
    
    wx.showLoading({
      title: '加载中',
      mask:true
    });

    

    res.detail.value.length = Number(res.detail.value.length)
    res.detail.value.width = Number(res.detail.value.width)
    res.detail.value.height = Number(res.detail.value.height)
    res.detail.value.weight = Number(res.detail.value.weight)
    res.detail.value.density = res.detail.value.length *res.detail.value.width*res.detail.value.height/res.detail.value.weight
    res.detail.value.fullname = res.detail.value.name + res.detail.value.model
    res.detail.value.date_in = this.data.date_in
    res.detail.value.date_out = this.data.date_out
  
    if (res.detail.value.name =="" && res.detail.value.model=="" ) {
      wx.hideLoading()
      wx.showToast({
        title: '有空白未填写',
        icon: 'none',
        duration: 2000
      })
    }
  
    else {
      wx.cloud.callFunction({
        name:'getID',
        data:{
          name:res.detail.value.name,
          model:res.detail.value.model
        },
      }).then(res=>{
        wx.hideLoading()
        this.setData({
        product_id:res.result
      })
      if (this.data.product_id !=undefined) {
        wx.hideLoading()
      wx.showToast({
        title: '品种编号已占用',
        icon: 'none',
        duration: 2000
      })
      }
      else {

      product.add({
        data:{
          main_info:res.detail.value,
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
            note:"",
            date_up:"",
            date_down:"",
            date_cut:"",
          },
          moji:{
          result:[],
          piece_number_1:'',
          piece_number_2:'',
          piece_number_3:'',
          piece_number_4:'',
          piece_number_5:'',
          piece_number_6:'',
          piece_number_7:'',
          piece_number_8:'',
          piece_number_9:'',
          total_pian:'',
          total_piece:'',
          checker:'',
          moji_manager:'',
          moji_worker:'',
          note_4:'',
          note_ban:'',
          cumo:{
            date:"",
            IsChosen:""
          },
          yaguang:{
            date:'',
            IsChosen:''
          },
          fanggu:{
            date:'',
            IsChosen:''
          },
          guang:{
            date:'',
            IsChosen:''
          }
          },
          glue:{
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
            shua_glue:"",
            glue_manager:"",
            note_3:"",
            date_pao:"",
            date_bei:"",
            date_shua:"",
          },
         
        }
      }).then(res=> {
        wx.hideLoading()
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      })
      
    }
    
  })
  }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        // 当前页面的 tabBar 索引
        active: 'index'
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})