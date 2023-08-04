let i = 0;
let createBox = document.getElementsByClassName('createBox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userInput');

createBox.addEventListener('keydown', content);

document.getElementById("create").addEventListener("click", function () {
    createBox.style.display = "block";
});

function content(e) {
    if (e.keyCode == '13') {
        divStyle(input.value.trim());
        createBox.style.display = "none";
        input.value = ''; // Clear the input after creating a sticky note
    }
}

function color() {
    let randomColors = ["#7fff00", "#ff1493", "#00ced1", "#ff4500", "#32cd32", "#da70d6", "#ffa500", "#1e90ff", "#9400d3", "#00ffff"];
    if (i > randomColors.length - 1) {
        i = 0;
    }
    return randomColors[i++];
}

function divStyle(text) {
    if (text !== "") { // Check if the input text is not empty
        let div = document.createElement("div");
        div.className = 'note';
        div.innerHTML = '<div class="details">' + '<h3>' + text + '</h3>' + '</div>';
        div.setAttribute('style', 'background:' + color() + '; box-shadow: 0 15px 35px ' + color() + ';');

        div.addEventListener("dblclick", function () {
            div.remove();
        });

        notes.appendChild(div);
    }
}
