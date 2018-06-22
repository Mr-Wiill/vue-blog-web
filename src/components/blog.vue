<template>
  <el-container direction="vertical">
    <el-header>
      <el-row class="header-row" >
        <el-col class="header-title" :span="8" :offset="8">
          <h1>My Blog</h1>
        </el-col>
        <el-col :span="4" :offset="4">
          <router-link to="addBlog" class="add-blog-btn">写博客</router-link>
        </el-col>
      </el-row>
    </el-header>
    <el-container direction="vertical" class="blog-main">
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
  import AddBlog from './content/addBlog'
  import ShowBlog from './content/showBlog'
    export default {
        name: "blog",
      components:{
        AddBlog,
        ShowBlog
      }
    }
</script>

<style scoped>
  .el-header{
    width: 100%;
    line-height: 60px;
    background-color: #D2483E;
    color: #fff;
    text-align: center;
  }
  .header-row{
    max-width: 985px;
    margin: 0 auto;
  }
  .header-title{
    text-align: center;
  }
  .blog-main{
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .add-blog-btn{
    color: #f5f5f5;
    font-size: 15px;
  }
</style>
