
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

window.addEventListener('DOMContentLoaded', allCareers)
console.log("script")

async function allCareers(){
        console.log('inside')
    // Gets the correct data from the json file
    let response = await fetch('assets/data/results.json');
    let data = await response.text();
    let resultObj = await JSON.parse(data)
    let careerDiv = document.getElementById("career-div")
    

    // Searches through the json file in the order of the job scores
    for (let careerCard in jobList) {
        nextJob = jobList[careerCard].role
        let careerCardDiv = document.createElement("div")
        let heading = document.createElement("h5");
        let headingText = document.createTextNode(resultObj.resultsList[nextJob]['title'])
        let content = document.createElement("p");
        content.innerHTML = resultObj.resultsList[nextJob]['content']; 
        let image = document.createElement("img");
        image.className = "results-img"
        let link = document.createElement("a")
        let linkText = document.createTextNode("Learn more about " + resultObj.resultsList[nextJob]['title'] + "!")

        careerCardDiv.className = "results-card"
        image.src = resultObj.resultsList[nextJob]['photo'];
        link.className = "btn btn-primary white-link"
        link.href = resultObj.resultsList[nextJob]['link'];


        heading.appendChild(headingText)
        link.appendChild(linkText)

        careerCardDiv.append(heading, content, image, link);
        careerDiv.appendChild(careerCardDiv);
    }
}

