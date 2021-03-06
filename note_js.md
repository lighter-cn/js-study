# 基本文法

## JavaScript とは

### 大文字と小文字を区別する

### 予約語を持つ

予約語 :
開発者がつける識別名として利用できない文字列

### 文はセミコロンで区切る

### strict mode

"use strict"とファイルまたは関数の先頭に書くことで、利用できる
古く安全でない構文や機能が一部禁止されている
Module の実行コンテキストでは strict mode がデフォルト

### 実行コンテキスト : Script と Module

JavaSrcipt の実行コンテキストとして Script と module がある
Script の実行コンテキストでは strict mode はデフォルトではない

## コメント

一行コメント // ...
複数行コメント /＊ ... ＊/

## 変数と宣言

### const

再代入できない変数の宣言とその変数が参照する値を定義できる

const 変数名 = 初期値;

また、const は再代入できない変数を宣言するため、あとから代入することができない

### let

値の再代入可能な変数の宣言

const と異なり初期値を指定せずに定義できる

初期値を指定されない場合、デフォルト値として undefined で初期化される

### var

値の再代入可能な変数を宣言できる

### var の問題点

1. let や const と異なり、同じ名前の変数を再定義できてしまう
2. 変数の巻き上げが発生する

### 変数名に使える名前

1. 半角英数、\_、\$の組み合わせ
2. 数字を変数名の先頭に利用できない
3. 予約語とかぶる名前は利用できない

### const は定数ではない

const はプリミティブな値で初期化した場合、実質的に定数となるが、
プリミティブな値以外は初期化した後も変更できる

## 値の評価と表示

値の評価 :
入力した値を評価してその結果を返すこと
ex) - 1 + 1 の式を評価すると、2 と言う結果を返す - bookTitle という変数を評価すると、変数に代入された値を返す - const x = 1;と言う文を評価することで変数を定義するが、この文に返り値はない

## データ型とリテラル

データ型 :
JavaScript は動的型付け言語であるため、変数の型はないが、
文字列、数値、真偽値といった値の型が存在し、それらの値の型をデータ型と呼ぶ
データ型はプリミティブ型とオブジェクトの二つに大きく分けられる

プリミティブ型 :
真偽値や数値などの基本的な値の型
一度作成したらその値自体を変更できない immutable(不変)の特性を持つ

オブジェクト(複合型) :
複数のプリミティブ型の値、またはオブジェクトからなる集合
一度作成した後もその値自体を変更できる mutable の特性を持つ
また、値そのものではなく、値への山椒を経由して操作されるため参照型のデータとも言える

- プリミティブ型
  - 真偽値(Boolean)
  - 数値(Number)
  - 巨大な整数(Bigint)
  - 文字列(String)
  - undefined
  - null
  - Synbol
- オブジェクト
  - プリミティブ型以外のデータ
  - オブジェクト、配列、関数、正規表現、Date など

typeof 演算子を使うことで、データ型を調べることができる
typeof 演算子ではプリミティブ型またはオブジェクトかを判別するものであって
オブジェクトの詳細は何定できない
null の type が object となるのは歴史的経緯のある仕様バグ

### リテラル

リテラル :
プログラム上で数値や文字列など、データ型の値を直接記述できる構文として定義されたもの

### 真偽値

true / false のリテラルがあり、それぞれ true と false の値を返す

### 数値

- 整数リテラル
  - 10 進数 : 数字の組み合わせ
  - 2 進数 : 0b の後ろに 0/1 の組み合わせ
  - 8 進数 : 0o の後ろに 0-7 の数字の組み合わせ、または 0 から始まる数値
  - 16 進数 : 0x の後ろに 0-9 と a-f までのアルファベットの組み合わせ
- 浮動小数点リテラル
  - 3.14 のような.を含んだ数値(0 から始まる少数は 0 を省略できる)
  - 2e8 のような指数表現
- Bigint リテラル
  - 数値の後ろに n をつける (ex)
  - Bigint は整数を扱うので、小数点を含めると構文エラーになる

Numeric Separators(ES2021) :
数値リテラルの区切り文字として\_を利用できる
リテラルの先頭や数値の最後に追加することはできない

### 文字列

ダブルクォートとシングルクォート :
js では全く同じ意味
"や'を使いたい時は\でエスケープできる

テンプレートリテラル :
バッククォートで囲んだ範囲を文字列とするリテラル
複数行の文字列をエスケープシーケンスなしに書くことができる
テンプレートリテラル内で\${変数名}と書いて変数の値を埋め込むこともできる

### null リテラル

null 値を返すリテラル
null は値がないことを表現したい時に null 値を代入することで変数を定義し、参照できるようになる

### undefined はリテラルではない

undefined はグローバル変数で、undefined と言う値を持っているだけ
そのためローカル変数に undefined を宣言することもできる(する意味はないが)

これに対し true/false/null などはリテラルであるため同じ名前の変数を定義できない

### オブジェクトリテラル

{}を書くことで新しいオブジェクトを作成する
オブジェクトは作成と同時に中身を定義できる
オブジェクトのキーと値を:で区切ったものを{}の中に書くことで作成と同時に初期化される
key には文字列または Synbol を指定し、値にはプリミティブ型の値からオブジェクトまでなんでも入れられる

