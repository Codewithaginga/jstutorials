console.log('hello');

// varaible
let name1 = 'brian';
console.log(name1);

let someNumber = 45;
console.log(someNumber);


//let age = prompt('what is your age? ');
//document.getElementById('someText').innerHTML = age;


// numbers

let num = 5.7;
console.log(50*4);

// increment by 1

num ++;

// decrement by 1

num --;

//reminder
console.log(num % 5);

// ny any number you want

num += 20;
console.log(num);

//functions
/*1.create a function
2.You call a function

*/

function func() {
    console.log('Welcome babe');
}

func();

/* create a function takes a name and returns to you hello
follwed by your name;
name: aginga
reurn: hello aginga*/

function greet(YouName) {

    let naming = 'hello ' + YouName;
    console.log(naming)
    
}
let yourName = prompt('Whats is your name; ');
greet(yourName);

// functions can take an argument

function sumNumbers(a, b) {

    let result = a + b;
    console.log(result);

}

//sumNumbers(23, 67);







