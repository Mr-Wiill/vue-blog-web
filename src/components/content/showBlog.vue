<template>
  <el-container direction="vertical"  v-theme:bg="'wide'">
    <el-row type="flex" justify="center" >
      <el-col >
        <div class="blog-box" v-for="blog in filteredBlogs" v-box="'box'">
          <h4 v-rainbow><router-link :to="'/blog/'+blog.id">{{blog.title | toUpCase}}</router-link></h4>
          <article class="blog-article">{{blog.content | snippet}}</article>
          <el-row class="inscribe" type="flex" align="bottom">
            <span>分类：</span>
            <el-col :span="1" class="el-col-category" v-for="category in blog.categories">{{category}}</el-col>
            <el-col :span="4" :offset="2">作者：{{blog.author}}</el-col>
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
        this.$http.get('https://vue-blog-v112.firebaseio.com/posts.json')
          .then((data)=>{
            // this.blogs = data.body.slice(0,10);
            // console.log(data.json());
            return data.json();       //读取的是一个对象，并返回出去
          })
          .then((data)=>{
            var blogsArr = [];      //定义一个空数组，接收返回的一个个对象
            for (let key in data){
              data[key].id = key;   //给对象定义一个id，并把唯一key赋值给id
              blogsArr.push(data[key]);   //把读取的对象都添加到空数组里面
            }
            this.blogs = blogsArr;    //把blogsArr赋值给blogs
            // console.log(blogsArr)
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
              el.style.width = '850px';     //改变展示内容宽度
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
                return blog.content.match(this.search.toLowerCase())     //博客内容匹配
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
  .el-col-category{
    margin-right: 10px;
  }
</style>
