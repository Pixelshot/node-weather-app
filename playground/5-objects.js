// Object property shorthand

const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};

console.log(user);

// Object destructuring
// The whole goal of destructuring is to abstract object properties and their values into individual variables
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const { label, stock } = product;
// console.log(label);
// console.log(stock);

// Two important things we can do with destructuring
// 1. Rename a key in the object
// const { label:productLabel } = product; // This will change label to productLabel
console.log(label); // will throw error
console.log(productLabel); // will work

// The other important thing is that we can set a default value for the variable should it not be able to find anything from the object. It's important to note that the default value will only be used if there isn't any value in the object. eg:

const { label, price, rating = 5 } = product;

console.log(rating); // 5
