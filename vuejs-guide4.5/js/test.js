new Vue({
    el: "#app",
    data:{
        didi:1,
        family:"family"
    },
    methods:{
        test(){
           let clo=setInterval(()=>{
             this.family=this.didi++;
           },1000)
        }
    }
    // computed: {
    //     example: function () {

    //         return setInterval(this.didi++, 1000);
    //     }
    // }
    
})