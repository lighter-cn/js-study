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
