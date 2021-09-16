// スコープ
function fn() {
  const x = 1;
  console.log(x);
}

fn();
// console.log(x); // 関数の外からxは参照できない

// 仮引数が外から参照できない例
function fn2(arg) {
  console.log(arg);
}
fn(1);
// console.log(arg); // reference error

// 異なるスコープに同じ名前の変数を定義してもエラーにならない
function fn3() {
  let hoge;
}
function fn4() {
  let hoge;
}

// ブロックスコープ
{
  const xx = "fuga";
  console.log(xx);
}
// console.log(xx); // ブロック内は参照できずエラーになる

// forはループごとに新しいブロックを作っている
const array = [1,2,3,4,5];
for(const element of array){
  console.log(element);
}
// console.log(element); // 外からはエラー

{
  // outer
  const x = 100;
  {
    // inner
    const x = 99;
    console.log(x);
  }
}

const gValue = 'global';
console.log(gValue);
{
  console.log(gValue);
  {
    console.log(gValue);
  }
}

console.log(isNaN);

const Array = 1;
console.log(Array); // 自分で定義した変数が優先して参照される

// 即時関数
(function () {
  var x = 666;
  console.log(x);
})();

// クロージャー
function createCounter(){
  let count = 0;
  function addCount(){
    count++;
    return count;
  }
  return addCount;
}

let counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

let counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());

// 静的スコープ
const x10 = 10; // ＊1

function printX() {
    // この識別子`x`は常に ＊1 の変数`x`を参照する
    console.log(x10); // => 10
}

function run() {
    const x10 = 20; // ＊2
    printX(); // 常に10が出力される
}

run();
