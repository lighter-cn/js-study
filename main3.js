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
