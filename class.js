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
