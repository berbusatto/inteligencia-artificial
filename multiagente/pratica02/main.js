const numberOfInteraction = 120
const timeOfOneInteraction = 0.03

target("350px","0px")

artefact("artefact1", "350px", "300px") 
artefact("artefact2", "550px", "300px") 
artefact("artefact3", "150px", "300px")
artefact("artefact4", "50px", "300px") 
artefact("artefact5", "50px", "500px") 
artefact("artefact6", "50px", "100px")
artefact("artefact7", "550px", "300px") 
artefact("artefact8", "550px", "500px") 
artefact("artefact9", "550px", "100px")
artefact("artefact10", "350px", "100px") 
artefact("artefact11", "250px", "100px")
artefact("artefact12", "350px", "500px") 
artefact("artefact13", "250px", "500px")
artefact("artefact14", "0px", "300px") 
artefact("artefact10", "650px", "300px")

const agent = new Agent("agentOne","0px", "600px")

function main () {
    let agPosY = agent.getMyPositionY()
    
    var detect = agent.detectedWhatIsInFront()
    console.log(detect)
   
    // console.log(detect)
    
        
    if (agPosY < 250) {
        agent.plusFivePxY()
        
    } else{        
        agent.plusFivePxX()
    }

    if (agPosY === 0){
        for (i = 0; i < 100; i++){
            agent.plusFivePxX()
        }
        for (i = 0; i < 100; i++){
            agent.lessFivePxX()
        }      
        
    }
    
    // detect.forEach((object) => {
    //     console.log("Objeto detectado:", object);
    //   });

    // let otherBallDetected = detect.some((object) => {
    //     return object.elementId === 'agent-agentTwo'
    // })

    let targetDetected = detect.some((object) => {
        return object.elementId === 'target';
      })

    if (detect.length > 0 && !targetDetected) {
        agent.plusFivePxX()
        agent.plusFivePxX()
        agent.plusFivePxX()
        agent.plusFivePxX()       
    }
}