/*------------------------------
  暗黙的な型変換
------------------------------*/
// 等価演算子による暗黙の型変換
console.log(1 == true); // true
console.log(0 == false); // true
console.log(10 == ["10"]); // true

// 明示的な型変換
console.log(Boolean("string"));
console.log(Boolean(0));
console.log(Boolean(null));

console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
console.log(String(Symbol("something")));
console.log(String([1, 2, 3]));
console.log(String({ key: "value" }));
console.log(String(function () {}));

console.log(Number("123"));
console.log(Number.parseInt("42px", 10));
console.log(Number.parseInt("10.5", 10));
console.log(Number.parseFloat("42.5px"));
console.log(Number.parseFloat("10.5"));

console.log(Number.parseFloat("abc"));
console.log(NaN + 10);
console.log(Number.isNaN(1));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(false));
console.log(Number.isNaN({}));
console.log(Number.isNaN("str"));

console.log(typeof NaN);

/*------------------------------
  関数と宣言
------------------------------*/
function double(value) {
  return value * 2;
}

console.log(double(4));

// returnの後に書いた処理は行わない例
function returnTest() {
  return;
  console.log("ここは処理されない");
}
const rt = returnTest();
console.log(rt);

// 仮引数よりも実引数が少ない時の例
function echo(x) {
  return x;
}
console.log(echo());

// デフォルト引数
function echoDef(x = "デフォルト値") {
  return x;
}
console.log(echo("hoge"));
console.log(echoDef());

// 実引数が仮引数よりも多い時の例
function add(x, y) {
  return x + y;
}
console.log(add(2, 3, 4));

// Rest parametersで引数が配列として代入されている例
function fn(...args) {
  console.log(args);
}
fn(1, 2, 3, 4, 5);

function fn2(arg, ...args) {
  console.log(arg);
  console.log(args);
}
fn2(1, 2, 3, 4, 5);

// Spread構文
function fn3(arg1, arg2, arg3) {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
}
const arr = ["a", "b", "c"];
fn3(...arr);

// argumentsの例
function fn4() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
fn4(3, 2, 1);

// 引数に分割代入を使った例
function fn5({ id }) {
  console.log(id);
}
const obj = {
  id: 42
};
fn5(obj);

function fn6([first, second]) {
  console.log(first);
  console.log(second);
}
const arr2 = ["aa", "bb"];
fn6(arr2);

// 関数を変数に代入して呼び出す例
function fn7() {
  console.log("call fn7");
}
const myFunc = fn7;
myFunc();

// 関数式
const fn8 = function () {
  console.log("call fn8");
};
fn8();

// 再帰的な処理を行う関数式
const fn9 = function inner(n) {
  if (n === 1) {
    return 1;
  }
  return inner(n - 1) * n;
};
console.log(fn9(4));

// arrow function
const af1 = (x, y) => {
  return x * y;
};
console.log(af1(2, 4));

const af2 = (x) => x * 3;
console.log(af2(7));

let arr_ = [1, 2, 3];
const doubleArr = arr_.map((x) => x * 2);
console.log(doubleArr);

// コールバック関数
const arr3 = [1, 2, 3];
const output = (value) => {
  console.log(value);
};
arr3.forEach(output);

/*------------------------------
  条件式
------------------------------*/

if (true) {
  console.log("実行");
}

// 実行する文が一行の時はブロックを省略できる
if (true) console.log("{}省略");

// 条件式の暗黙的な型変換
if (1) {
  console.log("表示1");
}
if (0) {
  console.log("非表示1");
}
if ("str") {
  console.log("表示2");
}
if (undefined) {
  console.log("非表示2");
}

// else if文
const ver = 2;
if (ver === 1) {
  console.log("ver1");
} else if (ver === 2) {
  console.log("ver2");
} else if (ver === 3) {
  console.log("ver3");
}

// else 文
const num1 = 2;
if (num1 > 5) {
  console.log("more than 5");
} else {
  console.log("less than 5");
}

// ネストしたif文
const year = 2021;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("閏年");
    } else {
      console.log("閏年じゃない");
    }
  } else {
    console.log("閏年");
  }
} else {
  console.log("閏年じゃない");
}

// switch文
const version = 3;
switch (version) {
  case 1:
    console.log("v1");
    break;
  case 2:
    console.log("v2");
    break;
  case 3:
    console.log("v3");
    break;
  default:
    console.log("other");
    break;
}

// switch文 breakを使わなかった場合
const version2 = 1;
switch (version2) {
  case 1:
    console.log("v1");
  case 2:
    console.log("v2");
  case 3:
    console.log("v3");
  default:
    console.log("other");
    break;
}
