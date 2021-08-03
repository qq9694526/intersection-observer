import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


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

// 曝光埋点
Vue.directive('exposure', {
  // 当被绑定的元素插入到 DOM 中时……
  bind(el) {
    // 监听元素
    intersectionObserver.observe(el)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
