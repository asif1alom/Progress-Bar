let button = document.querySelectorAll(".btn");

let circle = document.querySelectorAll(".circle");
let bar = document.querySelector(".bar");



let step = 1;


const updateSteps = (e) => {
    step = e.target.id == "next" ? ++step : --step;
    console.log(step);


    circle.forEach((circle, index) => {
        circle.classList[`${index < step ? "add" : "remove"}`]("active");
    });
    bar.style.width = `${((step-1)/(circle.length-1))*100}%`;
    
    
}





button.forEach((button) => {
    button.addEventListener("click", updateSteps)

});