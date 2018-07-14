// Vue.component('button-counter', {
//     data: function () {
//         return {
//             count: 0
//         }
//     },
//     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })

// new Vue({
//     el: '#components-demo',

// })

// Vue.component('blog-post', {
//     props: ['id'],
//     template: '<h3>{{ id }}</h3>'
//   })

// Vue.component('blog-post', {
//     props: ['post'],
//     template: `
//       <div class="blog-post">
//         <h3>{{ post.title }}</h3>
//         <div v-html="post.id"></div>
//       </div>
//     `
// })

Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text12')">
          Enlarge text2
        </button>
        <div v-html="post.id"></div>
      </div>
    `
  })

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue1' },
            { id: 2, title: 'Blogging with Vue1' },
            { id: 3, title: 'Why Vue is so fun1' }
        ],
        postFontSize: 1
    }
})