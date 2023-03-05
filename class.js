// function Audi(wheel, make) {
//     this.wheel = wheel
//     this.make = make

//     this.display = function() {
//         return `${this.wheel} ${this.make}`;
//     }
// }

// let audu = new Audi(4, 'salon car');
// console.log(audu);


//OOP

let purchase = {
    benz: 1233344,
    texPay: 12,

    totalPay: function () {
        let calc = purchase.benz * purchase.texPay;
        console.log('Total Price is ', calc);

    }
}

purchase.totalPay();

let purchase2 = {
    benz: 1233344,
    texPay: 12,

    totalPay: function () {
        let calc = this.benz * this.texPay;
        console.log('Total Price is ', calc);

    }
}

purchase2.totalPay();


let soccer = {
    club: true,
    location: true,
    position: true
}

let data = Object.create(soccer);

console.log('The club is Arsenal: ', data.club);
console.log('The club is located in London ', data.location);
console.log('They are topping the table' , data.position );

