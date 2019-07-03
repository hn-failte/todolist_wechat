// pages/more/more.js
Page({

  data: {
    arr: [],
    link: ""
  },

  onLoad: function (options) {
    let link = options.link
    console.log(options)
    this.setData({
      link: link
    })
    wx.request({
      url: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&for_mobile=1&start=0&count=200&loc_id=108288&_=0",
      method: "get",
      success: this.getList.bind(this)
    })
  },

  getList(res){
    this.setData({
      arr: res.data.subject_collection_items
    })
  },

  getDetail(e) {
    console.log(e.currentTarget)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
      success: function () {
        console.log("success")
      }
    })
  }
})