
var Child=Vue.extend({
    props:['didi'],
    template:'<div>{{didi}}</div>',
    replace:true
})



var Parent=Vue.extend({
    template:'<p>i am parent</p><br><child :didi="hello"></child>',
    data:function(){
       return{ 'hello':'hello'}
    },
    components:{
        'child':Child
    }
})

new Vue({
    el:"#app",
    components:{
        'didi-p':Parent
    }
})