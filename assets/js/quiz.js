
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
let questionNumber = 0
const next = document.getElementById('next')
const result = document.getElementById('showResults')
result.addEventListener(onclick, showResult)
const question = document.getElementById('question')
let answerOne = document.getElementById('answerOne')
let answerTwo = document.getElementById('answerTwo')
let answerThree = document.getElementById('answerThree')
let answerFour = document.getElementById('answerFour')
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "questions.json", true);
xmlhttp.send();

function nextQuestion() {
    let answer = document.querySelector('[name="question-one"]:checked').value
    addResult(answer)
    questionNumber++
    buildQuestion()
    console.log(jobList)
}

function buildQuestion() {
    question.innerHTML = questionData.questionList[questionNumber].question
    answerOne.innerHTML = questionData.questionList[questionNumber].answerOne
    answerTwo.innerHTML = questionData.questionList[questionNumber].answerTwo
    console.log(question)
    console.log(answerOne)

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

function selectOption() {
    // Message to user to select option
}