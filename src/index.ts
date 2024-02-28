export {};

// Type Object must have a Symbol.iterator method that returns an iterator

// EXAMPLE 1 - Wrapping the object in an array

const obj = { name: 'Bobby Hadz' };

const result = [...[obj]];

console.log(result); // 👉️ [{name: 'Bobby Hadz'}]

// ---------------------------------------------------

// // EXAMPLE 2 - Merging multiple objects

// const obj = { name: 'Bobby Hadz' };

// const result = { ...obj, ...{ age: 30 } };

// console.log(result); // 👉️ {name: 'Bobby Hadz', age: 30}

// ---------------------------------------------------

// // EXAMPLE 3 - Merging multiple arrays of objects

// type Person = { name: string; age: number };

// type ArrayOfPeople = Person[];

// ---------------------------------------------------

// // Type 'undefined' must have a Symbol.iterator method that returns an iterator

// // EXAMPLE 4 - Providing a fallback of an empty array

// type Years = number[] | undefined;

// const arr1: Years = Math.random() > 0.5 ? [2022, 2023] : undefined;

// const result = [...(arr1 || [])];

// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 5 - Using the ternary operator to solve the error

// type Years = number[] | undefined;

// const arr1: Years = Math.random() > 0.5 ? [2022, 2023] : undefined;

// const result = [...(arr1 !== undefined ? arr1 : [])];

// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 6 - Using the logical OR (||) operator to solve the error

// type Years = number[] | undefined;

// const arr1: Years = undefined || []; // 👈️ default value empty arr

// const result = [...arr1];

// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 7 - Using the nullish coalescing (??) operator to solve the error

// type Years = number[] | undefined;

// const arr1: Years = undefined ?? []; // 👈️ default value empty arr

// const result = [...arr1];

// console.log(result);
