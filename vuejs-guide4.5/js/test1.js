
var items=[
    {
        number:1,
        text:"one"
    },
    {
        number:2,
        text:"two"
    }
]

var vm=new Vue({
    el:"#app",
    data:{
        items:items,
        dd:"this.$el"
    },
    // components:{
    //     "my-item":{
    //         replace:true,
    //         computed:{
    //             fulltext:function(){
    //                 return "item"+this.text;
    //             }
    //         }
    //     }
    // }
    components:{
        item:{
            computed:{
                fulltext:function(){
                    return "item"+this.text;
                }
            }
        }
    }
})


// console.log(vm.$el);
// console.log(vm.$els);
// console.log(vm.$root);
// console.log(vm.$parent);
// console.log(vm.$children);
// console.log(vm.$refs);
// console.log(vm.$data);
// console.log(vm.$options);