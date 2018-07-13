
// Vue.directive('my-directive',{
//     deep:true,
//     update:function(obj){
//         console.log(obj.b.c);
//     }
// })

Vue.directive('my-directive',{
    acceptStatement:true,
    update:function(fn){
        console.log(fn.toString());
        fn();
    }
})

var demoVM=new Vue({
    el:'#demo',
    data:{
        a:5
    }
    // },
    // methods:{
    //     change:function(){
    //         demoVM.a.b.c=4;
    //     }
    // }
})