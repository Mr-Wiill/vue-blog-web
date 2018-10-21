<template>
  <el-container direction="vertical"  v-theme:bg="'wide'">
    <el-row type="flex" justify="center" >
      <el-col >
        <div class="blog-box" v-for="blog in filteredBlogs" v-box="'box'">
          <h4 v-rainbow><router-link :to="'/blog/'+blog.id">{{blog.title | toUpCase}}</router-link></h4>
          <article class="blog-article">{{blog.content | snippet}}</article>
          <el-row class="inscribe" type="flex" align="bottom">
            <el-col :span="8" class="el-col-category" >
              <ul>分类：
                <li v-for="category in blog.categories">{{category}}</li>
              </ul>
            </el-col>
            <el-col :span="4">作者：{{blog.author}}</el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  import axios from 'axios'
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
      created(){     //读取服务器数据
        /*vue-resource请求http方法*/
        /*this.$http.get('https://vue-blog-v112.firebaseio.com/posts.json')
          .then((data)=>{
            return data.json();           //读取的是一个对象，并返回出去
          })
          .then((data)=>{
            var blogsArr = [];            //定义一个空数组，接收每个对象的key值
            for (let key in data){
              data[key].id = key;         //给每个对象定义一个id，并把唯一key赋值给id
              blogsArr.push(data[key]);   //把读取的对象都添加到空数组里面
            }
            this.blogs = blogsArr;        //把blogsArr赋值给blogs
          })*/

        /*axios请求http的方法*/
        axios.get('/posts.json')
          .then((data)=>{
            return data.data;       //axios方法请求的是一个data对象（所有内容都存储在data对象里）
          })
          .then((data)=>{
            let arr = [];
            for (let key in data){
              data[key].id = key;
              arr.push(data[key]);
            }
            this.blogs = arr;
          })
      },
      computed:{
        filteredBlogs(){       //过滤搜索结果
          return this.blogs.filter((blog)=>{
            if (blog.title.match(this.search.toLowerCase())) {      //博客标题匹配
              return blog.title.match(this.search.toLowerCase());   //返回标题匹配的一个博客数组
            }
            else {
              return blog.content.match(this.search.toLowerCase())     //博客内容匹配
            }
          })
        }
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
      filters:{
        toUpCase(value){
          let strArr = value.toUpperCase().split(' ');
          for (let i=0,len=strArr.length; i<len; i++){
            strArr[i] = strArr[i].charAt(0)+strArr[i].slice(1).toLowerCase();
          }
          return strArr.join(' ');
        },
        snippet(value){
          if(value.length >= 100){
            return value.slice(0,100) + '...'
          } else{
            return value
          }
        }
      }
    }
</script>

<style scoped>
  .blog-box a{
    color: #696969;
  }
  .el-col-category ul li{
    list-style: none;
    padding: 0;
    margin-right: 10px;
    display: inline-block;
  }
</style>
