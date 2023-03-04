// function makeMultiplier(multiplier) {

//     function b () {
//         console.log('the multiplier is: ' + multiplier);
//     }

//     b();

//     return (
//         function (x) {
//             return multiplier * x;
//         }
//     );
// }

// let re = makeMultiplier(2);

// console.log(re(20));


// (function a (name) {
//     console.log('hello ' + name);
// }) ('Brian Is Valentine');


const circle = {
    radius: 1,
    location: {
        x:1,
        y:2
    },

    draw: function () {
        console.log('draw')
    }
};

circle.draw();

//factory function

function createCirle(radius) {
    return{
        radius,
    art: function () {
        console.log('art');
    }
    };
}

const c = createCirle(1);
c.art();

//constructor Fuunction

function Run(distance){

    this.distance = distance;

    this.cover = function () {
        console.log('cover');
    }

}

const perHour = new Run(38);
Run.length;




