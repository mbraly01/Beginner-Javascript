theOutput = document.getElementById("theOutput");
theButton = document.getElementById("theButton");


let fizzbuzz = 1;

function fizzBuzz() {
    if (fizzbuzz % 3 === 0){
        if (fizzbuzz % 5 === 0) {
            theOutput.innerHTML += "<p>fizzbuzz</p>"
        }
        else {
            theOutput.innerHTML += "<p>fizz</p>"
        }
    }
    else if (fizzbuzz % 5 === 0){
        theOutput.innerHTML += "<p>buzz</p>"
    }
    else {
        theOutput.innerHTML +="<p>"+fizzbuzz+"</p>"
    }
    fizzbuzz ++;
};
theButton.addEventListener("click", (e) => {
    fizzBuzz();
});