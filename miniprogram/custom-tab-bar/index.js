Component({
  data: {
   active:null

  },
  methods: {
    onChange(event) {
      var nav_name = event.detail;
      wx.switchTab({
        url: `/pages/${nav_name}/${nav_name}`,
      })
      
      this.setData({ active: nav_name });
      
      
    }
  }
})