プロパティ名 :
オブジェクトが持つキーの名前

オブジェクトが持つキーを参照するには.で繋いで参照する方法とブラケットで参照する方法がある
ドット記法ではプロパティ名が変数と同じく識別子である必要があるため、
識別子として利用できないプロパティ名(数字の文字列など)を参照する場合はブラケット記法を利用する

### 配列リテラル

[]で値をカンマ区切りで囲みその値を持つ Array オブジェクトを作成する
js における配列とは複数の値に順序をつけて格納できるオブジェクトの一種
配列は 0 から始まる index に、対応した値を保持している
配列の要素を取得するには、配列に対して array[index]という構文で指定した index の値を参照できる

### 正規表現リテラル

js は正規表現パターンを/ではさみ、正規表現リテラルとして書くことができる

### プリミティブ型とオブジェクト

ラッパーオブジェクト:
プリミティブ型の値をラップしたようなオブジェクト
new 演算子と対応するコンストラクタ関数を使用してプリミティブ型のラッパーオブジェクトを作成できる

プリミティブ型のデータでも暗黙的な型変換が行われ、プロパティやメソッドを参照できるようになる

## 演算子

よく利用する演算処理を記号などであわしたもの

被演算子(オペランド) :
演算子の対象のこと

二項演算子 :
オペランドを二つとる演算子

単項演算子 :
オペランドを 1 つだけとる演算子

### 二項演算子

プラス演算子(+) : 二つの数値を加算する演算子
文字列連結演算子(+) : 二つの文字列を結合した文字列を返す
マイナス演算子(-) : 二つの数値を減産する演算子。左オペランドから右オペランドを減算した値を返す
乗算演算子(\*) : 二つの数値を乗算する演算子
除算演算子(/) : 二つの数値を除算する演算子。左オペランドを右オペランドで除算した値を返す
剰余算演算子(%) : 二つの数値の余りを求める演算子。左オペランドを右オペランドで除算した余りを返す
べき乗演算子(\*\*)[ES2016] : 二つの数値のべき乗を求める演算子。左オペランドを右オペランドでべき乗した値を返す

### 単項演算子(算術)

単項プラス演算子(+) : オペランドを数値に変換する。
単項マイナス演算子(-) : -の数値を記述する場合、もしくは数値の符号を反転する際に使用。
インクリメント演算子(++) : オペランドの数値を+1 する演算子。オペランドの前におくか後ろに奥かで評価の順番が変わる
デクリメント演算子(--) : オペランドの数値を-1 する演算子。オペランドの前後どちらかに置くことで評価順が変わる

### 比較演算子

オペランド同士の値を比較し、真偽値を返す演算子

厳密等価演算子(===) :
左右のオペランドを比較し、同じ型で同じ値の場合、true を返す
オペランドがどちらもオブジェクトである場合は、参照が同じ場合に true を返す

厳密不等価演算子(!==) :
左右のオペランドを比較し、異なる型または異なる値である場合 true を返す

等価演算子(==) :
二つのオペランドを暗黙的な型変換をしてから比較し、等しいなら true を返す
null と undefined の比較では例外的に利用することがあるが、基本的には使うべきではない

不等価演算子(!=) :
二つのオペランドを暗黙的な型変換をしてから比較し、等しくないなら true を返す
こちらも積極的な使用は控え、厳密不等価演算子を利用することが推奨

大なり演算子(>) :
左オペランドが右オペランドより大きい場合に true を返す

大なりイコール演算子(>=) :
左オペランドが右オペランドより大きいまたは等しい場合、true を返す

小なり演算子(<) :
左オペランドが右オペランドより小さい場合に true を返す

小なりイコール演算子(<=) :
左オペランドが右より小さいか等しいなら true を返す

### ビット演算子

オペランドである数字を符号つき 32 ビット整数として扱う
先頭の最上位ビットは符号を表し、0 の場合は正の値、1 の場合負の値を示す

ビット論理積(&) :
bit ごとの AND 演算をした結果を返す

ビット論理和(|) :
ビットごとの or 演算した結果を返す

ビット排他的論理和(^) :
ビットごとの xor 演算した結果を返す

ビット否定(~) :
オペランドの書くビットを単転した値を返す
-1 を返すメソッドのイディオムとして使われることもある

左シフト演算子(<<) :
数値である num を bit の数だけ左へシフトする。左に溢れた bit は破棄され、0 のビットを右から詰める

右シフト演算子(>>) :
数値である num を bit の数だけ右へシフトする。右に溢れたビットは破棄され、左端のビットのコピーを左から詰める

ゼロ埋め右シフト演算子(>>>) :
num を bit の数だけ右シフトし、右に溢れたビット  を破棄し、0 のビットを左から詰める

### 代入演算子

変数に対して代入をする演算子
また、二項演算子と組み合わせて利用し、演算結果を代入できる
(ex)+=,-=,\*=,%=,<<=,>>=,&=,^=,|=,\*\*=

