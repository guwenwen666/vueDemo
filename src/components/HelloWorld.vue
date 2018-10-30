<template>
 
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    //多行字符串
    moreLines() {
      console.log(`我是
      一个
      多行字符串`);
    },
    es6String() {
      var name = "hhh";
      var age = 18;
      console.log(`hi,${name},你今年${age}岁了`);
    },
    toUpperCase() {
      var s = "fadfdvcd";
      var ss = s.toUpperCase();
      console.log(s);
      console.log(ss);
    },
    sindexOf() {
      var s = "111,224,iop";
      console.log(s.indexOf("iop"));
      console.log(s.indexOf("ii"));
    },
    arrIndexOf() {
      var arr = [10, 20, "30", "xyz"];
      arr.indexOf(10); // 元素10的索引为0
      arr.indexOf(20); // 元素20的索引为1
      arr.indexOf(30); // 元素30没有找到，返回-1
      arr.indexOf("30"); // 元素'30'的索引为2
      //注意了，数字30和字符串'30'是不同的元素。
      console.log("10", arr.indexOf(10));
      console.log("30", arr.indexOf(30));
      console.log('"30"', arr.indexOf("30"));
    },
    sort() {
      var arr1 = ["11", "5", "75", "23", "54", "2", "1"];
      arr1.sort();
      console.log("原数组" + ["11", "5", "75", "23", "54", "2", "1"], arr1);
      var arr2 = ["B", "C", "A"];
      arr2.sort();
      console.log("原数组" + ["B", "C", "A"], arr2); // ['A', 'B', 'C']
      var arr3 = ["11", "5", "75", "23", "54", "2", "1"];
      arr3.sort(function(a, b) {
        return a - b;
      });
      console.log("原数组"+["11", "5", "75", "23", "54", "2", "1"],arr3); 
    },
    reverse(){
      var arr = [1,3,56];
      console.log(arr.reverse());
    }
  },
  mounted() {
    //多行字符串
    this.moreLines();
    //模板字符串
    this.es6String();
    //大写
    this.toUpperCase();
    //寻找指定字符串的位置
    this.sindexOf();
    //寻找数组中指定数据的位置
    this.arrIndexOf();
    //sort（）给数组排序
    this.sort();
    //调序
    this.reverse();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
