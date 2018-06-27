<template>
  <el-container direction="vertical" class="detail-container">
    <el-row type="flex" justify="center" >
      <el-col>
        <div class="detail-blog-box">
          <h2>{{blog.title}}</h2>
          <article class="detail-blog-article">{{blog.body}}</article>
          <el-row class="detail-inscribe" type="flex" align="bottom">
            <el-col :span="4">分类：{{classify}}</el-col>
            <el-col :span="4">作者：{{author}}</el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
      name: "v-dialog",
      data(){
          return {
            classify:'vue.js',
            author:'pony',
            id : this.$route.params.id,
            blog:{}
          }
      },
      created(){
        this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id)
          .then((data)=>{
            this.blog = data.body;
          })
      }
    }
</script>

<style scoped>
  .detail-container{
    max-width: 850px;
    background: #fff;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }
  .detail-blog-box{
    line-height: 30px;
    padding: 20px;
    border-radius: 8px;
  }
  .detail-blog-box h2{
    text-align: center;
    margin-bottom: 10px;
  }
  .detail-blog-article{
    color: #696969;
    text-indent: 2em;
  }
  .detail-inscribe{
    font-size: 13px;
    color: #8c8c8c;
  }
</style>