### 分割代入[ES2015]

配列やオブジェクトの値を複数の変数に同時に代入できる構文

### 論理演算子

真偽値を扱う演算子

AND 演算子(&&) :
左辺の評価結果が true ならば右辺の評価結果を返す
左辺の評価結果が false ならばそのまま左辺の値を返す
左辺が false の場合は右辺が評価されないことに注意
また、AND 演算子は左辺を評価する際に真偽値に暗黙的な型変換を行う

短絡評価 :
値が決まった時点でそれ以上評価しないこと

falsy な値 :
以下の 7 つが該当

- false
- undefined
- null
- 0
- 0n
- NaN
- ""

OR 演算子(||) :
左辺の評価が true の場合、そのまま左辺の値を返し、false であれば右辺の評価結果を返す
AND 同様に短絡評価であり、左辺の評価時は真偽値へと暗黙的な型変換を行う

NOT 演算子(!) :
オペランドの評価結果を反転した真偽値を返す
また、真偽値へと暗黙的な型変換を行う

### Nullish coalescing 演算子[ES2020]

左辺が nullish であるなら右辺の評価結果を返す
nullish とは評価結果が null か undefined となる値

### 三項演算子

条件式を評価した結果が true なら true の時に処理する式の評価結果を返し、
条件式が false の時には false の時に処理する式の評価結果を返す
条件式 ? true の時に処理する式 : false の時に処理する式;

### グループ化演算子

演算子の優先順位を明示できる演算子

### カンマ演算子(,)

,で区切った式を左から順に評価し、最後の式の評価結果を返す

## 暗黙的な型変換

ある処理において、その処理過程で行われる明示的ではない型変換のこと
演算子による演算や関数の処理の過程で行われる

### 明示的な型変換

任意の値 -> 真偽値 :

- Boolean コンストラクタ関数を使う
- falsy な値は false になり、それ以外は true になる

数値 -> 文字列 :

- String コンストラクタ関数を使う
- String コンストラクタは数値以外にも文字列を変更できる
- プリミティブ型に対しては見た目通りの文字列を得られるが、オブジェクトに対してはあまり意味のある文字列を返さない

シンボル -> 文字列 :

- Symbol は暗黙的に型変換できないため、文字列結合をするとエラーになる
- その場合も String コンストラクタ関数を使うことで明示的に変換できる

文字列 -> 数値 :

- Number コンストラクタ関数を利用できる
- また Number.parseInt / Number.parseFloat も利用できる
- 変換できない文字列は NaN になる

### NaN は Number 型

- NaN は何と演算子ても結果は NaN になる
- NaN は Number 型の一種
- 判定には Number.isNaN メソッドを使う

### 明示的な変換でも解決しないこと

Number 型と互換性がない値を数値にすると NaN となる
一度 NaN となると Number.isNaN で判定して処理を終えるしかない

空文字列かどうかを判定する場合も""は falsy な値になるため、
文字列長が 0 の値と定義することで判定する

## 関数と宣言

関数 :
ある一連の手続き(文の集まり)を一つの処理としてまとめる機能

### 関数宣言

function 関数名(仮引数, ...) {
処理
return 戻り値
}

const 関数の結果 = 関数名(引数, ...);

関数の構成要素 :

- 関数名 : 数名に使える名前のルールと同じ
- 仮引数 : 関数の呼び出しの時に渡された値が入る変数。複数ある場合は,で区切る
- 関数の中身 : {}で囲んだ処理を書く場所
- 関数の返り値 : 関数を呼び出したときに呼び出し元へ返す値

関数の呼び出しは関数名()で呼び出すことができる

関数で return 文が実行されると関数内のそれ以降の処理は行われない。
また、関数が値を返す必要がない場合は、return 文で返り値を省略することができ、その場合 undefined が帰る

### 関数の引数

javascript では関数に定義した仮引数の個数と実際に呼び出した時の引数の個数が違っても関数を呼び出せる

### 呼び出し時の引数が少ない時

定義した関数よりも呼び出し時の引数が少ない場合、余った仮引数には undefined という値が代入される

### デフォルト引数[ES2015]

仮引数に対応する引数が渡されていない場合にデフォルトで代入される値を指定できる
function 関数名(仮引数 1 = デフォルト値 1, 仮引数 2 = デフォルト値 2) {
}

### 呼び出しの引数が多い時

関数の仮引数に対して実引数の個数が多い場合、溢れた引数は単純に無視される

### 可変長引数

関数において引数の数が固定ではなく、任意の個数の引数を受け取れることを可変長引数と呼ぶ
可変超引数を実現するには Rest parameters か関数の中でのみ参照できる arguments という特殊な変数を利用する

Rest parameters[ES2015] :
仮引数名の前に...をつけた仮引数のことで、残余引数とも呼ばれる
Rest parameters には関数に渡された値が配列として代入される

また、通常の仮引数と組み合わせて定義もできるが、組み合わせる際は Rest parameters を末尾の仮引数として定義する必要がある

Spread 構文 :
実引数となる配列の前に...をつけた構文のことで、関数に配列の値を展開したものを渡すことができる

