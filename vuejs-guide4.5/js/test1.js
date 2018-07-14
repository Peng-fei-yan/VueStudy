
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

new Vue({
    el:"#app",
    data:{
        items:items
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