// Vue.component('alert-box', {
//     template: `
//       <div class="demo-alert-box">
//         <strong>Error!</strong>
//         <slot></slot>
//       </div>
//     `
// })

Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['post'],
  template: `
      
      <h3 class="blog-post">{{ post }}</h3>
    `
})

new Vue({
  el: '#app',
  data: {
    posts: {
      id: 1,
      title: 'My Journey with Vue'
    }
  }
})