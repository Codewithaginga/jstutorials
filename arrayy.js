// arrays

let vegs = ['banana', 'apple', 'orange', 'pinneples'];
//let veg = new Array('banana', 'apple', 'orange', 'pinneples'); same thing

console.log(vegs[2]); // accessing value

vegs[2] = 'cow peas'; // changing an element ins a list
console.log(vegs);

//array method

console.log('to string', vegs.toString());
console.log(vegs.join('-'));
console.log(vegs, vegs.pop(), vegs); // remove last item
console.log(vegs.push('blackberries') ,vegs);//append
console.log(vegs[3]);
vegs[2] = 'garlic';
console.log(vegs);
console.log(vegs.shift()); //remove first element
console.log(vegs.unshift('gauvas')); // add first element to an array


// concatenate list
let portA = ['Arsenal', 'Manchester city', 'Chelsea', 'Liverpool', 'Manchester united'];
let portB = ['Barcelona', 'Real Madrid', 'Real socieded', 'Sevilla', 'Athleti de Madrid'];

let allTeams = portA.concat(portB); // combine arrays
console.log(allTeams);
console.log(allTeams.slice(1, 5));
console.log(allTeams.reverse());

let nums = [1, 3, 4, 8, 6, 5];
console.log(nums.sort()); // sorting
console.log(nums.sort(function(a, b) {return b - a})); // in descending order


let emptyArray = [];
for (let num = 0; num <= 10; num++) {

    emptyArray.push(num);
}

console.log(emptyArray);

let teams = ['Gor mahia', 'Sonny Sugar', 'Ulinzi'];
for (let tm of teams) {

    console.log(`${tm} plays in Kenya premier league `);
}









