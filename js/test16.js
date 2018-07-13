
// Vue.directive('demo',{
//     bind:function(){
//         console.log('demo bound');
//     },
//     update:function(value){
//         this.el.innerHTML=
//         'name-'+this.name+'<br>'+
//         'value-'+value+'<br>'
//     }
// })

Vue.directive('demo',function(value){
    console.log(value);
    // console.log(value);
})

Vue.elementDirective('my-directive',{
    params:['a'],
    paramWatchers:{
        a:function(val,oldVal){
            // console.log(val);
            this.el.innerHTML=val;
        }
    },
    bind:function(){
        // console.log(this.params.a+'1');
        // console.log(this.el.className);
        // console.log(this.el.getAttribute('name'));
    }
})

new Vue({
    el:'#ex',
    data:{
        msg:'hello'
    },
    data:{
        someValue:'value'
    },
    methods:{
        up:function(){
            console.log('click');
        }
    }
})

