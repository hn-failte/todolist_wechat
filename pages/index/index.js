//index.js
//获取应用实例
Page({
  data: {
    name: "",
    moreUrl: "",
    arr: []
  },
  onLoad(){
    wx.request({
      url: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0",
      method: "get",
      success: this.getData.bind(this)
    })
  },
  getData(res){
    this.setData({
      name: res.data.subject_collection.name,
      moreUrl: res.data.subject_collection.url,
      arr: res.data.subject_collection_items
    })
  },
  getDetail(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
      success: function(){
        console.log("success")
      }
    })
  },
  getMore(e){
    let link = e.currentTarget.dataset.link
    wx.navigateTo({
      url: "/pages/more/more?link="+link,
      success(){
        console.log("success")
      }
    })
  }
})