function makeMultiplier(multiplier) {

    function b () {
        console.log('the multiplier is: ' + multiplier);
    }

    b();

    return (
        function (x) {
            return multiplier * x;
        }
    );
}

let re = makeMultiplier(2);

console.log(re(20));

