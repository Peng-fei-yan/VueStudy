
// Vue.component('didi-component',{
//     template:'<div class="A">成功</div>'
// })

// var Child=Vue.extend({
//     template:'<div>我是对的</div>',
//     replace:true
// });

// var Parent=Vue.extend({
//     components:{
//         'didi-component':{
//             template:'<div class="A">又成功</div><br/>',
//         }
//     }
// });

// Vue.component('child',{
//     props:['myComponent'],
//     template:'<span>{{myComponent}},DDFE</span>'
// })

// var Child=Vue.extend({
//     props:['didiProps'],
//     template:'<div>{{didiProps}}我是对的</div>',
//     replace:true
// });

// var Parent=Vue.extend({
//     template:'<div class="A">又成功</div><br/><child v-bind:didi-Props="hello"></child>',
//     data:function(){
//         return {'hello':'hello,'}
//     },
//     components:{
//         'child':Child
//     }
// });

new Vue({
    el:'#app',
    data:{
        // message:'',
        // show:true,
        // url:'name',
        // some:'idname',
        // classA:'A',
        // isB:false,
        // isC:true,
        // items:[
        //     { title :'哈哈'},
        //     { title :'你好'}
        // ],
        // primitiveValues:{
        //     FirstName:'DIDI',
        //     LastName:'FE',
        //     Age:4
        // },
        // objectValues:{
        //     one:{
        //         msg:'Hello'
        //     },
        //     two:{
        //         msg:'DIDI FE'
        //     }
        // },
        // users:[
        //     {
        //         name:'快车',
        //         tag:1
        //     },
        //     {
        //         name:'出租车',
        //         tag:2
        //     },
        //     {
        //         name:'顺丰车',
        //         tag:3
        //     }
        // ],
        // ddfe:{
        //     'didi-orange':true,
        //     'didi-green':true
        // }
        info:{
            name:'111'
        }
    },
    components:{
        // 'didi-props':Parent,
        'child':{
            props:{
                msg:{
                    type:String
                }
            },
            template:'<div>{{msg}},你好</div>'
        }
    }
})