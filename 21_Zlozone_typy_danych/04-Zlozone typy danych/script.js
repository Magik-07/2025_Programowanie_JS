// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Ted',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  Więcej informacji o typie „obiekt funkcji”
// https://262.ecma-international.org/5.1/#sec-11.4.3

