import Vue from 'vue'

/*自定义全局过滤器*/
Vue.filter('toUpCase',(value)=>{          //标题的首字母大写
  let strArr = value.toUpperCase().split(' ');
  for (let i=0,len=strArr.length; i<len; i++){
    strArr[i] = strArr[i].charAt(0)+strArr[i].slice(1).toLowerCase();
  }
  return strArr.join(' ');
});
Vue.filter('snippet',(value)=>{         //文章内容只显示100个字数
  if(value.length >= 100){
    return value.slice(0,100) + '...'
  } else{
    return value
  }

});


