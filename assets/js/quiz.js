
let jobList = [{
    role: 'cyber',
    points: 0,
    groups: ["web", "maths", "manager"]
}, {
    role: 'UX',
    points: 0,
    groups: ["web", "design"]
}, {
    role: 'manager',
    points: 0,
    groups: ["web", "maths", "computers"]
}, {
    role: 'software',
    points: 0,
    groups: ["web", "maths", "computers"]
}, {
    role: 'game',
    points: 0,
    groups: ["web", "maths", "computers"]
}, {
    role: 'data',
    points: 0,
    groups: ["web", "maths", "computers"]
}, {
    role: 'system',
    points: 0,
    groups: ["web", "maths", "computers"]
}]


let finalResult;
let questionNumber = 0
const next = document.getElementById('next')
const result = document.getElementById('results-btn')
const question = document.getElementById('question')
let answerOne = document.getElementById('answerOne')
let answerTwo = document.getElementById('answerTwo')
let answerThree = document.getElementById('answerThree')
let answerFour = document.getElementById('answerFour')
let radioBtns = document.getElementsByClassName('reset-btn')
let answer;


function nextQuestion() {
    for(i=0; i<radioBtns.length; i++ ) {
        if(radioBtns[i].checked == true) {
            answer = radioBtns[i].value
        } 
    }
    if (!answer) {
        alert("Please select an option")
        return
    }
    addResult(answer)
    resetRadio()
    questionNumber++
    checkQuestions()
    buildQuestion()
}

function buildQuestion() {
    

}


function addResult(answer) {
    for (var i = 0; i < jobList.length; i++) {
        if (jobList[i].role == answer) {
            jobList[i].points++;
            break;
        } else {
            let group = jobList[i].groups
            if (group.includes(answer)) {
                jobList[i].points++;

            }
        }
    }
}

function showResult() {
    calculateResult()
    formatResults()
    showResultsModal()
}

function calculateResult() {
    finalResult = jobList.slice(0);
    finalResult.sort(function (a, b) {
        return  b.points - a.points;
    });
    console.log(finalResult)
}

function formatResults(){
    var jobRoleOne = finalResult[0].role
    var jobRoleTwo = finalResult[1].role
    var jobRoleThree = finalResult[2].role
    var jobRoleFour = finalResult[3].role
    var jobRoleFive = finalResult[4].role
    var jvarobRoleSix = finalResult[5].role
    var jobRoleSeven = finalResult[6].role

}

function showResultsModal() { 
    
    

}

function resetRadio(){
    let radioBtns = document.getElementsByClassName('reset-btn')
    for(i=0; i<radioBtns.length; i++ ) {
        if(radioBtns[i].checked = true) {
            radioBtns[i].checked = false;
        }
    }
}


function checkQuestions(){
    if (questionNumber > 8) {
        next.style.display = "none"
        result.style.display="inline-block"
    }
}
