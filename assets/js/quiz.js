let jobList = [{
    role: 'cyber',
    points: 0,
    groups: ["web", "maths", "computers"]
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
const next = document.getElementById('next')
const result = document.getElementById('showResults')
result.addEventListener(onclick, showResult)

function nextQuestion() {
    let answer = document.querySelector('[name="question-one"]:checked').value
    addResult(answer)
    console.log(jobList)
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
}
let jobRole;
function formatResults(){

    if (finalResult[0].role == "cyber") {
        jobRole = "cyber";
    } else if (finalResult[0].role == "UX") {
        jobRole = "UX";
    } else if (finalResult[0].role == "manager") {
        jobRole = "manager";
    } else if (finalResult[0].role == "software") {
        jobRole = "software";
    } else if (finalResult[0].role == "game") {
        jobRole = "game";
    } else if (finalResult[0].role == "system") {
        jobRole = "system";
    } else if (finalResult[0].role == "data") {
        jobRole = "data";
    }

    console.log(jobRole)

}

function showResultsModal() {

}

function selectOption() {
    // Message to user to select option
}