/*
 |--------------------------------------------------------------------------
 | Const Primitive
 |--------------------------------------------------------------------------
 */

const PI = 3.14;

// Not possible, because initial value is missing
// const PI;

// Not possible to reassign
// PI = 3.12;

// Not possible to redeclare
// var PI = 3.14159265359

// Possible in IIFE, because it is in different context
(function() {
    const PI = 3.14159265359;
    // Will output 3.14159265359
    console.log(PI);
})();

// Possible, because it's in different block scope
if (true) {
    const PI = 3.14159;
    // Will output 3.14159
    console.log(PI);
}

// Not possible, because var variable gets hoisted
// if (true) { var PI = 3.14159; }

// Will output 3.14
console.log(PI);

/*
 |--------------------------------------------------------------------------
 | Const Array
 |--------------------------------------------------------------------------
 */

const PLANETS = ['Mercury', 'Venus', 'Earth', 'Mars'];

// Not possible to reassign
// PLANETS = ['Mercury'];

// Not possible to redeclare
// var PLANETS = [];

PLANETS[5] = 'Saturn';
delete PLANETS[0];
// Will output [undefined, 'Venus', 'Earth', 'Mars', undefined, 'Saturn']
console.log(PLANETS);

PLANETS.push('Jupiter');
// Will output [undefined, "Venus", "Earth", "Mars", undefined, "Saturn", "Jupiter"]
console.log(PLANETS);

PLANETS.pop();
PLANETS.pop();
PLANETS.pop();
PLANETS.shift();
// Will output ["Venus", "Earth", "Mars"]
console.log(PLANETS);

PLANETS.unshift('MERCURY');
// Will output ["MERCURY", "Venus", "Earth", "Mars"]
console.log(PLANETS);

PLANETS.length = 6;
// Will output ["MERCURY", "Venus", "Earth", "Mars", undefined, undefined]
console.log(PLANETS);

PLANETS.length = 1;
// Will output ["MERCURY"]
console.log(PLANETS);

/*
 |--------------------------------------------------------------------------
 | Const Object
 |--------------------------------------------------------------------------
 */

const PERSON = {
    name: 'John',
    surname: 'Doe',
    age: 30
};

// Not possible to reassign
// PERSON = {};

// Not possible to redeclare
// var PERSON = {};

PERSON['name'] = 'Adam';
PERSON['children'] = 1;
delete PERSON['age'];
// Will output Object { children=1, name="Adam", surname="Doe" }
console.log(PERSON);

/*
 |--------------------------------------------------------------------------
 | Immutable Const Object
 |--------------------------------------------------------------------------
 */

const PERSON_IMMUTABLE = Object.freeze({
    name: 'John',
    surname: 'Doe',
    age: 30,
    birthday: Object.freeze({
        day: 3,
        month: 8
    })
});

// Not possible to assign to read only property
// PERSON_IMMUTABLE['name'] = 'Adam';

// Not possible to add property
// PERSON_IMMUTABLE['birthday']['year'] = 1980;

// Will output Object {name="John", surname="Doe", age=30, Object {day=3, month=8}}
console.log(PERSON_IMMUTABLE);

/*
 |--------------------------------------------------------------------------
 | Immutable Const Array
 |--------------------------------------------------------------------------
 */

const CARS = Object.freeze([
    Object.freeze(['BMW 3', 'BMW 5']),
    ['VW Golf', 'VW Touareg']
]);

// Not possible to add new element
// CARS[0].push('BMW 7');

CARS[1].push('VW Polo');
// Will output [["BMW 3", "BMW 5"], ["VW Golf", "VW Touareg", "VW Polo"]]
console.log(CARS);