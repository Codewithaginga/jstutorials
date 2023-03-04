function popUp() {
    let name = document.getElementById("name").value;

    let show = '<h1>Hello ' + name + ' I love you</h1>';

    document.getElementById("content").innerHTML = show;

    if (name === "aginga") {
        let title = document.querySelector("#title").textContent;

        title += 'Today';

        document.querySelector("#title").textContent = title;
    }
}