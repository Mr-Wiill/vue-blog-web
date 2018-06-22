<template>
  <el-container direction="vertical"  v-theme:bg="'wide'">
    <el-row type="flex" justify="center" >
      <el-col >
        <div class="blog-box" v-for="obj in blog" v-box="'box'">
          <h4 v-rainbow>{{obj.title}}</h4>
          <article class="blog-article">{{obj.body}}</article>
          <el-row class="inscribe" type="flex" align="bottom">
            <el-col :span="4">分类：vue.js</el-col>
            <el-col :span="4">作者：pony</el-col>
            <el-col :span="2" :offset="12" >
              <h4 class="read-more" @click="showBlog"><a>阅读全文</a></h4>
            </el-col>
          </el-row>
          <dia-log v-if="showLog" :title="obj.title" :body="obj.body"></dia-log>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import diaLog from '../../components/dialog/dialog'
    export default {
        name: "showBlog",
      components:{
          diaLog
      },
      data(){
          return {
            blog:[],
            showLog:false
          }
      },
      created(){
          this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then((data)=>{
              this.blog = data.body.slice(0,10);
            })
      },
      methods:{
        showBlog(){
          this.showLog =!this.showLog;
        }
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
