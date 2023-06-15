const numberOfInteraction = 200
const timeOfOneInteraction = 0.02

target("350px","10px")

artefact("artefact6", "50px", "100px")
artefact("artefact9", "550px", "100px")
artefact("artefact10", "350px", "100px")
artefact("artefact11", "250px", "100px")
artefact("artefact19", "150px", "100px")
artefact("artefact20", "450px", "100px")
artefact("artefact21", "650px", "100px")

artefact("artefact2", "525px", "300px")
artefact("artefact3", "125px", "300px")
artefact("artefact4", "25px", "300px")
artefact("artefact7", "525px", "300px")
artefact("artefact14", "225px", "300px")
artefact("artefact15", "625px", "300px")
artefact("artefact17", "425px", "300px")
artefact("artefact1", "325px", "300px")

artefact("artefact8", "550px", "500px")
artefact("artefact5", "50px", "500px")
artefact("artefact12", "350px", "500px")
artefact("artefact13", "250px", "500px")
artefact("artefact16", "150px", "500px")
artefact("artefact22", "450px", "500px")
artefact("artefact23", "650px", "500px")

const ag = new Agent("agentOne",`${600*Math.random()}px`, `${((600-500)*Math.random()) + 550}px`, "orange")
const ag2 = new Agent("agentOne",`${600*Math.random()}px`, `${((600-500)*Math.random()) + 550}px`, "green")

function main () {
    strategyOne(ag)
    strategyTwo(ag2)
}


function strategyOne(ag){
    var detect = ag.detectedWhatIsInFront()
    var posX = ag.getMyPositionX()
    var posY = ag.getMyPositionY()

    var barrierDetected = detect.some((element) => {
      return element.elementId.includes('artefact')
    })

    var targetDetected = detect.some((element) => {
        return element.elementId.includes('target')
    })

    if (barrierDetected && !targetDetected){
        
        if (posX < 300){
            ag.plusFivePxX()
            ag.plusFivePxX()
            ag.plusFivePxX()
            
        } else if (posX >= 400){
            ag.lessFivePxX()
            ag.lessFivePxX()
            ag.lessFivePxX()
        } else {
            if (posX < 350) {
                ag.plusFivePxX()
            } else if (posX > 350) {
                ag.lessFivePxX()
            }    
        }
        console.log(posX)
     } 

    if (posY <= 10){
        if (posX < 350){
            ag.plusFivePxX()
        } else if (posX >= 350){
            ag.lessFivePxX()
        } 
    } else {
        ag.plusFivePxY()              
    }
}

function strategyTwo(ag2){

}