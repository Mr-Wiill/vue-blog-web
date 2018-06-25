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
          <dia-log v-if="showLog" v-for="obj in blog" @closed="closeDialog" :title="obj.title" :body="obj.body"></dia-log>
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
        },
        closeDialog(val){
          this.showLog = val.showLog;
        }
      }
    }
</script>

<style scoped>

</style>
