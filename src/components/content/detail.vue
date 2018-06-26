<template>
  <el-container direction="vertical">
    <el-row type="flex" justify="center" >
      <el-col>
        <div class="blog-box">
          <h4>{{blog.title}}</h4>
          <el-row class="inscribe" type="flex" align="bottom">
            <el-col :span="4">分类：vue.js</el-col>
            <el-col :span="4">作者：pony</el-col>
          </el-row>
          <article class="blog-article">{{blog.body}}</article>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
      name: "v-dialog",
      data(){
          return {
            id : this.$route.params.id,
            blog:{}
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

</style>
