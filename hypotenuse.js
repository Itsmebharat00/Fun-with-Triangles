const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output-box");

function calculateSumOfSquare(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


function calculateHypotenuse (){
    const sumOfSquares = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value) )
    // console.log(sumOfSquare);
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}



hypotenuseBtn.addEventListener("click", calculateHypotenuse)