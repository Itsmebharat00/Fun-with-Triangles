const inputs = document.querySelectorAll(".triangle-area");
const submitAreaBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output-btn");

function calculateOfFormula(base, height) {
    const multiplyOfBh = base * height;
    return multiplyOfBh;
}

function calculateAreaOfTriangle() {
    const baseAndHeight = calculateOfFormula(inputs[0].value, inputs[1].value);
    const area = baseAndHeight * 0.5
    console.log(area);
    outputEl.innerText = "The area of triangle is " + area;
    
}




submitAreaBtn.addEventListener("click", calculateAreaOfTriangle)