arguments :
関数の中でのみ参照できる特殊な変数で、関数に渡された引数の値が全て入った　 Array-like なオブジェクト
Array-like なオブジェクトは配列のようにインデックスで要素へアクセスできるが、Array ではないため Array のメソッドは利用できない特殊なオブジェクト
下記の理由により Rest parameters が使える環境であれば arguments を使わない方が良い

- Arrow Function では利用できない
- Array-like なオブジェクトなので、Array のメソッドを利用できない
- 関数が可変超引数を受け付けるのかをコードで判断しづらい

### 関数の引数と分割代入[ES2015]

関数の引数においても分割代入が利用できる

### 関数はオブジェクト

関数は関数オブジェクトとも呼ばれ、オブジェクトの一種
ただのオブジェクトとは異なり関数名()で関数としてまとめた処理を呼び出せる
一方で()をつけずに呼び出せば関数をオブジェクトとして参照することができる
また、関数は他の値と同じように変数に代入したり関数の引数として渡すこともできる

このように関数が値として扱えることをファーストクラスファンクション(第一級関数)と呼ぶ

関数を値として定義する方法を関数式と呼び、function キーワードを使う方法と Arrow Function を使った方法がある

関数式 :
関数を値として変数へ代入している式
関数宣言は文だが、関数式は関数を値として扱う

const 関数名 = function() {
// 関数を呼び出したときの処理
// ...
return 関数の返り値;
};

関数式では名前を持たない関数を変数に代入でき、名前の持たない関数を匿名関数または無名関数と呼ぶ
関数式で関数名を省略しないこともできるが、関数の外からはその名前を呼ぶことができないので、再帰的な処理を行う際などに利用する

### Arrow Function[ES2015]

関数式のもう一つの方法

const 関数名 = () => {
// 関数を呼び出したときの処理
// ...
return 関数の返す値;
};

- 仮引数が一つの時は()を省略できる
- 処理が一つの式である場合はブロックと return 文を省略できる(その式の評価結果を return の返り値とする)

また、Arrow Function には次のような特徴がある

- 常に匿名関数(名前をつけることができない)
- this が静的に決定できる
- function キーワードに比べて短く書くことができる
- new できない(コンストラクタ関数ではない)
- arguments 変数を参照できない

### 同じ名前の関数宣言は上書きされる

関数宣言で定義した関数は、関数の名前でのみ区別されるため、同じ名前の関数を複数宣言した場合、
後ろで宣言された関数によって上書きされる
仮引数の定義が異なっていても関数の名前が同じなら上書きされる

### コールバック関数

引数として渡される関数のことをコールバック関数と呼ぶ
一方、コールバック関数を引数として使う関数やメソッドを高階関数と呼ぶ

function 高階関数(コールバック関数){
コールバック関数();
}

### メソッド

オブジェクトのプロパティである関数をメソッド呼ぶ
js において関数とメソッドに機能的な違いはない

const obj = {
method1: function() {
// `function`キーワードでのメソッド
},
method2: () => {
// Arrow Function でのメソッド
}
};

短縮記法として以下のようにも記述できる(ES2015)
const obj = {
methodName() {
return "this is method";
}
};

## 文と式

### 式(expression)

値を生成し、変数に代入できるもの
42 のようなリテラルや、変数、関数呼び出しが式に当たる
また、1 + 1 のような指揮と演算子の組み合わせも式と呼ぶ

式の特徴として、式を評価すると結果の値を得ることができ、その結果の値を評価値と呼ぶ
つまり、評価した結果を変数に代入できるものは式と言える

### 文(statement)

処理する 1step が一つの文と言える
js では文の末尾にセミコロンを置くことで文と文に区切りをつける

文は式ではないため、変数に代入することはできず、構文エラーになる

### 式文(expression statememnt)

式は文になることができ、文になった式のことを式文と呼ぶ
式文は文の一種であるためセミコロンで文を区切る

### ブロック文

文を{}で囲んだ部分をブロックという
ブロックには複数の文が書ける

ブロックで終わる文の末尾にはセミコロンは不要

### 関数宣言と関数式

関数宣言のブロックの最後にはセミコロンは不要だが、関数式の場合は式のため末尾にセミコロンが必要となる

## 条件分岐

### if 文

条件式の評価が true ならば、実行する文が実行される
[構文]
if (条件式) {
実行する文;
}

実行する文が一行の時はブロックを省略できる
ただし、終わりがわかりにくくなるため常にブロックでかっこむことが推奨される

条件式が真偽値以外の場合、その値を暗黙的に真偽値に型変換してから条件式として判定する

### else if 文

複数の条件分岐を書く場合に使用する
[構文]
if (条件式) {
実行する文;
} else if (条件式 2) {
実行する文;
} else if (条件式 3) {
実行する文;
}

### else 文

if や if else の条件に一致しなかった場合の処理を記述できる
[構文]
if (条件式) {
実行する文;
} else if (条件式 2) {
実行する文;
} else {
実行する文;
}

### ネストした if 文

if / else if / else 文はネストして書くことができる
複数の条件を満たすかどうかを表現する時に用いられる

