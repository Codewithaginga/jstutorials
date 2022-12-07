document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        //console.log(task);

        //displaying the list items
        const li = document.createElement("li");
        li.innerHTML = task;

        document.querySelector('#tasks').append(li)


        //clear input
        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        // dont display the empty list disable
        document.querySelector('#submit').disabled = true;

        document.querySelector('#task').onkeyup = () => {

            if (document.querySelector('#task').value.length > 0) {
                document.querySelector('#submit').disabled = false;
            } else {
                document.querySelector('#submit').disabled = true;
            }

        }
           
        // stop form from submitting

        return false;
    }
});
