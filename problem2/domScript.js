theOutput = document.getElementById("theOutput");
console.log(theOutput)
theButton = document.getElementById("theButton");

function outputText(text) {
  theOutput.innerHTML += "<p>" + text + "</p>"
}

theButton.addEventListener("click", (e) => {
  outputText(theOutput);
});
