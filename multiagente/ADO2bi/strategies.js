const Direction = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
}

function moveAgent(ag, direction) {
    switch (direction) {
        case Direction.Up:
            ag.plusFivePxY()
            break
        case Direction.Down:
            ag.lessFivePxY()
            break
        case Direction.Left:
            ag.lessFivePxX()
            break
        case Direction.Right:
            ag.plusFivePxX()
            break
    }
}

function goToTarget(ag) {
    var posX = ag.getMyPositionX()
    var posY = ag.getMyPositionY()
    var direction

    if (posY <= 10) {
        if (posX < 350) {
            direction = Direction.Right
        } else {
            direction = Direction.Left
        }
    }
    return direction
}

function finalCondition(ag, direction){
    (goToTarget(ag) ? moveAgent(ag, goToTarget(ag)) : moveAgent(ag, direction))
}

///////////////////////////////////////////////////////
////////////////////// ESTRATÉGIAS ////////////////////
///////////////////////////////////////////////////////


// ROSA - DONE
function strategy00(ag) {
    const agent = document.getElementById(ag.idOfAgent)
    const sizeIncrement = 8
    var detect = ag.detectedWhatIsInFront()
    var direction = Direction.Up
    var barrierDistanceY
    var barrierPositionY
    var posY = ag.getMyPositionY()

    function barrierJump(agentElement, sizeIncrement) {
        var currentSize = 30;
        var newSize = currentSize + sizeIncrement;
        agentElement.style.width = `${newSize}px`;
        agentElement.style.height = `${newSize}px`;
        agent.direction = Direction.Up;
    }

    function barrierLand(agentElement) {
        agentElement.style.width = `30px`;
        agentElement.style.height = `30px`;
        agent.direction = Direction.Up;
    }

    var barrierDetected = detect.some((element) => {        
        barrierPositionY = element.positionYOfOther
        barrierDistanceY = element.diffPositionY
        return element.elementId.includes('artefact')
    })

    if (barrierDetected && barrierDistanceY < 20) {
        barrierJump(agent, sizeIncrement)
    } else if(barrierDetected && posY >= (barrierPositionY -20)){
        barrierLand(agent)
    }

    finalCondition(ag, direction)
}


// AZUL - DONE
function strategy01(ag) {
    var detect = ag.detectedWhatIsInFront()
    var direction = Direction.Up

    if (detect.length > 0) {
        const {
            diffPositionX,
            diffPositionY
        } = detect[0]

        if (diffPositionY <= 20) {
            direction = Direction.Left
        } else if (diffPositionX <= 20) {
            direction = Direction.Up 
        }
    }

    finalCondition(ag, direction)
}


// VERDE - DONE
function strategy02(ag) {
    var direction = Direction.Up
    var detect = ag.detectedWhatIsInFront()
    var posX = ag.getMyPositionX()

    if (detect.length > 0) {
        const {
            elementId,
            positionXOfOther,
            diffPositionY
        } = detect[0]

        if (diffPositionY <= 20) {
            // CALCULANDO CENTRO DO AGENTE
            const agent = document.getElementById(ag.idOfAgent)
            const agentWidth = parseInt(agent.style.width.split("px")[0], 10)
            const agentCenterX = parseInt(posX, 10) + (agentWidth / 2)

            // CALCULANDO CENTRO DA BARREIRA
            const barrier = document.getElementById(elementId)
            const barrierWidth = parseInt(barrier.style.width.split("px")[0], 10)
            const barrierCenterX = (barrierWidth / 2) + parseInt(positionXOfOther, 10)

            // DIFERENÇA ENTRE OS CENTROS
            const diff = agentCenterX - barrierCenterX

            // DEFININDO DIREÇÃO COM BASE NA DISTÂNCIA
            if (diff < 0 && -diff < (barrierWidth / 2) + (agentWidth / 2)) {
                direction = Direction.Left
            } else if (diff >= 0 && diff < (barrierWidth / 2) + (agentWidth / 2)) {
                direction = Direction.Right
            } else {
                direction = Direction.Up
            }
        }
    }

    finalCondition(ag, direction)
}


// ROXO - DONE
function strategy03(ag) {
    var detect = ag.detectedWhatIsInFront()
    var direction = Direction.Up
    var posX = ag.getMyPositionX()
    var posY = ag.getMyPositionY()
    var barrierDistanceY   

    const target = document.getElementById('target')
    const targetPositionX = parseInt(target.style.left.split("px")[0], 10)
    const targetPositionY = parseInt(target.style.top.split("px")[0], 10)

    var barrierDetected = detect.some((element) => {

        barrierDistanceY = element.diffPositionY
        return element.elementId.includes('artefact')
    })      

    if (targetPositionY <= posY) {
        if (targetPositionX > posX && barrierDetected && barrierDistanceY <= 20) {
            direction = Direction.Right
        } else if (targetPositionX < posX && barrierDetected && barrierDistanceY <= 20) {
            direction = Direction.Left
        }
    }

    finalCondition(ag, direction)
}


// LARANJA - DONE
function strategy04(ag) {

    var detect = ag.detectedWhatIsInFront()
    var posX = ag.getMyPositionX()
    var posY = ag.getMyPositionY()

    if (posY >= 550 && posX < 670) {
        var direction = Direction.Right
    } else {
        direction = Direction.Up
    }

    if (detect.length > 0 && detect[0].diffPositionY < 25) {       
        direction = Direction.Left
    }

    finalCondition(ag, direction)
}


// AMARELO - DONE
function strategy05(ag) { 
    var direction = Direction.Up   
    var posX = ag.getMyPositionX()
    var posY = ag.getMyPositionY()

    detect = ag.detectedWhatIsInFront()

    if(detect.length > 0){
        const barrier = document.getElementById(detect[detect.length -1].elementId)
        const barrierPositionX = parseInt(barrier.style.left.split("px")[detect.length -1], 10)
        const barrierPositionY = parseInt(barrier.style.top.split("px")[detect.length -1], 10)

        if(barrierPositionY >= posY -20){
            if(barrierPositionX >= posX + 40){
                direction = Direction.Up
            } else{
                direction = Direction.Right
            }
        }    
    } 
    finalCondition(ag, direction)
}


// VERMELHO - DONE
function strategy06(ag) {
    var detect = ag.detectedWhatIsInFront()
    var direction = Direction.Up

    var barrierDetected = detect.some((element) => {
        barrierDistanceX = element.diffPositionX
        barrierDistanceY = element.diffPositionY
        return element.elementId.includes('artefact')
    })

    if (barrierDetected && barrierDistanceX < 35 && barrierDistanceY <=20) {
        direction = Direction.Left
    }

    finalCondition(ag, direction)
}