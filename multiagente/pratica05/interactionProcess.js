let exec = true;

const incrementsOfInteraction = (1000)*(timeOfOneInteraction)
const totalInteraction = numberOfInteraction*incrementsOfInteraction

for(let i = 0; i < totalInteraction; i+=incrementsOfInteraction) {
    setTimeout(() => {
        if (exec) {
            main()

            const nameOfTarget = conditionToStop()
            if (nameOfTarget) {
                document.getElementById("main").style.display = "none"
                document.getElementById("finalmessage").style.display = "block"
                document.getElementById("finalmessage").style["text-align"] = "center"
                document.getElementById("finalmessage").innerHTML = `${nameOfTarget} chegou ao destino`
                exec = false
            }
        }
    }, i)
}