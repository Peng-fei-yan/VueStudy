
// Vue.filter('filterE',{
//     read:function(val){
//         return 'read'+val;
//     },
//     write:function(newVal,oldVal){
//         return oldVal+ 'write';
//     }
// })

new Vue({
    el:"#app",
    data:{
        message:"hello world"
    },
    filters:{
        filterE:function(val){
            return val + 'nihao';
        }
    }
})