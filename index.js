//var generateName = require('sillyname');

// import generateName from "sillyname"
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);
//import superheroes from 'superheroes';

//const name = superheroes.random();

//console.log(`I am ${name}.`);
// const superheroes = require("superheroes");
import superheroes from "superheroes";

const idx = Math.floor(Math.random() * superheroes.length);
const name = superheroes[idx];
console.log(`I am ${name}!`);