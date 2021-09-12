"use strict";
/*------------------------------
  オブジェクト
------------------------------*/
// カラのオブジェクト
const obj = {};
console.log(obj);

// プロパティをもつオブジェクト
const obj2 = {
  "key": "value"
};
console.log(obj2);

// キーの"""や''は省略できる
const obj3 = {
  key: "value"
};
console.log(obj3);

// 複数のプロパティをもつオブジェクト
const obj4 = {
  red: "RED",
  green: "GREEN",
  blue: "BLUE"
};
console.log(obj4);

// 値を変数から参照させる
const name1 = "musashi";
const obj5 = {
  name: name1
}
console.log(obj5);

// プロパティと値に指定する変数名が同じ場合の省略記法
const hoge = "HOGE";
const obj6 = { hoge };
console.log(obj6);

// Objectからインスタンスを作成する
const obj7 = new Object();
console.log(obj7);

// プロパティへのアクセス
const obj8 = { 
  key: "value",
  "123": 123,
  "my-key": "my-value" 
};
console.log(obj8.key);
// console.log(obj8.123); // error
// console.log(obj8.my-key); // error
console.log(obj8["key"]);
console.log(obj8["123"]);
console.log(obj8["my-key"]);

// プロパティ名に変数を利用する場合
const lang = "ja";
const obj9 = {ja: "Japanese", en: "English"};
console.log(obj9[lang]);

// オブジェクトと分割代入
const ob1 = {
  ja: "Japanese",
  en: "English"
}
const {ja,en} = ob1;
console.log(ja);
console.log(en);

// プロパティの追加
const ob2 = {};
ob2.name = "musashi";
ob2["age"] = 21;
console.log(ob2);

// computed property names
const key1 = "key-string";
const ob3 = {
  [key1]: "value-string"
};
console.log(ob3[key1]); // ""でくくらなくてよい
console.log(ob3["key-string"]);

// delete演算子によるプロパティの削除
delete ob2.age;
console.log(ob2);

// オブジェクトの再代入と凍結
const ob4 = {};
ob4.name = "yo-da";
console.log(ob4);
// ob4 = {}; // error

const ob5 = Object.freeze({name: "stl"});
console.log(ob5);
// ob5.age = 40; // error

// プロパティの存在確認
const ob6  = {hoge: undefined};

// undefinedの比較だとどちらもtrueを返してしまう
console.log(ob6.hoge !== undefined); // 存在しているのにundefined
console.log(ob6.fuga !== undefined); // アクセスできずundefined

console.log("hoge" in ob6); // プロパティが存在しているためtrue

// hasOwnPropertyメソッド
console.log(ob6.hasOwnProperty("hoge")); // 存在しているためtrue

// Optional chaining演算子[ES2020]
const o1 = {
  a: {
    b: "hoge"
  }
};

console.log(o1?.a?.b);
console.log(o1?.notFound?.notFound);
console.log(undefined?.notFound?.notFound);
console.log(null?.notFound?.notFound);

console.log(o1?.["a"]?.["b"]);
console.log(o1?.["notFound"]?.["b"]);
console.log(o1?.["notFound"]?.["notFound"]);

// toStringとStringコンストラクタ
const o2 = {
  toString () { return "test"; }
}

const o3 = String(o2); // StringコンストラクタはtoStringメソッドを呼び出しているだけ
console.log(o3);

// 静的メソッド - 列挙
const obj_1 = {
  a: 10,
  b: 20,
  c: 30
};
console.log(Object.keys(obj_1));
console.log(Object.values(obj_1));
console.log(Object.entries(obj_1));

// 静的メソッド - マージと複製
const obj_2 = {a: "A"};
const obj_3 = {b: "B"};
const merged = Object.assign({}, obj_2, obj_3);
console.log(merged);

// 重複したプロパティめ名のものは後ろのもので値が上書きされる
const obj_4 = {a: "A"};
const obj_5 = {a: "B"};
const merged2 = Object.assign({}, obj_4, obj_5);
console.log(merged2);

// スプレッド構文によるマージ[ES2018]
const obj_6 = {a: "A"};
const obj_7 = {b: "B"};
const merged3 = {
  ...obj_6,
  ...obj_7
}
console.log(merged3);

const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
const obj__ = {
  level: 1,
  nest: {
      level: 2
  },
};
const cloneObj = shallowClone(obj__);
// `nest`プロパティのオブジェクトは同じオブジェクトのままになる 
obj__.nest.level = 5;
console.log(cloneObj.nest); // => true

/*------------------------------
  プロトタイプオブジェクト
------------------------------*/

console.log(typeof Object.prototype.toString);

const obj_0 = {
  "key": "value"
};

console.log(obj_0.toString === Object.prototype.toString);
console.log(obj_0.toString());

// プロトタイプメソッドとインスタンスメソッドの優先順位
const customObject = {
  toString () {
    return "custom value";
  }
}
console.log(customObject.toString());