ネストは浅い方が一般的に読みやすいので、深くなりすぎないように注意

### switch 文

式の評価結果が指定した値である場合に行う処理を並べて書くことができる
[構文]
switch (式) {
case ラベル 1:
// `式`の評価結果が`ラベル1`と一致する場合に実行する文
break;
case ラベル 2:
// `式`の評価結果が`ラベル2`と一致する場合に実行する文
break;
default:
// どの case にも該当しない場合の処理
break;
}
// break; 後はここから実行される

switch では式の評価結果が===で一致するラベルを探索し、
一致するものがあれば、その case 説を実行する。
一致するラベルがない場合は default 説が実行される

switch 文の case 節では基本的に break;を使って switch 文を抜けるようにする
省略は可能だが、省略した場合は後ろに続く case 節が無条件に実行される

## ループと反復処理

### while 文

while 文は条件式が true であるならば反復処理を行う
[構文]
while (条件式) {
実行する文;
}

while 文の実行フローは次のようになる

1. 条件式の評価結果が true なら次のステップへ、false なら終了
2. 実行する文を実行
3. ステップ 1 へ戻る

なお、最初から条件式が false である場合は何も実行せずに while 文は終了する

### do-while

do-while 文は while 文とほぼ同じだが、実行順序が異なる

[構文]
do {
実行する文;
} while (条件式);

1. 実行する文を実行
2. 条件式の評価結果が true なら次のステップへ、false なら終了
3. step1 へ戻る

while 文と異なり、必ず最初に実行する文を処理する

### for 文

繰り返す範囲を指定した反復処理を書くことのできる構文
[構文]
for (初期化式; 条件式; 増分式) {
実行する文;
}

実行フロー :

1. 初期化式で変数の宣言
2. 条件式の評価結果が true なら次のステップへ、false なら終了
3. 実行する文を実行
4. 増分式で変数を更新
5. ステップ 2 へ戻る

### forEach メソッド

配列には forEach メソッドという for 文と同じように反復処理を行うメソッドがある
forEach は for 文の条件式に相当するものはなく、必ず全ての要素を反復処理する

### break 文

break 文は処理中の文から抜けて次の文へ移行する制御文
switch 文で使用した際と同様に処理中のループ文を終了できる

### continue 文

現在の反復処理を終了して次の反復処理を行う際に使う
continue 文が実行されると、現在の反復処理はその時点で終了され、
次の反復処理で条件式を評価するところからループを再開する

### for...in 文

オブジェクトのプロパティに対して反復処理を行う
[構文]
for (プロパティ in オブジェクト) {
実行する文;
}

ただし、対象のオブジェクトの親オブジェクトまで列挙可能なものがあるか探索するので意図しない結果を招く可能性がある
そのため、Object.keys メソッド、Object.values メソッド、Object.entries メソッドなどを利用した方が安全
また、配列にも利用できるが、こちらもプロパティ名が要素のインデックスを文字列かしたものがプロパティ名となり、意図しない結果を生むことがある

### for...of 文[ES2015]

iterable なオブジェクトに対し反復処理ができる構文
iterable :
Symbol.iterator というメソッドを実装したオブジェクト

[構文]
for (variable of iterable) {
実行する文;
}

## オブジェクト

オブジェクトはプロパティの集合
プロパティはキーと値が対になったもの
プロパティのキーには文字列またはSymbolが利用でき、値には任意のデータを指定できる

配列やかんすうなどもオブジェクトの一種で、jsではあらゆるオブジェクトのもととなるObjectというビルトインオブジェクトがある
ビルトインオブジェクトは実行環境に組み込まれたオブジェクトのこと

### オブジェクトの作成

オブジェクトを作成するにはオブジェクトリテラル{}を利用する

[構文]
const obj = {};

オブジェクトリテラルでは初期値としてプロパティを持つオブジェクトを作成できる

プロパティを持つオブジェクトを定義する
const obj = {
    // キー: 値
    "key": "value"
};

プロパティ名（キー）はクォートを省略することが可能
const obj = {
    // キー: 値
    key: "value"
};

ただし、変数の識別子として利用できないプロパティ名は"や'で囲む必要がある

また、オブジェクトリテラルでは複数のプロパティを持つオブジェクトを作成することができる

プロパティの値に変数名を指定するとそのキーは指定した変数を参照する

また、ES2015からはプロパティ名と値に指定する変数名が同じ場合は、{ name } のように省略して書くことができる

### {}はObjectのインスタンスオブジェクト

Objectはjsのビルトインオブジェクトで、オブジェクトリテラル{}はこのObjectをもとにして新しいオブジェクトを作るための構文

オブジェクトしれラル以外からの方法としてnew演算子を使って作成する方法もある

### プロパティへのアクセス

オブジェクトのプロパティにアクセスする方法はドット記法とブラケット記法がある

ドット記法ではプロパティ名が変数名と同じく識別子の命名規則を満たす必要がある
一方ブラケット記法では[]の間に任意の式をかける
ただし、プロパティ名は文字列へと暗黙的に変換されるので注意

