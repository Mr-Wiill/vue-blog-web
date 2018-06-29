<template>
  <el-container class="dialog-bg">
    <div class="detailed-dialog">
      <h4>{{msg}}</h4>
      <el-row :gutter="20" class="reset-button">
        <el-col :span="12"><el-button><router-link to="/">查看博客</router-link></el-button></el-col>
        <el-col :span="12"><el-button @click="close">重新编辑</el-button></el-col>
      </el-row>
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
            msg:'发布成功！'
          }
      },
      methods:{
        /*关闭窗口*/
        close(){
          this.$emit('closed',{     //closed用于父组件中绑定的自定义的事件名，$emit用于触发事件
            submitted : false       //子组件向父组件传值
          })
        }
      },
    }
</script>

<style scoped>
  .dialog-bg{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.6);
    z-index: 1;
  }
  .detailed-dialog{
    min-width:200px ;
    height: 100px;
    text-align: center;
    margin: 200px auto;
    background: #f8f9fa;
    position: relative;
    padding: 20px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    z-index: 999;
    color: #696969;
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
  .reset-button{
    margin-top: 40px;
  }
</style>
