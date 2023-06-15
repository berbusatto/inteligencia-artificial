function target(positionX, positionY) {
    const newDiv = document.createElement("div")

    newDiv.id = "target"

    newDiv.style['border-radius'] = "100%";
    newDiv.style['background-color'] = "#e81a1af1";
    newDiv.style['width'] = "30px";
    newDiv.style['height'] = "30px";
    newDiv.style['top'] = "10px";
    newDiv.style['left'] = "350px";

    newDiv.style.left = positionX;
    newDiv.style.top = positionY;

    document.getElementById("main").appendChild(newDiv)
}

function artefact (idOfAtefact, positionX, positionY) {
    const newDiv = document.createElement("div")

    newDiv.id = `artefact-${idOfAtefact}`
    newDiv.style.width = "40px";
    newDiv.style.height = "20px";
    newDiv.style["background-color"] = "rgb(50 26 232 / 95%)";
    newDiv.style.top = positionY;
    newDiv.style.left = positionX;
    newDiv.style["border-radius"] = "15px";
    document.getElementById("main").appendChild(newDiv)
}
