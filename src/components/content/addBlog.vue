<template>
  <el-container direction="vertical" class="addBlog-main">
    <el-row>
      <el-col>
        <form id="submit-form" v-if="!submitted">
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
              <option v-for='author in blog.authors'>{{author}}</option>
            </select>
          </div>
          <div class="addBlog-content">
            <textarea v-model="blog.content" placeholder="博客内容"></textarea>
          </div>
          <el-button @click="postFn">发布博客</el-button>
        </form>
        <dia-log v-if="submitted" @closed="closed($event)"></dia-log>
      </el-col>
    </el-row>
    <el-container direction="vertical">
      <el-row>
        <el-col>
          <div class="preview-blog-head"><h3>博客预览</h3></div>
          <div class="preview-content">
            <h2>{{blog.title}}</h2>
            <article class="preview-blog-article">{{blog.content}}</article>
            <el-row class="inscribe" type="flex" align="bottom">
              <el-col v-for="item in blog.categories" :span="4">{{item}}</el-col>
              <el-col :span="4">{{blog.author}}</el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<script>
    import DiaLog from '../../components/dialog/dialog'
    export default {
        name: "addBlog",
      components:{
        DiaLog
      },
      data(){
          return {
            submitted:false,
            blog:{
              title:'',
              content:'',
              author:'',
              categories:[],
              authors:['作者：jack','作者：tom','作者：pony']
            }
          }
      },
      methods:{
          /*模拟把博客信息添加到服务器*/
          postFn:function () {
            this.$http.post(
              "http://jsonplaceholder.typicode.com/posts",    //服务器URL
              {
                title:this.blog.title,    //传送一个对象
                body:this.blog.content,
                userId:1
              }
            ).then((data)=>{
              console.log(data);    //测试(查看传输的数据)
                this.submitted = true;
            })
          },
        closed(event,value){
            this.submitted = value;
        }
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
