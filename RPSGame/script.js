const rockbtn = document.getElementById("rock")
const paperbtn = document.getElementById("paper")
const scissorsbtn = document.getElementById("scissors")
const outputdiv = document.getElementById("output")

function rockfunc() {
    const ranrock = Math.random()
    let compresult = ''
    if (ranrock >= 0 && ranrock < 1 / 3) {
        compresult = "Rock"
    }
    else if (ranrock >= 1 / 3 && ranrock < 2 / 3) {
        compresult = "Paper"
    }
    else if (ranrock >= 2 / 3 && ranrock < 1) {
        compresult = "Scissors"
    }
    console.log(ranrock)


    outputdiv.innerHTML = ''
    let output = document.createElement('h3')
    outputdiv.append(output)
    let humanresult = ""
    if (compresult === "Rock") {
        output.innerText = `The computer picked ${compresult}, its a draw`
    }
    else if (compresult === "Paper") {
        output.innerText = `The computer picked ${compresult},You lost`

    }
    else if (compresult === "Scissors") {
        output.innerText = `The computer picked ${compresult},You won!`
    }

}

function paperfunc() {
    const ranrock = Math.random()
    let compresult = ''
    if (ranrock >= 0 && ranrock < 1 / 3) {
        compresult = "Rock"
    }
    else if (ranrock >= 1 / 3 && ranrock < 2 / 3) {
        compresult = "Paper"
    }
    else if (ranrock >= 2 / 3 && ranrock < 1) {
        compresult = "Scissors"
    }
    console.log(ranrock)


    outputdiv.innerHTML = ''
    let output = document.createElement('h3')
    outputdiv.append(output)
    let humanresult = ""
    if (compresult === "Rock") {
        output.innerText = `The computer picked ${compresult}, You lost`
    }
    else if (compresult === "Paper") {
        output.innerText = `The computer picked ${compresult},Its draw`

    }
    else if (compresult === "Scissors") {
        output.innerText = `The computer picked ${compresult},You lost`
    }

}

function scissfunc() {
    const ranrock = Math.random()
    let compresult = ''
    if (ranrock >= 0 && ranrock < 1 / 3) {
        compresult = "Rock"
    }
    else if (ranrock >= 1 / 3 && ranrock < 2 / 3) {
        compresult = "Paper"
    }
    else if (ranrock >= 2 / 3 && ranrock < 1) {
        compresult = "Scissors"
    }
    console.log(ranrock)


    outputdiv.innerHTML = ''
    let output = document.createElement('h3')
    outputdiv.append(output)
    let humanresult = ""
    if (compresult === "Rock") {
        output.innerText = `The computer picked ${compresult}, You lost`
    }
    else if (compresult === "Paper") {
        output.innerText = `The computer picked ${compresult},You won`

    }
    else if (compresult === "Scissors") {
        output.innerText = `The computer picked ${compresult},Its a draw`
    }

}

rockbtn.addEventListener("click", rockfunc)
paperbtn.addEventListener("click", paperfunc)
scissorsbtn.addEventListener("click", scissfunc)
