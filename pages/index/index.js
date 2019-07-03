// pages/discover/discover.js
Page({

  //页面的初始数据
  data: {
    arr: [],
    name: "",
    age: "",
    job: "",
    modifyMode: false,
    modifyIndex: -1
  },

  //生命周期函数--监听页面加载
  onLoad: function (options) {
    this.tempArr = []
  },

  handleChange(e) {
    console.log(e.currentTarget.id)
    let newData = {};
    switch (e.currentTarget.id) {
      case "name":
        newData = {
          name: e.detail.value
        };
        break;
      case "age":
        newData = {
          age: e.detail.value
        };
        break;
      case "job":
        newData = {
          job: e.detail.value
        };
        break;
    }
    this.setData(newData)
  },
  handleSubmit() {
    this.data.modifyMode ?
      this.tempArr.splice(this.data.modifyIndex, 1, {
        id: this.tempArr[this.data.modifyIndex],
        name: this.data.name,
        age: this.data.age,
        job: this.data.job
      }) :
      this.tempArr.push({
        id: Math.random().toString(36).slice(2),
        name: this.data.name,
        age: this.data.age,
        job: this.data.job
      })
    this.setData({
      arr: this.tempArr,
      name: "",
      age: "",
      job: "",
      modifyMode: false,
      modifyIndex: -1
    })
  },
  handleDelete(e) {
    let id = e.target.dataset.id
    this.tempArr.splice(id, 1)
    this.setData({
      arr: this.tempArr
    })
  },
  changeMode(e) {
    let id = e.target.dataset.id;
    this.data.modifyIndex === id ?
      this.setData({
        modifyMode: !this.data.modifyMode,
      }) :
      this.setData({
        modifyMode: true,
        modifyIndex: id,
        name: this.tempArr[id].name,
        age: this.tempArr[id].age,
        job: this.tempArr[id].job
      })
  }
})