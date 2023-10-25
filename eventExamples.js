/*function sayLol(timestamp) {
    document.write("lol");
    requestAnimationFrame(sayLol);
}*/

function addButton() {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "button");
    inputElement.setAttribute("value", "New Button");

    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElement);

    let newParagraph = document.createElement("p");

    let paragraphText = document.createTextNode("New Paragraph");
    
    newParagraph.appendChild(paragraphText);

    parent.appendChild(newParagraph);
}

function addImageButtons() {
    console.log("Adding image buttons");

    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("onclick", "startButton()");
    inputElementStart.setAttribute("id", "startButton");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("onclick", "stopButton()");
    inputElementStop.setAttribute("id", "stopButton");
    inputElementStop.setAttribute("disabled", "true");

    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

function startButton() {
    console.log("Pressed Start!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "3s";
}

function stopButton() {
    console.log("Pressed Stop!");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");
    memeImage.style.animationDuration = "0s";
}