function Audi(wheel, make) {
    this.wheel = wheel
    this.make = make

    this.display = function() {
        return `${this.wheel} ${this.make}`;
    }
}

let audu = new Audi(4, 'salon car');
console.log(audu);
