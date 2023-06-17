
const numberOfInteraction = 500
const timeOfOneInteraction = 0.02

target("350px","10px")

artefact("artefact100", "50px", "100px")
artefact("artefact101", "150px", "100px")
artefact("artefact102", "250px", "100px")
artefact("artefact103", "350px", "100px")
artefact("artefact104", "450px", "100px")
artefact("artefact105", "550px", "100px")
artefact("artefact106", "650px", "100px")

artefact("artefact200", "50px",  "200px")
artefact("artefact201", "150px", "200px")
artefact("artefact202", "250px", "200px")
artefact("artefact203", "350px", "200px")
artefact("artefact204", "450px", "200px")
artefact("artefact205", "550px", "200px")
artefact("artefact206", "650px", "200px")

artefact("artefact300", "25px", "250px")
artefact("artefact301", "125px","250px")
artefact("artefact302", "225px","250px")
artefact("artefact303", "325px","250px")
artefact("artefact304", "425px","250px")
artefact("artefact305", "525px","250px")
artefact("artefact306", "625px","250px")

artefact("artefact400", "50px",  "300px")
artefact("artefact401", "150px", "300px")
artefact("artefact402", "250px", "300px")
artefact("artefact403", "350px", "300px")
artefact("artefact404", "450px", "300px")
artefact("artefact405", "550px", "300px")
artefact("artefact406", "650px", "300px")

artefact("artefact501", "50px", "400px")
artefact("artefact502", "150px","400px")
artefact("artefact503", "250px","400px")
artefact("artefact504", "350px","400px")
artefact("artefact505", "450px","400px")
artefact("artefact506", "550px","400px")
artefact("artefact507", "650px","400px")

artefact("artefact600",  "25px", "450px")
artefact("artefact601", "125px","450px")
artefact("artefact602", "225px","450px")
artefact("artefact603", "325px","450px")
artefact("artefact604", "425px","450px")
artefact("artefact605", "525px","450px")
artefact("artefact606", "625px","450px")

artefact("artefact700", "50px", "500px")
artefact("artefact701", "150px","500px")
artefact("artefact702", "250px","500px")
artefact("artefact703", "350px","500px")
artefact("artefact704", "450px","500px")
artefact("artefact705", "550px","500px")
artefact("artefact706", "650px","500px")

const agentZero = new Agent("agentZero","50px", "600px", "#4B0082")
const agentOne = new Agent("agentOne", "150px", "600px", "#1E90FF")
const agentTwo = new Agent("agentTwo", "250px", "600px", "#FF1493")
const agentTree = new Agent("agentTree","350px", "600px","#7FFFD4")
const agentFour = new Agent("agentFour","450px", "600px","#F4A460") 
const agentFive = new Agent("agentFive","550px", "600px","#FFD700")
const agentSix = new Agent("agentSix","650px", "600px","#B22222")


function main () {
    strategy00(agentTwo)
    strategy01(agentOne)
    strategy02(agentTree)   
    strategy03(agentZero)
    strategy04(agentFour)
    strategy05(agentFive)
    strategy06(agentSix)
}