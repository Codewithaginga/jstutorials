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

// let purchase = {
//     benz: 1233344,
//     texPay: 12,

//     totalPay: function () {
//         let calc = purchase.benz * purchase.texPay;
//         console.log('Total Price is ', calc);

//     }
// }

// purchase.totalPay();

// let purchase2 = {
//     benz: 1233344,
//     texPay: 12,

//     totalPay: function () {
//         let calc = this.benz * this.texPay;
//         console.log('Total Price is ', calc);

//     }
// }

// purchase2.totalPay();


// let soccer = {
//     club: true,
//     location: true,
//     position: true
// }

// let data = Object.create(soccer);

// console.log('The club is Arsenal: ', data.club);
// console.log('The club is located in London ', data.location);
// console.log('They are topping the table' , data.position );

// let locationb = Object.create(soccer);

// locationb.location = false;
// console.log('The club is Arsenal: ', data.club);
// console.log('The club is located in Manchester ', locationb.location);
// console.log('They are topping the table' , data.position );


// class Car{
//     constructor(model, color){
//         this.color = color;
//         this.model = model;
//     }
// }

// let car1 = new Car('Mercedez Benz', 'Navy Blue');
// console.log(car1);
// let car2 = new Car('Audi', 'Black');
// console.log(car2);
// let car3 = new Car('BMW', 'Majenta');
// console.log(car3);

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

let train1 = new Train('red',false);
train1.lightsStatus();
train1.getSelf();
train1.getPrototype();


