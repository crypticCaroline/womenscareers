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
let jobRoleOne;
let jobRoleTwo;
let jobRoleThree;
let jobRoleFour;
let jobRoleFive;
let jobRoleSix;
let jobRoleSeven;
let answer;

let jobList = [
  {
    role: "cyber",
    points: 0,
    groups: ["web", "maths", "manager"],
  },
  {
    role: "ux",
    points: 0,
    groups: ["web", "design"],
  },
  {
    role: "manager",
    points: 0,
    groups: ["web", "maths", "computers"],
  },
  {
    role: "software",
    points: 0,
    groups: ["web", "maths", "computers"],
  },
  {
    role: "game",
    points: 0,
    groups: ["web", "maths", "computers"],
  },
  {
    role: "data",
    points: 0,
    groups: ["web", "maths", "computers"],
  },
  {
    role: "system",
    points: 0,
    groups: ["web", "maths", "computers"],
  },
];

function nextQuestion() {
  for (i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked == true) {
      answer = radioBtns[i].value;
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
  fetchAllResults();
}

function calculateResult() {
  finalResult = jobList.slice(0);
  finalResult.sort(function (a, b) {
    return b.points - a.points;
  });
}

function showResultsModal() {
  resultsModal = document.getElementById("results-modal");
  jobHeading = document.getElementById("job-title");
  jobContent = document.getElementById("job-content");
  jobImage = document.getElementById("job-image");

  // jobHeading.innerHTML = jobRoleOne.heading
  // jobContent.innerHTML = jobRoleOne
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

function checkQuestions() {
  if (questionNumber > 2) {
    next.style.display = "none";
    result.style.display = "inline-block";
    return;
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

window.addEventListener("DOMContentLoaded", getQuestions);

async function getQuestions() {
  if (questionNumber > 2) {
    checkQuestions();
    return;
  }
  fetch("assets/data/questions.json")
    .then((res) => {
      return res.json();
    })
    .then((loadedQuestions) => {
      questionRef.innerHTML =
        loadedQuestions[0].questionList[questionNumber].question;
      answerOneLabel.innerHTML =
        loadedQuestions[0].questionList[questionNumber].answerOne;
      answerTwoLabel.innerHTML =
        loadedQuestions[0].questionList[questionNumber].answerTwo;
      answerThreeLabel.innerHTML =
        loadedQuestions[0].questionList[questionNumber].answerThree;
      answerFourLabel.innerHTML =
        loadedQuestions[0].questionList[questionNumber].answerFour;

      answerOneRef.value =
        loadedQuestions[0].questionList[questionNumber].answerOneTag;
      answerTwoRef.value =
        loadedQuestions[0].questionList[questionNumber].answerTwoTag;
      answerThreeRef.value =
        loadedQuestions[0].questionList[questionNumber].answerThreeTag;
      answerFourRef.value =
        loadedQuestions[0].questionList[questionNumber].answerFourTag;
    });
}

async function fetchResult() {
  let response = await fetch("assets/data/results.json");
  let data = await response.text();
  let resultObj = await JSON.parse(data);
  let resultsModal = document.getElementById("results-modal");
  let jobHeading = document.getElementById("job-title");
  let jobContent = document.getElementById("job-content");
  let jobImage = document.getElementById("job-image");
  let jobLink = document.getElementById("job-link");
  resultsModal.style.display = "flex";
  jobHeading.innerHTML = resultObj.resultsList[jobRoleOne]["title"];
  jobContent.innerHTML = resultObj.resultsList[jobRoleOne]["content"];
  jobImage.src = resultObj.resultsList[jobRoleOne]["photo"];
  jobLink.href = resultObj.resultsList[jobRoleOne]["link"];
}

async function fetchAllResults() {
  let response = await fetch("assets/data/results.json");
  let data = await response.text();
  let resultObj = await JSON.parse(data);
  let resultDiv = document.getElementById("results-div");
  console.log(finalResult);

  for (let resultCard in finalResult) {
    console.log(resultCard);
    console.log(resultCard["title"]);
    let heading = document.createElement("h5");
    let headingText = document.createTextNode(
      resultObj.resultsList[finalResult[resultCard].role]["title"]
    );
    heading.appendChild(headingText);
    resultDiv.append(heading);
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
