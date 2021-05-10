
// Variables for project 
let finalResult;
let questionNumber = 0;
const next = document.getElementById("next");
const result = document.getElementById("results-btn");
const questionRef = document.getElementById("question");
let answerOneRef = document.getElementById("answerOne");
let answerOneLabel = document.getElementById("answerOneLabel");
let answerTwoRef = document.getElementById("answerTwo");
let answerTwoLabel = document.getElementById("answerTwoLabel");
let answerThreeRef = document.getElementById("answerThree");
let answerThreeLabel = document.getElementById("answerThreeLabel");
let answerFourRef = document.getElementById("answerFour");
let answerFourLabel = document.getElementById("answerFourLabel");
let radioBtns = document.getElementsByClassName("reset-btn");
let questionNumberBox = document.getElementById("question-number")
let jobRoleOne;
let jobRoleTwo;
let jobRoleThree;
let jobRoleFour;
let jobRoleFive;
let jobRoleSix;
let jobRoleSeven;
let answer;
window.addEventListener('DOMContentLoaded', getQuestions)


let jobList = [{
        role: "cyber",
        points: 0,
        groups: ["maths3", "details", "teamwork2", "empathy2", "problemsolving1", "creativity3", "curiosity1", "planning4", "analytical2"],
    },
    {
        role: "ux",
        points: 0,
        groups: ["details", "teamwork2", "analystical2", "problemsolving2", "curiosity2", "planning1"],
    },
    {
        role: "manager",
        points: 0,
        groups: ["empathy2", "teamwork1", "analystical2", "problemsolving2", "creativity3", "curiosity1", "planning1"],
    },
    {
        role: "software",
        points: 0,
        groups: ["maths3", "teamwork1", "analystical2", "problemsolving1", "creativity1", "curiosity1", "planning1"],
    },
    {
        role: "game",
        points: 0,
        groups: ["maths1", "teamwork2", "details1", "problemsolving1", "creativity1", "curiosity2"],
    },
    {
        role: "data",
        points: 0,
        groups: ["maths1", "details1", "problemsolving1", "creativity4", "planning4"],
    },
    {
        role: "system",
        points: 0,
        groups: ["teamwork2", "problemsolving1", "creativity4", "curiosity2"],
    },
];

// Functions 

function nextQuestion() {
    for (i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked == true) {
            answer = radioBtns[i].value;
            break;
        } else {
            answer = false
        }
    }
  
  if (!answer) {
    alert("Please select an option");
    return;
  }
  addResult(answer);
  resetRadio();
  questionNumber++;
  getQuestions();
}

function addResult(answer) {
  for (var i = 0; i < jobList.length; i++) {
    if (jobList[i].role == answer) {
      jobList[i].points++;
      break;
    } else {
      let group = jobList[i].groups;
      if (group.includes(answer)) {
        jobList[i].points++;
      }
    }
  }
}

function showResult() {

    calculateResult();
    formatResults();
    fetchResult();

}

function calculateResult() {
  finalResult = jobList.slice(0);
  finalResult.sort(function (a, b) {
    return b.points - a.points;
  });
}

function showResultsModal() {

    resultsModal = document.getElementById("results-modal");
    resultsModal.style.display = "flex";

}

function resetRadio() {
  let radioBtns = document.getElementsByClassName("reset-btn");
  for (i = 0; i < radioBtns.length; i++) {
    if ((radioBtns[i].checked = true)) {
      radioBtns[i].checked = false;
    }
  }
}

function formatResults() {
  jobRoleOne = finalResult[0].role;
  jobRoleTwo = finalResult[1].role;
  jobRoleThree = finalResult[2].role;
  jobRoleFour = finalResult[3].role;
  jobRoleFive = finalResult[4].role;
  jobRoleSix = finalResult[5].role;
  jobRoleSeven = finalResult[6].role;
}


