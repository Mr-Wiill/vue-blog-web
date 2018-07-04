<template>
  <el-container direction="vertical" class="addBlog-main">
    <el-row class="blog-content">
      <el-col>
        <div class="addBlog-title">
          <input @keyup="previewFn"  type="text" placeholder="博客标题" required="required" v-model="blog.title"/>
        </div>
        <div class="addBlog-category">
          <span>分类：</span>
          <label for="vue">Vue.js</label><input id="vue" type="checkbox" value="Vue.js" v-model="blog.categories">
          <label for="node">Node.js</label><input id="node" type="checkbox" value="Node.js" v-model="blog.categories">
          <label for="react">React.js</label><input id="react" type="checkbox" value="React.js" v-model="blog.categories">
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
        <el-button @click="submit">发布博客</el-button>
      </el-col>
    </el-row>
    <el-container direction="vertical" v-if="previewBlog">
      <el-row>
        <el-col>
          <div class="preview-blog-head"><h3>博客预览</h3></div>
          <div class="preview-content">
            <h4>{{blog.title}}</h4>
            <article class="preview-blog-article">{{blog.content}}</article>
            <el-row class="inscribe" type="flex" align="bottom">
              <el-col :span="8" class="el-col-category" >
                <ul>分类：
                  <li v-for="category in blog.categories">{{category}}</li>
                </ul>
              </el-col>
              <el-col :span="4">作者：{{blog.author}}</el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <dia-log v-if="dialogVisible" :blog="blog" :dialogEvent="dialogEvent" @closed="closed($event)"></dia-log>
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
            authors:['jack','tom','pony'],
            previewBlog:false,
            dialogVisible:false,
            dialogEvent:'发布',
            blog:{
              title:'',
              content:'',
              author:'',
              categories:[],
            }
          }
      },
      methods:{
        submit:function () {
            if (this.blog.title==''){
              alert('标题不能为空！')
            } else if(this.blog.content==""){
              alert('内容不能为空！')
            } else if( this.blog.categories==""){
              alert('请选择分类！')
            } else if (this.blog.author==''){
              alert('请选择作者！')
            } else{
              this.dialogVisible = true;
            }
          // this.dialogVisible = true;
          },
        closed(event,value){
            this.dialogVisible = value;
        },
        previewFn:function(){
          this.previewBlog = true;
        }
      }
    }
</script>

<style scoped>
  .blog-content{
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
    box-shadow: 2px 2px 5px #ccc;
    /*position: relative;*/
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
  .preview-content h4{
    text-align: center;
    /*margin-bottom: 10px;*/
  }
  .preview-blog-article{
    text-indent: 2em;
    font-size: 15px;
  }
  .addBlog-title input {
    width: 750px;
    height: 40px;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 0 10px;
  }
  .el-col-category ul li{
    list-style: none;
    padding: 0;
    margin-right: 10px;
    display: inline-block;
  }
</style>
