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

/*------------------------------
  演算子
------------------------------*/

// 二項演算子
console.log(1 + 2); // プラス演算子
console.log("文字列" + "結合"); // 文字列連結演算子
console.log(20 - 5); // マイナス演算子
console.log(3 * 4); // 乗算演算子
console.log(30 / 6); // 除算演算子
console.log(20 % 3); // 剰余算演算子
console.log(3 ** 2); // べき乗演算子

// 単項演算子
// プラス演算子
console.log(+1); // 元々数値のため変わらず1となる
console.log(+"123"); // 文字列の数字を数値へ変換する
console.log(+"文字"); // 文字列が数字でないとNaNと言う特殊な型になる

// マイナス演算子
console.log(-2); // 負の数を表現
console.log(-(-3)); // 符号を反転
console.log(-"321"); // 数値の変換も可能
console.log(-"文字"); // NaNになる

// インクリメント演算子
let inc_test = 1;
console.log(inc_test++); // inc_testの評価結果(1)を返す
console.log(inc_test); // inc_testに対して+1を返す

let inc_test2 = 1;
console.log(++inc_test2); // inc_test2に対して+1した後にinc_test2の評価結果を返す

// デクリメント演算子
let dec_test = 1;
console.log(dec_test--); // dec_testの評価結果(1)を返す
console.log(dec_test); // dec_testに対して-1を返す

let dec_test2 = 1;
console.log(--dec_test2); //inc_test2に対して-1した後にdec_test2の評価結果を返す

// 比較演算子
console.log(1 === 1); // 厳密等価演算子
console.log(1 === "1");
const obj_1 = {};
const obj_2 = {};
console.log(obj_1 === obj_2); // 参照がことなるのでfalse
console.log(obj_1 === obj_1); // 参照が同じなのでtrue

console.log(1 !== "1"); // 厳密不等価演算子
console.log(1 !== 1);

console.log(1 == "1"); // 等価演算子
console.log(1 == true);
console.log(0 == false);
console.log(null == 0); // nullとの比較はfalseを返す

console.log(1 != 2); // 不等価演算子
console.log(0 != false);
console.log(1 != "1");

console.log(10 > 3);
console.log(1 > 2);
console.log(5 >= 5);
console.log(5 >= 6);
console.log(3 < 4);
console.log(4 < 3);
console.log(3 <= 3);
console.log(4 <= 3);

console.log(15 & 9);
console.log(0b111 & 0b101);
console.log(15 | 9);
console.log(0b11000 | 0b00011);
console.log(15 ^ 9);
console.log(0b10011 ^ 0b10101);
console.log(~10);
console.log(~0b11001);
console.log(9 << 2);
console.log(-9 >> 2);
console.log(-9 >>> 2);

// 代入演算子
const xx = 10;
console.log(xx);
let xx1 = 2;
xx1 += 4;
console.log(xx1);

// 分割代入
const arr1 = ["A", "B", "C"];
const [a1, b1, c1] = arr1;
console.log(a1);

const obj4 = { name4: "musashi", age4: 21, gender4: "male" };
const { name4, age4, gender4 } = obj4;
console.log(name4);

// 論理演算子
console.log(true && "右辺の値"); // output: "右辺の値"
console.log(false && "右辺の値"); // output: false
console.log("" && "右辺の値"); // output: ""

console.log(true || "右辺の値"); // output: true
console.log(false || "右辺の値"); // output: "右辺の値"
console.log("" || "右辺の値"); // output: "右辺の値"

console.log(!true);
console.log(!false);
console.log(!41);
console.log(!0);

// Nullish coalescing 演算子
console.log("yes" ?? "no");
console.log(null ?? "not null");
console.log(undefined ?? "not undefined");

// 三項演算子
console.log(true ? "true" : "false");

// グループ化演算子
console.log((1 + 3) * 5);

// カンマ演算子
const a = 1,
  b = 2,
  c = a + b;
console.log(a); // output: 1
console.log(b); // output: 2
console.log(c); // output: 3
