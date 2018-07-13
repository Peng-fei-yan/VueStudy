// 我们的数据对象
//var data1 = { a: 1 }

Vue.filter('capitalize', function (value) {
    console.log(value.slice(1));
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })


// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
    el: '#list1',
    data: {
        data1: [
            { a: 'name' },
            { a: 'had' }
        ]
    }
})

            // 获得这个实例上的属性
            // 返回源数据中对应的字段
            //alert(vm.a == data1.a); // => true

            // 设置属性也会影响到原始数据
            //vm.a = 2
            //data.a // => 2

            // ……反之亦然
            //data.a = 3
            //vm.a // => 3