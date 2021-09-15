const double = "double";
console.log(double);
const single = 'single';
console.log(single);
const back =`back
quote`;
console.log(back);

// escape
const esc = 'ab\'cd\'ef';
console.log(esc);

// 文字列の結合
const str = 'str' + 'ing';
console.log(str);

// 変数と文字列を結合
console.log('Hello ' + str + '!');

// template リテラルで変数を展開
console.log(`This is ${str}!`);

// 文字へのアクセス
console.log(str[0]);
console.log(str[200]); // undefined

// String#charCodeAt 文字列の指定インデックスのcode unitを整数として返す
const str1 = 'アオイ';
console.log(str1.charCodeAt(1).toString(16)); // toString(16)で16進数にしている

// String#fromCharCode code unitを文字に変換する
const str2 = String.fromCharCode(
  0x30a2,
  0x30aa,
  0x30a4
);
console.log(str2);

// String#split
const str3 = '赤・青・緑'.split("・").join("、");
console.log(str3);

// 正規表現とも組み合わせられる
const str4 = "a   b    c  d";
const strings = str4.split(/\s+/);
console.log(strings);

// 文字列の長さ
console.log('hoge'.length);
console.log(''.length);

// 文字列の比較
console.log('abc' === 'abc');
console.log('a' > 'b'); 
console.log('a' < 'b'); 

// 文字列の一部を取得
// String#slice
const str5 = "abcdefg";
console.log(str5.slice(2));
console.log(str5.slice(1,4));
console.log(str5.slice(-1));
console.log(str5.slice(4,1)); // 空文字を返す

// String#substring
console.log(str5.substring(2));
console.log(str5.substring(1,4));
console.log(str5.substring(-1)); // 負の数は0扱い
console.log(str5.substring(4,1)); // 第一引数が第二引数より大きい場合入れ替わる

// String#indexOf / String#lastIndexOf
const str6 = 'にわにはにわにわとりがいる';
console.log(str6.indexOf('にわ'));
console.log(str6.lastIndexOf('にわ'));
console.log(str6.indexOf('hoge'));

// 真偽値の取得
console.log(str6.startsWith('にわ'));
console.log(str6.startsWith('いる'));
console.log(str6.endsWith('にわ'));
console.log(str6.endsWith('いる'));
console.log(str6.includes('にわ'));
console.log(str6.includes('いる'));

// 正規表現
// String#search
const str7 = "abc123efg";
const searchPattern = /\d{3}/;
console.log(str7.search(searchPattern));

// String#match
const str8 = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/;
const results = str8.match(alphabetsPattern);
console.log(results.length);
console.log(results[0]);
console.log(results.index);
console.log(results.input);

const alphabetsPattern2 = /[a-zA-Z]+/g;
const results2 = str8.match(alphabetsPattern2);
console.log(results2.length);
console.log(results2[0]);
console.log(results2[1]);
console.log(results2.index);
console.log(results2.input);

// String#matchとキャプチャリングの例
const pattern = /ECMAScript (\d+)/;
const [all, capture1] = "ECMAScript 6".match(pattern);
console.log(all);
console.log(capture1);

// 文字列の置換・削除
const str9 = 'mojiretsu';
const st1 = str9.replace("moji", '');
console.log(st1);

/* 文字列とunicode */

console.log("あ".codePointAt(0));
console.log(String.fromCodePoint(12354));
console.log(String.fromCodePoint(0x3042));

console.log("あ".codePointAt(0).toString(16));

console.log("\u{3042}");

// 上位サロゲート + 下位サロゲートの組み合わせ
console.log("\uD867\uDE3D");
// Code Pointでの表現
console.log("\u{29e3d}");