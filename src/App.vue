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
  }
  h1,h2,h3,h4,h5,ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  /*blog show*/
  .blog-box{
    line-height: 30px;
    margin-bottom: 50px;
    padding: 20px;
    border-radius: 8px;
  }
  .blog-article{
    color: #696969;
    text-indent: 2em;
  }
  .inscribe{
    font-size: 13px;
    color: #8c8c8c;
  }
  .read-more{
    width: auto;
    color: #F15948;
    cursor:pointer;
    text-align: center;
  }
</style>
