// constructor function
function Person(firstName, lastName, dob) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function() {

        return this.dob.getFullYear();
    }

    this.getFullNames = function() {

        return `${this.firstName} ${this.lastName}`;
    }

}

// Instantiate object

let person1 = new Person('Brian', 'aginga', '29-11-1999');

let per = person1.getBirthYear()

console.log(person1.getFullNames());




