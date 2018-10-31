<template>

 
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      obj: {
        name: "gww",
        age: 20
      }
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
      console.log("原数组" + ["11", "5", "75", "23", "54", "2", "1"], arr3);
    },
    reverse() {
      var arr = [1, 3, 56];
      console.log(arr.reverse());
    },
    doObj() {
      var xiaoming = {
        name: "小明",
        hobby: "游泳",
        city: "shanghai"
      };
      console.log(xiaoming.name);
      console.log(xiaoming.age);
      console.log(xiaoming["name"]);
      xiaoming.age = 18;
      console.log(xiaoming.age);
      delete xiaoming.age; //删除属性
      delete xiaoming["name"];
      console.log(xiaoming);
      //in 判断小明拥有的属性
      console.log("hobby" in xiaoming);
      console.log("toString" in xiaoming); //继承得到
      console.log(xiaoming.hasOwnProperty("name"));
      console.log(xiaoming.hasOwnProperty("hobby"));
      console.log(xiaoming.hasOwnProperty("toString"));
      //遍历对象
      for (var key in this.obj) {
        console.log("key=====", key);
      }
    },
    doMap() {
      console.log("map=======================");
      var m = new Map();
      m.set("gww", 100);
      m.set("gbl", 98);
      m.set("gyy", 80);
      console.log(m);
      console.log(m.get("gww"));
      console.log(m.has("gbl"));
    },
    doSet() {
      console.log("set=====================");
      var s1 = new Set(["A", "a", "A", "B"]);
      console.log(s1);
      var s2 = new Set();
      s2.add("uu");
      s2.add("mm");
      s2.add("mm");
      console.log(s2, s2.has("mm"));
    },
    doForOf() {
      var arr = [1, 5, 6, 7, "p"];
      var map = new Map([["A", "aaa"], ["B", "bbb"], ["C", "ccc"]]);
      var set = new Set([1, 5, 6, 7, "p"]);
      for (var x of arr) {
        console.log("arr", x);
      }
      for (var x of map) {
        console.log("map" + x[0], x[1]);
      }
      for (var x of set) {
        console.log("set", x);
      }
      console.log("foreach======================");
      arr.forEach(function(element, index, array) {
        console.log(element);
        console.log(index);
        console.log(array);
      });
      set.forEach(function(element, index, set) {
        console.log(element);
        console.log(index);
        console.log(set);
      });
      map.forEach(function(element, index, map) {
        console.log(element);
        console.log(index);
        console.log(map);
      });
    },
    doSum(...rest) {
      console.log(...rest);
      console.log("window", window);
      var _alert = window.alert;
      alert('hhh');
      _alert('hhhh');
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
    //对象
    this.doObj();
    //map
    this.doMap();
    //set
    this.doSet();
    //for..of
    this.doForOf();
    this.doSum(1);
    this.doSum(1, 2);
    // window.alert('hh');
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
