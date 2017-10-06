// 拿到全局应用程序实例
const app = getApp()

const API_URL = 'https://api.douban.com/v2/movie/subject/';

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '',
    loading: true,
    movie: {}
  },

  //生命周期函数--监听页面加载触发
  onLoad (options) {
    console.log(options)
    app.fetchApi(API_URL + options.id, (err, data) => {
      this.setData({ title: data.title, movie: data, loading: false })
      wx.setNavigationBarTitle({ title: this.data.title  })
    })
  }
})
