// var example1 = new Vue({
//     el: '#example-1',
//     data: {
//       counter: 0
//     }
//   })

// var example2 = new Vue({
//     el: '#example-2',
//     data: {
//         name: 'Vue.js'
//     },
//     // 在 `methods` 对象中定义方法
//     methods: {
//         greet: function (event) {

//             console.log(event);
//             // `this` 在方法里指向当前 Vue 实例
//             alert('Hello ' + this.name + '!')
//             // `event` 是原生 DOM 事件
//             if (event) {
//                 console.log(event.target.tagName)
//             }
//         }
//     }
// })

// 也可以用 JavaScript 直接调用方法
//example2.greet() // => 'Hello Vue.js!'

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象

            console.log(event);

            if (event) event.preventDefault()
            console.log(message)
        }
    }
})