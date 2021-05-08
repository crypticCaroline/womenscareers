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
const answer = document.getElementById('answer').value
const showAnswer = document.getElementById('showAnswer')
answer.addEventListener(click, addResult)
showAnswer.addEventListener(click, showAnswer)

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
    showResultsModal()
}

function calculateResult() {
    finalResult = jobList.slice(0);
    finalResult.sort(function (a, b) {
        return  b.points - a.points;
    });
}


function showResultModal() {

}

function selectOption() {
    // Message to user to select option
}