<template>
  <el-container direction="vertical">
    <el-header>
      <h1>My Blog</h1>
    </el-header>
    <el-container direction="vertical" class="blog-main">
      <el-row type="flex" justify="end">
        <el-col :span="4"><router-link to="addBlog">添加博客</router-link></el-col>
      </el-row>
      <el-main>
        <show-blog></show-blog>
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
  .blog-main{
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }
  a{
    text-decoration: none;
    color: #000;
  }
</style>
