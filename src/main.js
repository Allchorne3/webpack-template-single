import "./styles/main.scss"
import $ from 'jquery';

const fish = {
    cat: 1, 
    dog: 2,
    shark: 3
}

const animals = {
    ...fish,
    penguin: 1
}

console.log('Hello!')
console.log('Again!')
console.log(animals)