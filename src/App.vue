<template>
  <div id="app">
   <blog></blog>
  </div>
</template>

<script>
  import Blog from './components/blog'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    Blog
  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    background: #F2F2F2;
    color: #696969;
    min-width: 890px;
  }
  #app{
    min-width: 760px;
  }
  h1,h2,h3,h4,h5,ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
    color: #696969;
    text-decoration: none;
  }
  /*blog show*/
  .blog-box{
    line-height: 30px;
    margin: 40px 20px;
    padding: 20px;
    border-radius: 8px;
  }
  .blog-box h4 a{
    cursor: pointer;
  }
  .blog-article a{
    color: #696969;
  }
  .inscribe{
    font-size: 13px;
    color: #8c8c8c;
  }

</style>
