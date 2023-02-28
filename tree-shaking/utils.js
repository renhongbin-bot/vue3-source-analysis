// 虽然foo函数只是读取值，但是一个函数调用只要会产生副作用，那么他就不会被移除，从而打包到bundle.js
// 副作用：调用函数的时候会对外部产生影响
// 除非我们明确的告诉rollup不会产生副作用 告诉方式：执行函数前使用注释代码/*#_PURE_*/
export function foo() {
  obj && obj.foo
}

// 由于bar函数并没有被调用，所以在npx rollup input.js -f esm -o bundle.js打包时会被当做dead code被移除
export function bar() {
  obj && obj.bar
}