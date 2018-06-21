import Vue from 'vue'

/*自定义指令*/
Vue.directive('rainbow',{
  bind(el, binding,vnode){
    el.style.color = '#'+ Math.random().toString(16).slice(2,6);    //随机生成博客标题字体颜色颜色
  }
});
Vue.directive('theme',
  (el,binding,vnode)=>{
    if (binding.value == 'wide'){
      el.style.maxWidth = '985px';     //改变展示内容宽度
    }
    if (binding.arg == 'bg'){
      el.style.background = '#CB554D';
      el.style.padding = '20px'
    }
  });
Vue.directive('box',
  (el,binding,vnode)=>{
    if (binding.value == 'box'){
      el.style.background = '#F7E3E2'
    }
  });
