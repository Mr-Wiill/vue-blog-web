<template>
  <el-container direction="vertical">
    <el-header>
      <el-row class="header-row" >
        <el-col class="header-title" :span="6" >
          <h1><router-link to="/">My Blog</router-link></h1>
        </el-col>
        <el-col :span="8" :offset="2" class="search">
          <input class="search-input" placeholder="Search"  v-model="search"/>
          <i class="el-icon-search"></i>
        </el-col>
        <el-col :span="3" :offset="4">
          <router-link to="/addBlog" class="add-blog-btn">写博客</router-link>
        </el-col>
      </el-row>
    </el-header>
    <el-container direction="vertical" class="blog-main">
      <el-main>
        <router-view :search="search">
          <router-link></router-link>
        </router-view>
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
      },
      data(){
        return{
          search:''
        }
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
  .header-title a{
    color: #fff;
  }
  .el-main{
    margin: 0 auto;
    margin-bottom: 60px;
  }
  .blog-main{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    bottom: 0;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .add-blog-btn{
    color: #f5f5f5;
    font-size: 15px;
  }
  .search-input{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    width: 250px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    outline: 0;
    padding: 0 10px;
    font-size: 14px;
  }
  .el-icon-search{
    color: #696969;
    margin-left: -40px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
</style>