また、ブラケット記法ではプロパティ名に変数を利用できる

基本的にはドット記法を使い、ドット記法でかけない場合にブラケット記法を使うと良い

### プロパティの追加

オブジェクトはミュータブルの特性を持つため、作成後にあとからプロパティを追加できる

オブジェクトリテラル内でブラケット記法をつかったプロパティ名はComputed property namesと呼ばれる

### プロパティの削除

delete演算子によってプロパティを削除できる

### constで定義したオブジェクトは変更可能

constで宣言したオブジェクトはプロパティが変更できる
constは値を固定するのではなく再代入ができない
プロパティの変更を防ぐにはObject.freezeメソッドを使う
ただし、strict modeでないとプロパティを変更しても例外が発生せずに無視される

### プロパティの存在確認

存在しないプロパティにアクセスした場合、例外ではなくundefinedが返される
さらにプロパティ名をネストしてアクセスした場合初めて例外が発生する
undefinedやnullはオブジェクトではないため存在しないプロパティへアクセスして例外となる

あるオブジェクトがあるプロパティを持っているかどうかは以下の3つの方法がある

- undefinedとの比較
- in演算子
- hasOwnPropertyメソッド

undefinedと比較する場合、プロパティの値がundefined出会った場合に区別できない

in 演算子は指定したオブジェクト上に指定したプロパティがあるか判断できる
[構文]
"プロパティ名" in オブジェクト; // true or false

hasOwnPropertyメソッドもプロパティの値に関係なくプロパティが存在しているかでtrue / falseをかえす

ただしin演算子とhasOwnPropertyは厳密には動作が異なるケースも有る

### オブジェクトの静的メソッド

静的メソッド(static method) :
インスタンスのもととなるオブジェクトから呼び出せるメソッド

shallow copy : 
もとのオブジェクトの直下にあるプロパティだけをコピーすること
参照
deep copy :
プロパティの値まで再帰的に複製してコピーすること
複製

## プロトタイプオブジェクト

ビルトインメソッド :
オブジェクトに自動的に組み込まれたメソッド

Objectには他のArray、String、Functionなどのオブジェクトと異なる特徴がある
それはほかのオブジェクトはすべてObjectを継承しているという点
正確には、ほぼ全てのオブジェクトはObject.prototypeプロパティに定義されたprototypeオブジェクトを継承している

prototypeオブジェクトとは、全てのオブジェクトの作成時に自動的に追加される特殊なオブジェクト
Objectのprototypeオブジェクトはすべてのオブジェクトから利用できるメソッドなどを提供するベースオブジェクトとも言える

プロトタイプチェーン :
インスタンスからprototypeオブジェクト上に定義されたメソッドを参照できる仕組み

### プロトタイプメソッドとインスタンスメソッドの優先順位

プロトタイプメソッドと同じ名前のメソッドがインスタンスオブジェクトに定義されている場合は、
インスタンスに定義されたメソッドが優先的に呼び出される

### in 演算子と Object#hasOwnProperty メソッドの違い

hasOwnPropertyはそのオブジェクト自身が指定したプロパティを持っているかを判定する

in演算子はそのプロパティをもっていなければprototypeオブジェクトまで探索して持っているか判定する

### Object.prototypeを継承しないオブジェクト

Object.create(null)とすると本当に空のオブジェクトを作れる
Mapなどの代用として使われたがES2015からMapが利用できるようになったためあまりつかわれない

## 配列

要素 : 配列に格納したそれぞれの値
index : それぞれの要素の位置。先頭の要素から0から始まる連番となる

### 配列の作成とアクセス

配列の作成は配列リテラルを使い、配列リテラル（[]）の中に要素をカンマ（,）区切りで記述する
作成した配列の要素へindexとなる数値を、配列[index]と記述することで、 そのインデックスの要素を配列から読み取れる
存在しないindexにアクセスした場合はundefinedとなる

疎な配列 : 配列の中に隙間がある配列

### オブジェクトが配列かどうかを判定する

Array.isArrayメソッドを使うことで配列かどうかをtrue/falseで返す
typeof演算子ではArrayはobjectとなるため判断できない

### TypedArray[ES2015]

TypedArrayはArrayとは異なる固定長かつ型付の配列を扱う別のオブジェクト
バイナリデータのバッファを示すために使われるデータで、Arrayとは別物

### 配列と分割代入[ES2015]

[構文]
const arr = ["A", "B", "C"];
const [a, b, c] = arr;

### undefinedの要素と未定義の要素の違い

Object#hasOwnPropertyメソッドを使うと、値がundefinedで存在しているか、存在していないかを区別できる

### 配列から要素を検索

インデックスを取得 ... Array#indexOf / Array#findIndex

indexOfはプリミティブな要素の発見はできるが、参照の異なるオブジェクトは一致にならない
その場合、findIndexを使う

条件に一致する要素を取得 ... Array#find

指定範囲の要素を取得 ... Array#slice

真偽値を取得 ... Array#includes[ES2016] / Array#some
includesはindexOfと同様に参照先の異なるオブジェクトは一致にならないので、
その場合はsomeをつかう

