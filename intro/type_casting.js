let a = "12";
let b = 11;

console.log(b + +a);


/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

a = "100";
b = 20;
c = true;

console.log(+a + b + c);



let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


console.log(-d * +e);
console.log(-d + ++f + ++e * ++g );

