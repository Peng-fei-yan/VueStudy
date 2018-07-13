
// Vue.component('child',{
//     template:'#child-template',
//     data:function(){
//         return {msg:''}
//     },
//     methods:{
//         notify:function(){
//             if(this.msg.trim()){
                
//                 this.$dispatch('child-msg',this.msg)
//                 // console.log(this.msg);
//                 this.msg=''
//             }
//         }
//     }
// });

// new Vue({
//     el:'#events-example',
//     data:{
//         messages:[]
//     },
//     methods:{
//         'handleIt':function(msg){
//             console.log('a');
//             this.messages.push(msg);
//         },
//         'child-msg':function(msg){
//             console.log(this.messages);
//             this.messages.push(msg);
//         }
//     },
//     events:{
        
//     }
// })


var myMinin={
    created:function(){
        this.hello()
    },
    methods:{
        hello:function(){
            console.log('hello from mixin');
        }
    }
}

var component=Vue.extend({
    mixins:[myMinin],
    template:'<h1>hello~DIDI</h1>',
    created:function(){
        console.log('component hook called');
    }
})


new Vue({
    el:'#ex',
    components:{
        'my-component':component
    }
})

// var myMinin={
//     methods:{
//         foo:function(){
//             console.log('foo');
//         },
//         conflicting:function(){
//             console.log('from mixin');
//         }
//     }
// }

// var component=Vue.extend({
//     mixins:[myMinin],
//     template:'<h1>hello~DIDI</h1>',
//     created:function(){
//         console.log('component hook called');
//     },
//     methods:{
//         bar:function(){
//             console.log('bar');
//         },
//         conflicting:function(){
//             console.log('from self');
//         }
//     }
// })

// var vm=new component();

// vm.foo();

// vm.bar();
// vm.conflicting();