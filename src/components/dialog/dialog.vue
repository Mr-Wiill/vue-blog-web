<template>
  <el-container class="dialog-bg">
    <div class="detailed-dialog">
      <h2>{{blog.title}}</h2>
      <div>{{id}}</div>
      <article class="blog-article">{{blog.body}}</article>
      <i @click="close" class="el-icon-close"></i>
    </div>
    <div @click="close" class="dialog-fade"></div>
  </el-container>
</template>

<script>

    export default {
      name: "v-dialog",
      data(){
          return {
            // id:1,
            blog:{}
          }
      },
      props:['id'],
      methods:{
        /*关闭窗口*/
        close(){
          this.$emit('closed',{     //closed用于父组件中绑定的自定义的事件名，$emit用于触发事件
            showLog : false       //子组件向父组件传值
          })
        }
      },
      created(){
        this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id)
          .then((data)=>{
            this.blog = data.body;
          })
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
  .detailed-dialog{
    width: 50%;
    height: auto;
    margin: 50px auto;
    background: #f8f9fa;
    position: relative;
    padding: 20px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    z-index: 999;
  }
  .detailed-dialog h2{
    text-align: center;
  }
  .dialog-fade{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .el-icon-close{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  .blog-article{
    padding: 10px 0;
    text-indent: 2em;
  }
</style>