### 追加と削除

jsの配列は可変長であるため、作成後の配列に対して要素を追加、削除できる

末尾へ追加 ... Array#push
末尾を削除 ... Array#pop
先頭へ追加 ... Array#unshift
先頭を削除 ... Array#shift

### 配列同士の結合

Array#concat

### 配列の展開[ES2015]

...(spread構文)を使うことで配列リテラル内に既存の配列を展開できる
spread構文はconcatとことなり配列リテラルの中の任意の位置に配列を展開できる

### 配列のフラット化[ES2019]

Array#flatを使うことで多次元配列をフラットな配列に変換できる

### 配列から要素を削除

Array#splice 

### 配列を空にする

splice以外にもlength = 0とすることで配列を空にすることができる

### 空の配列を代入

### 破壊的なメソッドと非破壊的なメソッド

破壊的なメソッド :
  もとのオブジェクトそのものを変更し、変更したオブジェクトまたは変更箇所を返すメソッド

非破壊的なメソッド :
  元のオブジェクトのコピーを作成してから変更し、そのコピーを返すメソッド

### 反復処理するメソッド

Array#forEach
Array#map
Array#filter
Array#reduce

### Array-likeオブジェクト

Array-likeオブジェクト :
  配列ではないが配列のように扱えるオブジェクト
  インデックスのようにアクセスでき、lengthプロパティも持っている
  しかしArrayメソッドは持っていないオブジェクト
  argumentsなどがその例にあたる

Array-likeオブジェクトはArray.fromメソッド[ES2015]を使うことでArrayに変換することもできる

### メソッドチェーンと高階関数

メソッドチェーン :
  メソッドを呼び出した返り値に対してメソッドを呼び出すパターンのこと


## 文字列

### 文字列の結合

### 文字へのアクセス

文字列の特定の位置にある文字にはインデックスを指定してアクセスできる
存在しないインデックスへのアクセスはundefinedを返す

### 文字列とは

jsでは文字コードとしてunicodeを採用し、エンコードする方式はutf-16

### 文字列の分解と結合

String#split ... 文字を配列へ分解
Array#join ... 配列の要素を結合して文字列にする

### 文字列の長さ

String#lengthプロパティは文字列の長さを返す
空文字列は0を返す

### 文字列の比較

文字列の比較には厳密等価演算子を利用する

また、大小関係の関係演算子で文字を比較することもできる
その場合、cod unitの比較を行う

### 文字列の一部を取得

String#slice
String#substring

### 文字列の検索

文字列による検索
String#indexOf
String#lastIndexOf

真偽値の取得
String#startsWith : 検索文字列が先頭にあるかの真偽値を返す
String#endsWith : 検索文字列が末尾にあるかの真偽値を返す
String#includes : 検索文字列を含むかの真偽値を返す

### 正規表現オブジェクト

正規表現オブジェクトの作成にはリテラルとコンストラクタを使う方法がある

正規表現リテラルで正規表現オブジェクトを作成
const patternA = /パターン/フラグ;

`RegExp`コンストラクタで正規表現オブジェクトを作成
const patternB = new RegExp("パターン文字列", "フラグ");

リテラルとコンストラクタでは評価されるタイミングの違いがある
リテラルではソースコードをロード(パース)したタイミングでパターンが評価される
コンストラクタでは通常の関数と同じようにコンストラクタを呼び出すまで正規表現のパターンは評価されない
なので、基本はリテラルを使い、正規表現のパターンに変数を利用する場合はコンストラクタを利用するとよい

正規表現による検索
String#search   : マッチした文字列のインデックスを返す
Strin#match     : マッチした文字列を取得する
String#matchAll : マッチした文字列をすべて取得する

キャプチャリング : 正規表現中で()で囲んだ部分を取り出すこと

### 文字列の置換/削除

String#replace
String#replaceAll

### tagつきテンプレート関数

タグつきテンプレート関数は、関数`テンプレート` という形式で記述する関数とテンプレートリテラルを合わせた表現

関数が受け取る引数にはタグつきテンプレート向けの値が渡ってくる
このとき、関数の第一引数にはテンプレートの中身が${}で区切られた文字列の配列、第二引数以降は${}の中に書いた式の評価結果が順番に渡される

## 文字列とUnicode

### Code Point

Code Point : 文字に対する一意のID

String#codePointAt
String#fromCodePoint

### Code Unit

### サロゲートペア

ふたつのCode Unitの組み合わせで一つの文字(ひとつのCode Point)を表現する仕組み

サロゲートペアでは、2つのCode Unitの組み合わせ（合計4バイト）で1つの文字（1つのCode Point）を表現する
UTF-16では、次の範囲をサロゲートペアに利用する領域としている

- \uD800～\uDBFF：上位サロゲートの範囲
- \uDC00～\uDFFF：下位サロゲートの範囲

文字列中に上位サロゲートと下位サロゲートのCode Unitが並んだ場合に、2つのCode Unitを組み合わせて1文字（Code Point）として扱う

## ラッパーオブジェクト

### プリミティブ型とラッパーオブジェクト

