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
    points: 0
}, {
    role: 'software',
    points: 0
}, {
    role: 'game',
    points: 0
}, {
    role: 'data',
    points: 0
}, {
    role: 'system',
    points: 0
}]


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
            let group = (jobList[i].groups.find(answer))
            if (group.find(answer)) {
                jobList[i].points++;

            }
        }
    }
}




function showResult() {




    showResultModal()

}

function selectOption() {
    // Message to user to select option
}