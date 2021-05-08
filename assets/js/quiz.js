let jobList = [{
    role: 'cyber',
    points: 0,
    groups: ["web", "maths", "computers"]
}, {
    role: 'UX',
    points: 0,
    groups: ["web", "design"]
}, {
    role: 'manger',
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