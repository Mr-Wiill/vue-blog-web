<template>
  <el-container direction="vertical" class="detail-container">
    <el-row type="flex" justify="center" >
      <el-col>
        <div class="detail-blog-box">
          <h2>{{blog.title}}</h2>
          <article class="detail-blog-article">{{blog.content}}</article>
          <el-row class="detail-inscribe" type="flex" align="bottom">
            <span>分类：</span>
            <el-col :span="2" class="el-col-category" v-for="category in blog.categories">{{category}}</el-col>
            <el-col :span="4" :offset="2">作者：{{blog.author}}</el-col>
            <el-col :span="8" :offset="2" class="blog-edit">
              <router-link :to="'/editBlog/'+id">编辑</router-link>
              <a @click="deleteBlog">删除</a>
            </el-col>
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
            id : this.$route.params.id,
            blog:{}
          }
      },
      created(){
        this.$http.get("https://vue-blog-v112.firebaseio.com/posts/"+this.id+'.json')
          .then((data)=>{
            // console.log(data)
            // this.blog = data.body;
            return data.json();
          })
          .then((data)=>{
            this.blog = data;
          })
      },
      methods:{
        deleteBlog(){
          this.$http.delete('https://vue-blog-v112.firebaseio.com/posts/'+this.id+'.json')
            .then(response=>{
              this.$router.push({path:'/'});
            })
        }
      }
    }
</script>

<style scoped>
  .detail-container{
    width: 850px;
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
  .blog-edit{
    text-align: right;
  }
  .blog-edit a{
    width: 50px;
    height: 30px;
    line-height: 30px;
    display:inline-block;
    margin-left: 10px;
    text-align: center;
    cursor: pointer;
  }
  .blog-edit a:first-child{
    color: blue;
  }
  .blog-edit a:last-child{
    color: red;
  }
</style>
