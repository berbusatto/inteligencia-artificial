function conditionToStop () {
    const elements = document.getElementById("main").children

    const positionXofTarget = document.getElementById("target").style.left.split("px")[0]
    const positionYofTarget = document.getElementById("target").style.top.split("px")[0]

    for (let element of elements) {
        if (element.id === "target") {
            continue
        }

        const positionX = element.style.left.split("px")[0]
        const positionY = element.style.top.split("px")[0]

        let diffX = positionX - positionXofTarget
        let diffY = positionY - positionYofTarget

        diffX =  diffX < 0 ? -1 * diffX : diffX
        diffY =  diffY < 0 ? -1 * diffY : diffY

        if (diffX < 10 && diffY < 10 ) {
            return element.id
        }
    }

    return false
}   