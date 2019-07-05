//index.js
//获取应用实例
Page({
  onLoad(){
    wx.getLocation({
      type: "gcj02",
      success: function(e) {
        console.log(e)
      }
    })
  },
  getUserInfo(e) {
    console.log(e.detail.rawData)
    console.log(e.detail.userInfo)
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  handleClick1(){
    wx.getUserInfo({
      withCredentials: true,
      success: function (res) {
        console.log(res)
      }
    })
  },
  handleClick2(){
    wx.authorize({
      scope: 'scope.address',
      success(res) {
        console.log(res)
      }
    })
    wx.chooseAddress({
      success(res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  },
  handleClick3(){
    wx.authorize({
      scope: 'scope.camera',
      success(res){
        console.log(res)
      }
    })
  }
})