async function getQuestions() {
    questionNumberText = (questionNumber + 1)
    quizForm = document.getElementById("quiz-form")
    quizHeading = document.getElementById("question")
    if (questionNumber == 8) {
        next.innerHTML = "Submit Quiz";
    } else if (questionNumber == 9) {
        next.style.display = "none";
        result.style.display = "inline-block";
        quizForm.style.display = "none";
        quizHeading.innerHTML = "Time to get your results!"
        questionNumberBox.style.display = "none"
        return;
    }
    fetch("assets/data/questions.json")
        .then(res => {
            return res.json();
        })
        .then(loadedQuestions => {

            questionRef.innerHTML = loadedQuestions[0].questionList[questionNumber].question
            answerOneLabel.innerHTML = loadedQuestions[0].questionList[questionNumber].answerOne
            answerTwoLabel.innerHTML = loadedQuestions[0].questionList[questionNumber].answerTwo
            answerThreeLabel.innerHTML = loadedQuestions[0].questionList[questionNumber].answerThree
            answerFourLabel.innerHTML = loadedQuestions[0].questionList[questionNumber].answerFour

            answerOneRef.value = loadedQuestions[0].questionList[questionNumber].answerOneTag
            answerTwoRef.value = loadedQuestions[0].questionList[questionNumber].answerTwoTag
            answerThreeRef.value = loadedQuestions[0].questionList[questionNumber].answerThreeTag
            answerFourRef.value = loadedQuestions[0].questionList[questionNumber].answerFourTag

            questionNumberBox.innerHTML = questionNumberText + "/9"


        })
}

async function fetchResult() {
    let response = await fetch('assets/data/results.json');
    let data = await response.text();
    let resultObj = await JSON.parse(data)
    let resultsModal = document.getElementById("results-modal");
    let jobHeading = document.getElementById("job-title");
    let jobContent = document.getElementById("job-content");
    let jobImage = document.getElementById("job-image");
    let jobLink = document.getElementById('job-link')
    let percentage = document.getElementById('percentage')
    let percentageText = findPercentage(finalResult[0].points)

    percentage.innerHTML = (percentageText + "%")
    resultsModal.style.display = "flex";
    jobHeading.innerHTML = resultObj.resultsList[jobRoleOne]['title']
    jobContent.innerHTML = resultObj.resultsList[jobRoleOne]['content']
    jobImage.src = resultObj.resultsList[jobRoleOne]['photo']
    jobLink.href = resultObj.resultsList[jobRoleOne]['link']
    jobLink.innerHTML = resultObj.resultsList[jobRoleOne]['title']
}

async function fetchAllResults() {
    // Gets the correct data from the json file
    let response = await fetch('assets/data/results.json');
    let data = await response.text();
    let resultObj = await JSON.parse(data)
    let resultDiv = document.getElementById("results-div")
    let resultsModal = document.getElementById("results-modal")
    let allResultsModal = document.getElementById("all-results-modal")

    // Searches through the json file in the order of the job scores
    for (let resultCard in finalResult) {
        nextJob = finalResult[resultCard].role
        let resultCardDiv = document.createElement("div")
        let heading = document.createElement("h5");
        let headingText = document.createTextNode(resultObj.resultsList[nextJob]['title'])
        let content = document.createElement("p");
        let contentText = document.createTextNode(resultObj.resultsList[nextJob]['content'])
        let image = document.createElement("img");
        let link = document.createElement("a")
        let linkText = document.createTextNode("Learn more about " + nextJob + "!")
        let percentage = document.createElement('p')
        let percentageText = findPercentage(finalResult[resultCard].points)
        link.classList = "white-link"

        percentage.className = "percentage"
        percentage.innerHTML = (percentageText + "%")
        resultCardDiv.className = "results-card"
        image.src = resultObj.resultsList[nextJob]['photo'];
        link.href = resultObj.resultsList[nextJob]['link'];


        heading.appendChild(headingText)
        content.appendChild(contentText)
        link.appendChild(linkText)

        resultCardDiv.append(heading, percentage, contentText, image, link);
        resultDiv.appendChild(resultCardDiv);
        resultsModal.style.display = "none"
        allResultsModal.style.display = "inline-block"
    }
}

document.addEventListener(
  "click",
  function (event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (
      event.target.matches(".button-close-modal") ||
      event.target.matches("#results-modal")
    ) {
      closeModal();
    }
  },
  false
);

function closeModal() {
    document.querySelector("#results-modal").style.display = "none";

}

function closeModalResults() {
    document.querySelector("#all-results-modal").style.display = "none";
}

function findPercentage(points) {
    let total = (100 / 9) * points;
    total = Math.round(total);
    return total;

}