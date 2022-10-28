
// objects

let student = {
    first: 'Brian',
    last: 'Aginga',
    age: 23,
    height: 5.10,
    major: ['Data science', 'python Dev'],

    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

//console.log(student.first);
//student.last = 'Madiang'; // change value
//console.log(student.last);
//student.age++;
//console.log(student.age);
console.log(student.studentInfo());


