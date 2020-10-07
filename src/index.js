// const jsApp = document.getElementById('js-app');
// jsApp.innerHTML = '<h1>Hello from the DOM!</h1>';
// console.log('Hello from the console!');

const sum = (a) => (b) => a+b
// const increment => sum(1)

console.log(increment(1))

const countSpan = document.getElementById('count');

countSpan.innerText = 42;
let count = 0;

const incrementButton = document.getElementById('increment');

incrementButton.onclick = () => {
  count++
}