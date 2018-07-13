
Vue.mixin({
    created:function(){
        var myOption=this.$options.myOption;
        console.log(this.$options);
        if(myOption){
            console.log(myOption);
        }
    }
})

var component=Vue.extend({
    template:'<h1>hello~DIDI</h1>'
})

new Vue({
    el:'#ex',
    components:{
        'my-component':component
    },
    myOption:'hello'
})