プリミティブ型のデータのうち、真偽値（Boolean）、数値（Number） 、文字列（String）、シンボル（Symbol）にはそれぞれ対応するオブジェクトが存在する

インスタント化されたものはプリミティブ型の値をラップしたオブジェクトと言え、このようなオブジェクトをプリミティブ型の値に対してのラッパーオブジェクトと呼ぶ

undefinedとnullに対応するラッパーオブジェクトはない

また、ラッパーオブジェクトはtypeof演算子でみるとobjectとなるので注意

### プリミティブ型の値からラッパーオブジェクトへの自動変換

jsではプリミティブ型の値に対してプロパティアクセスするとき、自動で対応するラッパーオブジェクトに変換される
これによりプリミティブな値がインスタンスメソッドを呼び出せるようになる

一方、明示的に作成したラッパーオブジェクトからプリミティブ型の値を取り出すこともできる

特に理由がない場合は、プリミティブ型のデータにはリテラルを使う

## 関数とスコープ

### スコープとは

変数の名前や関数などの参照できる範囲を決めるもの
スコープの中で定義された変数はスコープの内側でのみ参照でき、
スコープの外側からは参照できない

また、関数は仮引数を持てるが、仮引数は関数のスコープに紐づけて定義されるため、関数の外からは参照できない
このような関数によるスコープを関数スコープと呼ぶ

また、letやconstは同じスコープ内に同じ名前の変数を定義できないが、スコープが異なれば同じ名前の変数を定義できる

### ブロックスコープ

{}で囲んだ範囲
ブロックもスコープを作成する
if文やwhile文などもブロックスコープを作成する

for文はループごとに新しいブロックスコープを作成する

### スコープチェーン

スコープはネスとして書くことができる
スコープがネスとしている場合、内側のスコープから外側のスコープにある変数を参照することができる

変数を参照する際、現在のスコープから外側のスコープへと変数が定義されているか確認する

この、内側から外側のスコープへと順番に変数が定義されているか確認するしくみがスコープチェーン

### グローバルスコープ

グローバルスコープとは名前のとおりもっとも外側にあるスコープで、プログラム実行時に暗黙的に作成される
グローバルスコープで定義した変数はグローバル変数と呼ばれ、グローバル変数はあらゆるスコープから参照できる変数となる
なぜなら、スコープチェーンの仕組みにより、最終的にもっとも外側のグローバルスコープに定義されている変数を参照できるため

グローバルスコープには自分で定義したグローバル変数以外に、プログラムの実行時に自動的に定義されるビルトインオブジェクトがある
ビルトインオブジェクトには、大きく分けて2種類のものがある
 1つ目はECMAScript仕様が定義するundefinedのような変数（「undefinedはリテラルではない」を参照）やisNaNのような関数、ArrayやRegExpなどのコンストラクタ関数
 2つ目は実行環境（ブラウザやNode.jsなど）が定義するオブジェクトでdocumentやmoduleなど

 ビルトインオブジェクトはプログラム開始時にグローバルスコープへ自動的に定義されているため度のスコープからも参照できる 

 自分で定義したグローバル変数とビルトインオブジェクトでは、グローバル変数が優先して参照されるので、
 ビルトインオブジェクトと同じ名前の変数を定義すると、定義した変数が参照される

 ビルトインオブジェクトと同じ名前の変数を定義したことにより、ビルトインオブジェクトを参照できなくなる
このように内側のスコープで外側のスコープと同じ名前の変数を定義することで、外側の変数が参照できなくなることを変数の隠蔽と呼ぶ

### 関数スコープとvarの巻き上げ

varで宣言された変数が宣言前に参照でき、その値がundefinedとなる特殊な動きをする
varによる変数宣言は、宣言部分が暗黙的にもっとも近い関数またはグローバルスコープの先頭に巻き上げられ、代入部分はそのままの位置に残るという特殊な動作をする
さらに、var変数の宣言の巻き上げは、ブロックスコープを無視してもっとも近い関数またはグローバルスコープに変数をひもづける

### 関数宣言と巻き上げ

functionキーワードを使った関数宣言もvarと同様に、もっとも近い関数またはグローバルスコープの先頭に巻き上げられる
注意点として、varで宣言された変数へ関数を代入した場合はvarのルールで巻き上げられる
そのため、varで変数へ関数を代入する関数式では、変数が巻き上げによりundefinedとなるため呼び出せない

### 即時関数

匿名の関数を宣言した直後に呼び出すことで任意の処理を関数のスコープに閉じて実行し、グローバルスコープの汚染を避けるためのイディオム
constやletがうまれ、あまり使用されることはない

[構文]
(function() {
  // 処理
})();

### クロージャー

クロージャーとは「外側のスコープにある変数への参照を保持できる」という関数が持つ性質のこと

静的スコープ : 
  どの識別子がどの変数を参照しているかを静的に決定する性質

メモリ管理の仕組み

  不要なデータをメモリから解放する方法としてJavaScriptではガベージコレクションが採用されている
  ガベージコレクションとは、どこからも参照されなくなったデータを不要なデータと判断して自動的にメモリ上から解放する仕組みのこと

