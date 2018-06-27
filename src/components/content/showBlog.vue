<template>
  <el-container direction="vertical"  v-theme:bg="'wide'">
    <el-row type="flex" justify="center" >
      <el-col >
        <div class="blog-box" v-for="blog in filteredBlogs" v-box="'box'">
          <h4 v-rainbow><router-link :to="'/blog/'+blog.id">{{blog.title | toUpCase}}</router-link></h4>
          <article class="blog-article">{{blog.body | snippet}}</article>
          <el-row class="inscribe" type="flex" align="bottom">
            <el-col :span="4">分类：vue.js</el-col>
            <el-col :span="4">作者：pony</el-col>
          </el-row>
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
      props:['search'],
      data(){
          return {
            blogs:[],
          }
      },
      created(){      //读取服务器数据
        this.$http.get('http://jsonplaceholder.typicode.com/posts')
          .then((data)=>{
            this.blogs = data.body.slice(0,10);
          })
      },
      methods:{

      },
      directives:{     //自定义事件
        'rainbow':{
          bind(el){
            el.style.color = '#696969';
          }
        },
        'theme':{
          bind(el,binding){
            if (binding.value == 'wide'){
              el.style.maxWidth = '985px';     //改变展示内容宽度
              el.style.minWidth = '760px'
            }
            if (binding.arg == 'bg'){
              el.style.background = '#CB554D';
              // el.style.padding = '20px'
            }
          }
        },
        'box':{
          bind(el,binding){
            if (binding.value == 'box'){
              el.style.background = '#F7E3E2'
            }
          }
        }
      },
      computed:{
          filteredBlogs:function(){       //过滤搜索结果
            return this.blogs.filter((blog)=>{
              if (blog.title.match(this.search.toLowerCase())) {      //博客标题匹配
                return blog.title.match(this.search.toLowerCase());
              }
              else {
                return blog.body.match(this.search.toLowerCase())     //博客内容匹配
              }
            })
          }
      }
    }
</script>

<style scoped>
  .blog-box a{
    color: #696969;
  }
</style>
