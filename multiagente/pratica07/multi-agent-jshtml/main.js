const numberOfInteraction = 500
const timeOfOneInteraction = 0.05

target("350px","10px")

artefact("artefact1", "650px", "300px")
artefact("artefact2", "600px", "300px")
artefact("artefact3", "550px", "300px")
artefact("artefact4", "500px", "300px")
artefact("artefact5", "450px", "300px")
artefact("artefact6", "400px", "300px")
artefact("artefact7", "350px", "300px")
artefact("artefact8", "250px", "300px")
artefact("artefact9", "200px", "300px")
artefact("artefact10", "150px", "300px")
artefact("artefact11", "100px", "300px")
artefact("artefact12", "50px", "300px")
artefact("artefact13", "0px", "300px")

const agent1 = new Agent("agentOne","350px", "600px","green")
const agent2 = new Agent("agentTwo","150px", "600px","orange")

// watchMyMessages
// sendMessage 
var barrierPosY; 
var barrierPosX; 

function main () {
    var detect1 = agent1.detectedWhatIsInFront()

    var posX1 = agent1.getMyPositionX()
    var posY1 = agent1.getMyPositionY()
    var posX2 = agent2.getMyPositionX()
    var posY2 = agent2.getMyPositionY()

    var message = agent2.watchMyMessages()

    
    var barrierDetected1 = detect1.some((element) => {
      return element.elementId.includes('artefact')
    })
    
    var targetDetected1 = detect1.some((element) => {
        return element.elementId.includes('target')
    })  
 
    // AGENTE 1

    if (barrierDetected1 && !targetDetected1){
        agent1.lessFivePxX()
        agent1.lessFivePxX()
        agent1.lessFivePxX()

        var messageX = agent1.getMyPositionX()
        var messageY = agent1.getMyPositionY()
        agent1.sendMessage([messageX, messageY],"agentTwo") 
        
        message.forEach(function(element) {
            barrierPositions = element.valueOfMessage
            barrierPosX = barrierPositions[0]
            barrierPosY = barrierPositions[1]
        })  
    
    }

    if (posY1 <= 10){
        if (posX1 < 350){
            agent1.plusFivePxX()
        } else if (posX1 > 350){
            agent1.lessFivePxX()
        } 
    } else {
        agent1.plusFivePxY()              
    }

    // AGENTE 2
    
    // console.log("Posição do obstaculo " + barrierPosY)
    // console.log("Posição do agente " + posY2)         

    if (barrierPosY === undefined || posX2 === barrierPosX){
        agent2.plusFivePxY()   
        
    // IMPLEMENTAR DETECTS
    } else{
        if(posY2 >= barrierPosY){  
            if(posX2 <= barrierPosX){
                agent2.plusFivePxX()
            } 
        } 
    }

}