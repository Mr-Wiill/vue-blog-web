<template>
  <el-container direction="vertical"  v-theme:bg="'wide'">
    <el-row type="flex" justify="center" >
      <el-col >
        <div class="blog-box" v-for="obj in blog" v-box="'box'">
          <h4 v-rainbow>{{obj.title}}</h4>
          <p>{{obj.body}}</p>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>

    export default {
        name: "showBlog",
      data(){
          return {
            blog:[]
          }
      },
      created(){
          this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then((data)=>{
              this.blog = data.body.slice(0,10);
            })
      }
    }
</script>

<style scoped>
  .blog-box{
    background: #eee;
    line-height: 30px;
    margin-bottom: 50px;
    padding: 20px;
    border-radius: 8px;
  }
</style>
