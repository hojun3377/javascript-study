// 함수 선언문
function foo() {
  console.log('foo');
}

foo();

// 함수 표현식
const bar = function () {
  console.log('bar');
};

bar();

// Function 생성자 함수
const func = new Function('console.log("func")');

func();

// 화살표 함수
const arrowFunc = () => {
  console.log('arrowFunc');
};

arrowFunc();

// IIFE(즉시 실행 함수)
(function IIFEFunc() {
  console.log('IIFEFunc');
})();

// 재귀함수
const factorial = n => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(`recursionFunc: factorial(3): ${factorial(3)}`);

// 중첩 함수
const nestedFunc = () => {
  const innerFunc = () => {
    console.log(`nestedFunc: innerFunc`);
  };
  innerFunc();
};

nestedFunc();

// 콜백 함수
const callerFunc = calleeFunc => {
  calleeFunc();
};

const callbackFunc = () => {
  console.log('callbackFunc');
};

callerFunc(callbackFunc);