// in演算子とhasOwnPropertyの比較
const obj__1 = {};

console.log(obj__1.hasOwnProperty("toString"));
console.log("toString" in obj__1)

// オブジェクトの継承元を明示して作成
const oo = Object.create(Object.prototype);
console.log(oo.hasOwnProperty === Object.prototype.hasOwnProperty);

/*------------------------------
  配列
------------------------------*/

// 配列の作成
const emptyArray = [];
const numbers = [1, 2, 3];
const matrix = [
  ["a" , "b"],
  ["c" , "d"]
];

// 配列の参照
console.log(numbers[0]);
console.log(matrix[1][0]);

// 配列の長さを取得
console.log(numbers.length);
// 配列の最後の要素にアクセスするには要素数-1のindexを参照する
console.log(numbers[numbers.length - 1]);

// 存在しないindexにアクセスする場合
console.log(numbers[3]); 

// 疎な配列
const arrayEmpty2 = ["a", , "c"];
console.log(arrayEmpty2[1]); // これもundefinedを返す

// 配列かどうかの判定
console.log(Array.isArray(numbers));
console.log(typeof numbers); // objectを返すので使えない

// 分割代入
const arr = ["A", "B", "C"];
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

// hasOwnPropertyでundefinedを見分ける

const denseArray = [1, undefined, 3];
// 要素そのものがない疎な配列
const sparseArray = [1, , 3];
console.log(denseArray[1]); // => undefined
console.log(sparseArray[1]); // => undefined

const denseArray2 = [1, undefined, 3];
const sparseArray2 = [1, , 3];
// 要素自体は`undefined`値が存在する
console.log(denseArray2.hasOwnProperty(1)); // => true
// 要素自体がない
console.log(sparseArray2.hasOwnProperty(1)); // => false

// 要素を検索
const arr1 = ["java", "javascript", "php"];
const indexOfJS = arr1.indexOf("javascript");
console.log(indexOfJS);
console.log(arr1.indexOf("hoge")); // 一致する要素がない場合-1が返る

// indexOfのngケース
const o_1 = {key: "value"};
const arr2 = ["a", "b", obj];
console.log(arr2.indexOf({key: "value"})); // 参照が異なるオブジェクトは-1になる

// findIndex
const colors = [
  { color: "red"},
  { color: "green"},
  { color: "blue"},
];
const indexOfBlue = colors.findIndex(obj => {
  return obj.color === "blue";
})
console.log(indexOfBlue); // -> 2

// Array#find
const blueColor = colors.find(obj => obj.color === "blue");
console.log(blueColor);
const whiteColor = colors.find(obj => obj.color === "white");
console.log(whiteColor); // 該当しないのでundefinedを返す

// Array#slice
const arr3 = ["A","B","C","D","E","F"];
console.log(arr3.slice(1,3));
console.log(arr3.slice(1));
console.log(arr3.slice(-1));
console.log(arr3.slice(1,1));
console.log(arr3.slice(4,1));

// Array#includes
const arr4 = ["Java", "JavaScript", "Ruby"];
console.log(arr4.includes("JavaScript"));
console.log(arr4.includes("PHP"));

// Array#some
console.log(colors.some(obj => obj.color === "true"));

// 追加と削除

const arr5 = ["a", "b", "c"];
arr5.push("d");
console.log(arr5);

arr5.pop();
console.log(arr5);

arr5.unshift("Z");
console.log(arr5);

arr5.shift();
console.log(arr5);

// Array#concat
const arr6 = arr5.concat(["d", "e"]);
console.log(arr6);

const arr7 = arr6.concat("任意の要素");
console.log(arr7);

// spread構文
const arr8 = ["A", "B", "C"];
const arr9 = ["a", ...arr8, "b"];
console.log(arr9);

// Array#flat
const arr10 = ["A",["B",["C"]]];
console.log(arr10.flat());
console.log(arr10.flat(2));

// Array#splice
const ar1 = ["a", "b", "c"];
ar1.splice(1,1);
console.log(ar1);
ar1.splice(1,1,"b","c");
console.log(ar1);

// lengthプロパティを使って配列を空にする

ar1.length = 0;
console.log(ar1);

// 空の配列を代入
let ar2 = [1,2,3]; // constだと再代入できない
console.log(ar2.length);
ar2 = [];
console.log(ar2.length); // もともと参照していた[1,2,3]はどこからも参照されなくなりガーベッジコレクションによりメモリから開放される

// Array#forEach
const ar3 = [1,2,3];
ar3.forEach((value, index, array)=>{
  console.log(value, index, array);
})

// Array#map
console.log(ar3.map(x => x * 10));

// Array#filter
console.log(ar3.filter(x => x % 2 !== 0));

// Array#reduce
console.log(ar3.reduce((accumulator, value, index, array) => { return accumulator + value;}, 0));