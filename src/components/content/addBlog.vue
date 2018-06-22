<template>
  <el-container direction="vertical">
    <el-container direction="vertical" class="addBlog-main">
      <el-row>
        <el-col>
          <form id="submit-form" v-if="!submitted">
            <div class="addBlog-title">
              <el-input type="text" placeholder="博客标题" required="required" v-model="blog.title"/>
            </div>
            <div class="addBlog-content">
              <textarea v-model="blog.content" placeholder="博客内容"></textarea>
            </div>
            <div class="addBlog-category">
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

            <el-button @click="postFn">发布博客</el-button>

          </form>
          <el-row v-if="submitted">
            <el-col><h3>博客发布成功</h3></el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-container direction="vertical">
        <el-row>
          <el-col><h2>博客预览</h2></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div id="preview" class="blog-box">
              <h4 v-rainbow>{{blog.title}}</h4>
              <article class="blog-article">{{blog.content}}</article>
              <el-row class="inscribe" type="flex" align="bottom">
                <el-col v-for="item in blog.categories" :span="4">{{item}}</el-col>
                <el-col :span="4">{{blog.author}}</el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-container>
      <router-link to="/">返回首页</router-link>
    </el-container>
  </el-container>
</template>

<script>

    export default {
        name: "addBlog",
      data(){
          return {
            submitted:false,
            blog:{
              title:'',
              content:'',
              author:'',
              categories:[],
              authors:['jack','tom','pony']
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
</style>
