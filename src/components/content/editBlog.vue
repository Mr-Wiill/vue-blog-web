<template>
  <el-container direction="vertical" class="addBlog-main">
    <el-row>
      <el-col>
        <form id="submit-form">
          <div class="addBlog-title">
            <el-input type="text" placeholder="博客标题" required="required" v-model="blog.title"/>
          </div>
          <div class="addBlog-category">
            <span>分类：</span>
            <label>Vue.js</label><input type="checkbox" value="Vue.js" v-model="blog.categories">
            <label>Node.js</label><input type="checkbox" value="Node.js" v-model="blog.categories">
            <label>React.js</label><input type="checkbox" value="React.js" v-model="blog.categories">
          </div>
          <div class="addBlog-author">
            <label>作者：</label>
            <select v-model="blog.author">
              <option v-for='author in authors'>{{author}}</option>
            </select>
          </div>
          <div class="addBlog-content">
            <textarea v-model="blog.content" placeholder="博客内容"></textarea>
          </div>
          <el-button @click="postFn">更新博客</el-button>
        </form>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "addBlog",
      data(){
          return {
            // submitted:false,
            authors:['jack','tom','pony'],
            id: this.$route.params.id,
            blog:{}
          }
      },
      methods:{
          updateBlog(){
            axios.get("/posts/"+this.id+'.json')
              .then(response=>{
                // console.log(response.data);
                this.blog = response.data
              })
          },
          /*模拟把博客信息添加到服务器*/
          postFn:function () {
            axios.put("/posts/"+this.id+'.json', this.blog)
              .then( response=>{
                this.$router.push({path:"/blog/"+this.id})
            })
          },
      },
      created(){
          this.updateBlog()     //页面加载的是执行updateBlog函数
      }
    }
</script>

<style scoped>
  #submit-form{
    padding: 20px;
  }
  .addBlog-title,.addBlog-content,.addBlog-category,.addBlog-author{
    margin-bottom: 20px;
  }
  .addBlog-main{
    width: 850px;
    background: #CB554D;
    color: #fff;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    padding: 20px;
    z-index: 0;
  }
  .addBlog-content textarea{
    width: 97.5%;
    min-height: 200px;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 10px;
  }
  .addBlog-category{
    float: left;
  }
  .addBlog-category input{
    margin-right: 20px;
  }
  .addBlog-author{
    float: right;
    margin-right: 30px;
  }
  .addBlog-author select{
    min-width: 150px;
    height: 25px;
    padding: 0 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .el-button{
    float: right;
    margin-right: 30px;
  }
  .preview-blog-head{
    text-align: center;
  }
  .preview-content{
    background: rgb(247, 227, 226);
    color: #696969;
    margin: 10px 20px;
    padding: 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    line-height: 30px;
    overflow: auto;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
  }
  .preview-content h2{
    text-align: center;
    margin-bottom: 10px;
  }
  .preview-blog-article{
    text-indent: 2em;
    font-size: 15px;
  }
</style>
