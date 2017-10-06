
//获取应用实例
const app = getApp()
const API_URL = 'https://api.douban.com/v2/movie/in_theaters'

Page({
  data: {
    title: '加载中...',
    movies: [],
    loading: true,
    start:0, //开始
    count:20,
    more:''
  },
  onLoad(){
    //调用应用实例的方法获取全局数据
    app.fetchApi(API_URL, (err, data) => {
      console.log(data)
      //更新数据
      this.setData({ title: data.title, movies: data.subjects, loading: false, more:'上划加载更多' })
    })

  },
   //下拉刷新
   loadMore(){
    this.setData({
      loading: true,
      count:this.data.count*2
    })
    console.log(this.data.count)
    if(this.data.count < this.data.total){
      app.fetchApi(API_URL+`?start=${this.data.start}&count=${this.data.count}`, (err, data) => {
        //更新数据
        this.setData({  movies: data.subjects, loading: false, more:'下拉加载更多'})
        console.log(this.data.count)
      })
    }else{
      wx.stopPullDownRefresh()
      this.setData({loading: false, more:'到底了'})
      console.log("到底了")
    }
    
  }
 
})
