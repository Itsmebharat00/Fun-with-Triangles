const inputs = document.querySelectorAll(".angle");
const isTrianglebtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output-box");

function calculateSumOfangles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle (){
    const sumOfAngles = calculateSumOfangles (Number(inputs[0].value),Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles===180){
        outputEl.innerText = "This angles form a Triangle "
    } else {
        outputEl.innerText = "This angles doesn't form Triangle " 
    }
}

isTrianglebtn.addEventListener("click", isTriangle )



