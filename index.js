function hello() {

    let heading = document.querySelector('h1');

    if (heading.innerHTML === 'hello!'){
        heading.innerHTML = 'Goodbye';

    } else {
        heading.innerHTML = 'hello';

    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`hello, ${name}`);
    };

});