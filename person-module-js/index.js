// This is how you import my module
import {Person} from './person-module.js';

// Instantiate a new Person object
let me = new Person(
    // The first argument is the name of the person
    'Lorenzo',
    // The second argument is the surname of the person 
    '774',
    // The third argument is the age of the person
    16,
    // The fourth argument is the profession of the person
    'programmer'
);

// printObj is a Person method that print all the properties (except printObj) of the object
me.printObj();