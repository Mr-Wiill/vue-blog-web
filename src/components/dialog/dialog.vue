<template>
  <el-dialog title="提示" :visible.sync='dialogVisible' width="30%" :modal-append-to-body="false">
    <span>您确定要发布吗？</span>
    <span slot="footer" >
        <el-button @click="posted">确定</el-button>
        <el-button @click="closed">取消</el-button>
      </span>
  </el-dialog>
</template>

<script>
    export default {
      name: "v-dialog",
      data(){
          return {
            // msg:'发布成功！'
          }
      },
      props:['blog','dialogVisible'],
      methods:{
        /*把blog内容存储到服务器*/
        posted(){
          this.$http.post("https://vue-blog-v112.firebaseio.com/posts.json", this.blog)
            .then((data)=>{
              this.$router.push({path:"/blog/"+data.body.name})
            })
        },
        /*关闭窗口*/
        closed(){
          this.$emit('closed',{     //closed用于父组件中绑定的自定义的事件名，$emit用于触发事件
            dialogVisible : false       //子组件向父组件传值
          })
        }
      },
    }
</script>

<style scoped>

</style>
