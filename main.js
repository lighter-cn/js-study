// strict mode
"use strict";
// mistypedVariable = 42; // ReferenceError

// 大文字と小文字を区別する
const ex = "hoge";
const EX = "fuga";
console.log(ex); // output: hoge

// 一行コメント

/* 
  複数行コメント
*/

/*------------------------------
  変数と宣言
------------------------------*/
// const
const name = "Musashi";

// ,で区切って複数同時に定義できる
const name1 = "John",
  name2 = "Jack";

// 再代入でエラーになる
// const errorTest = "abc";
// errorTest = "def"; // invalid assignment to const 'errorTest'

// let

// 初期値なしの場合
let letUndefined;
console.log(letUndefined);

// 後から値を代入できる
let letAfterDefined;
letAfterDefined = 10;
console.log(letAfterDefined);

// constは再代入できる
const re_substitution = { key: "hoge" };
re_substitution.key = "fuga";
console.log(re_substitution); // output: "fuga"

/*------------------------------
  データ型とリテラル
------------------------------*/

console.log(typeof true); // boolean
console.log(typeof 42); // number
console.log(typeof "string"); // string
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof ["配列"]); // object
console.log(typeof { key: "value" }); // object
console.log(typeof function () {}); // function

// リテラル表現を持つ4つのプリミティブ型
console.log(true);
console.log(false);

console.log(10);
console.log(0b110);
console.log(0o77);
console.log(0x2fc);

console.log(0.123);
console.log(1.23e2);

console.log(1_234_567_890);

console.log("文字列");
console.log("string");
console.log("改行を\nここでする");
console.log(`ここで
改行
してます`);
const test_back_quote = "test";
console.log(`変数の値は${test_back_quote}です`);

let nullTest = null;
console.log(nullTest);

// 中身が空のオブジェクトを作成
const obj = {};

// ドット記法とブラケット記法の値参照
const obj2 = { key: "value" };
console.log(obj2.key);
console.log(obj2["key"]);

// 数字の文字列なのでブラケット記法でのみ参照できる
const obj3 = { "12": "hoge" };
console.log(obj3["12"]);

// 配列リテラル
const array = [1, 2, 3];
console.log(array[2]); // output : 3

// 正規表現リテラル
const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
console.log(numberRegExp.test("123")); // output: true

// リテラルを使ったプリミティブ型でもプロパティを参照できる
const testPrimitive = "string length sample";
console.log(testPrimitive.length);
