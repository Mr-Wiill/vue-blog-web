<template>
  <div class="dialog">
    <el-container direction="vertical" class="dialog-main">
      <el-row>
        <el-col>提示</el-col>
      </el-row>
      <el-row class="dialog-main-title">
        <el-col :span="24">您确定要{{dialogEvent}}吗？</el-col>
      </el-row>
      <el-row class="dialog-main-btn">
        <el-col :span="12"><el-button @click="confirmed">确定</el-button></el-col>
        <el-col :span="12"><el-button @click="cancelled">取消</el-button></el-col>
      </el-row>
    </el-container>
    <div class="bg-fade" @click="cancelled"></div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "v-dialog",
      data(){
          return {

          }
      },
      props:['blog','dialogEvent','blogId'],
      methods:{
        /*把blog内容存储到服务器*/
        confirmed(){
          // this.$http.post("https://vue-blog-v112.firebaseio.com/posts.json", this.blog)    //vue-resource请求方法
          if (this.dialogEvent == '发布') {
            axios.post("/posts.json", this.blog)    //axios请求方法
              .then((data)=>{
                this.$router.push({path:"/blog/"+data.data.name})
              })
          } else if(this.dialogEvent == '删除'){
            axios.delete('/posts/'+this.blogId+'.json')     //axios请求方法
              .then(response=>{
                this.$router.push({path:'/'});
              })
          }
        },
        /*关闭窗口*/
        cancelled(){
          this.$emit('closed',{     //closed用于父组件中绑定的自定义的事件名，$emit用于触发事件
            // dialogVisible : false       //子组件向父组件传值
          })
        }
      },
    }
</script>

<style scoped>
  .dialog-main{
    width: 25%;
    height: 190px;
    z-index: 99;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px;
    -webkit-transform: translateY(-60%) translateX(-50%);
    -moz-transform: translateY(-60%) translateX(-50%);
    -ms-transform: translateY(-60%) translateX(-50%);
    -o-transform: translateY(-60%) translateX(-50%);
    transform: translateY(-60%) translateX(-50%);
    color: #000;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }
  .bg-fade{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 1;
  }
  .dialog-main-title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 25px;
  }
  .dialog-main-btn{
    text-align: center;
  }
</style>
