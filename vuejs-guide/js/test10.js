
// Vue.filter('wrap', function (value) {
//     return value
// })

// Vue.filter('capitalize', function (value) {
//     console.log(value.slice(1));
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
// })

Vue.filter('concat', function (value, input) {
    console.log(input);
    //input===this.userInput;
    return value + input;
})


new Vue({
    el: "#app",
    data: {
        message: "name",
        userInput: ""
    }
})