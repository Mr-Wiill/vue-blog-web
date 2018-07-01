<template>
  <el-container direction="vertical" class="detail-container">
    <el-row type="flex" justify="center" >
      <el-col>
        <div class="detail-blog-box">
          <h2>{{blog.title}}</h2>
          <article class="detail-blog-article">{{blog.content}}</article>
          <el-row class="detail-inscribe" type="flex" align="bottom" justify="start">
            <el-col :span="8" class="el-col-category" >
              <ul>分类：
                <li v-for="category in blog.categories">{{category}}</li>
              </ul>
            </el-col>
            <el-col :span="4">作者：{{blog.author}}</el-col>
            <el-col :span="12" class="blog-edit">
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
            return data.json();   //从服务器里读取blog对象，然后返回
          })
          .then((data)=>{
            this.blog = data;     //把返回值赋值给this.blog
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
  .el-col-category ul li{
    list-style: none;
    padding: 0;
    margin-right: 10px;
    display: inline-block;
  }
</style>
