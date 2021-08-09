# intersection-observer

### 描述
基于浏览器intersection-observer的曝光埋点实验

### 代码实现
```
// main.js
// 1. 实例化IntersectionObserver对象
const intersectionObserver = new IntersectionObserver(
  function(entries) {
    entries.forEach((entry) => {
      // 当节点进入视窗
      if (entry.isIntersecting) {
        const ctm = entry.target.attributes["exposure-data"].value;
        console.log("sendsa::",ctm)
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // 不一定非得全部露出来  这个阈值可以小一点点
  }
);

// 2. 封装指令：调用observe监听dom
Vue.directive('exposure', {
  // 当被绑定的元素插入到 DOM 中时……
  bind(el) {
    // 监听元素
    intersectionObserver.observe(el)
  }
})

// 3. 使用
// 
<li class="item" v-for="num in nums" :key="num" v-exposure="num" :exposure-data="num">{{num}}</li>

```
### 示例
运行代码后访问 http://localhost:8080/#/list
