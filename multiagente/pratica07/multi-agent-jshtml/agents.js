class Agent {
    constructor(idOfAgent, positionX, positionY, color = "rgb(0 0 0 / 95%)") {
        this.notWalkX = false
        this.notWalkY = false

        this.idOfAgent = `agent-${idOfAgent}`
        const newDiv = document.createElement("div")

        newDiv.id = this.idOfAgent

        newDiv.style['border-radius'] = "100%";
        newDiv.style['background-color'] = color;
        newDiv.style['width'] = "30px";
        newDiv.style['height'] = "30px";
        newDiv.style['top'] = "10px";
        newDiv.style['left'] = "350px";

        newDiv.style.left = positionX;
        newDiv.style.top = positionY;

        document.getElementById("main").appendChild(newDiv)
    }

    plusFivePxY() {
        const oldPosition = document.getElementById(this.idOfAgent).style.top.split("px")[0]
        const newPosition = parseInt(oldPosition)-5

        document.getElementById(this.idOfAgent).style.top = `${newPosition}px`
    }

    lessFivePxY() {
        const oldPosition = document.getElementById(this.idOfAgent).style.top.split("px")[0]
        const newPosition = parseInt(oldPosition)+5

        document.getElementById(this.idOfAgent).style.top = `${newPosition}px`
    }

    plusFivePxX() {
        const oldPosition = document.getElementById(this.idOfAgent).style.left.split("px")[0]
        const newPosition = parseInt(oldPosition)+5

        document.getElementById(this.idOfAgent).style.left = `${newPosition}px`
    }

    lessFivePxX() {
        const oldPosition = document.getElementById(this.idOfAgent).style.left.split("px")[0]
        const newPosition = parseInt(oldPosition)-5

        document.getElementById(this.idOfAgent).style.left = `${newPosition}px`
    }

    detectedWhatIsInFront () {
        this.notWalkX = false
        this.notWalkY = false

        let whatIsNearOfMe = []
        let myPositionInX = document.getElementById(this.idOfAgent).style.left.split("px")[0]
        let myPositionInY = document.getElementById(this.idOfAgent).style.top.split("px")[0]

        let elements = document.getElementById("main").children

        for (let element of elements) {
            if (element.id === this.idOfAgent) {
                continue
            }
            
            let elementId = element.id
            let positionXOfOther = element.style.left.split("px")[0]
            let positionYOfOther = element.style.top.split("px")[0]
        
            let diffPositionX = positionXOfOther - myPositionInX
            diffPositionX = diffPositionX < 0 ? diffPositionX * (-1) : diffPositionX
            
            let diffPositionY = positionYOfOther - myPositionInY
            diffPositionY = diffPositionY < 0 ? diffPositionY * (-1) : diffPositionY
        
            this.notWalkX = diffPositionX < 40
            this.notWalkY = diffPositionY < 40


            if (this.notWalkX && this.notWalkY) {
                whatIsNearOfMe.push({
                    elementId,
                    positionXOfOther,
                    positionYOfOther,
                    diffPositionX,
                    diffPositionY
                })
            }

        }
 
        return whatIsNearOfMe
    }

    getMyPositionX () {
        return document.getElementById(this.idOfAgent).style.left.split("px")[0]
    }    

    getMyPositionY () { 
        return document.getElementById(this.idOfAgent).style.top.split("px")[0]
    }

    watchMyMessages () {
        const response = [...Comunication
                .getArrayOfMessage()
                .filter(e => e.toAgent === this.idOfAgent)]
        
        Comunication.arrayOfMessages = Comunication
                        .getArrayOfMessage()
                        .filter(e => !(e.toAgent === this.idOfAgent))

        return response
    }

    sendMessage (valueOfMessage,toAgent) {
        return Comunication.insertNewMessage(valueOfMessage,`agent-${toAgent}`)
    }
}
