
function sayHello() {
    let reply = document.getElementById('jina').value;
    console.log(reply); 
    
    let mess = 'hello ' + reply;

    let output = document.getElementById('content').textContent = mess;

    console.log(output);

    if (jina === "student") {
        let title = document.getElementById("title").textContent;
        title += " makes improvements";

        document.getElementById("title").textContent = title;
    };
}


