
var bus=Vue.component('bus',function(resolve,reject){
    setTimeout(function(){
        resolve({
            props:['msg'],
            template:'<div @click="show">{{msg}},滴滴巴士</div>',
            data:function(){
                return {}
            },
            methods:{
                show:function(){
                    alert('haha~');
                }
            }
        })
    },1000);
})

// var bus=Vue.extend({
//     template:'#bus',
//     replace:true
// })

var business=Vue.extend({
    props:['msg'],
    template:'#business',
    replace:true
})

var fast=Vue.extend({
    props:['msg'],
    template:'#fast',
    replace:true
})

// Vue.component('didi',{
//     props:['item1'],
//     template:'<div>{{item1}},你好</div>'
// })


new Vue({
    el:'#ex',
    data:{
        currentView:'fast',
        hello:'hi'
        // items:[
        //     {title:'1'},
        //     {title:'2'},
        //     {title:'3'}
        // ]
    },
    components:{
        fast:fast,
        business:business,
        bus:bus
    }
})