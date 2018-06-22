<template>
  <el-container class="dialog-bg">
    <div class="read-more-dialog">
      <h4 v-rainbow>{{title}}</h4>
      <article class="blog-article">{{body}}</article>
      <i class="el-icon-close"></i>
    </div>
  </el-container>
</template>

<script>

    export default {
      name: "dialog",
      props:['title','body'],
      data(){
          return {

          }
      },
      created(){

      }
    }
</script>

<style scoped>
  .dialog-bg{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.1);
  }
  .read-more-dialog{
    width: 50%;
    height: auto;
    margin: 50px auto;
    background: #f8f9fa;
    position: relative;
    padding: 20px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }
  .el-icon-close{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }

</style>
