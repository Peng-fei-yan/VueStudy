//  var Child=Vue.extend({
//     props:['didi'],
//     template:'<div>{{didi}}</div>',
//     replace:true
// })



// var Parent=Vue.extend({
//     template:'<p>i am parent</p><br><child :didi="hello"></child>',
//     data:function(){
//        return{ 'hello':'hello'}
//     },
//     components:{
//         'child':Child
//     }
// }) 

new Vue({
  el: '#app',
  data: {
    info: {
      name: '顺风车'
    }
  },
  components: {
    // 'didi-p':Parent
    'child': {
      props: ['msg'],
      template: '<div>{{msg.name}}</div>'
    }
  }
})