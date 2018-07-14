

new Vue({
    el:"#app",
    data:function(){
        return {
            items:[{
                content:"1 item",
                show:true
            },{
                content:"2 item",
                show:true
            },{
                content:"3 item",
                show:true
            }]
        }
    },
    methods:{
        toggle:function(item){
            alert(item.content);
        }
    }
})