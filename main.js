let img = document.createElement("img");
img.style.width = "300px";
document.body.appendChild(img);

function Coffee() {
    fetch('https://corsproxy.io/?url=https://coffee.alexflipnote.dev/random.json')
        .then(response => response.json())
        .then(data => {
            img.src = data.file;
        })
}
Coffee();
setInterval(Coffee, 4000);