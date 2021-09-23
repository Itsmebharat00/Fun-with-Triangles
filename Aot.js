const areaInputs = document.querySelectorAll(".triangle-area");
const submitAreaBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output-btn");

function calculateSumOfBH (a, b, c){
    const sumOfBaseAndHeight = a * b * c;
    return sumOfBaseAndHeight;
}

function calculateAreaOfTriangle (){
    const sumOfBaseAndHeight = calculateSumOfBH(Number(areaInputs[0].value),Number(areaInputs[1].value), Number(areaInputs[2].value));
    console.log(sumOfBaseAndHeight);
}


submitAreaBtn.addEventListener("click", calculateSumOfBH);