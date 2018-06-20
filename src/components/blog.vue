<template>
  <el-container direction="vertical">
    <el-header><h1>My Blog</h1></el-header>
    <el-container class="blog-main">
      <el-main>
        <!--<add-blog></add-blog>-->
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
    width: 1200px;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }

</style>
