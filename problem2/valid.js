theInput = document.getElementById("theInput");
console.log(theInput);
theButton = document.getElementById("theButton");

function valid() {
    number = document.getElementById("theInput").value;
    let sum = 0;
    let digits = [];
    for (i = 0; i < number.length; i++){
        digits.push(parseInt(number.charAt(i)))
    }
    console.log(digits)
    for (i = digits.length - 2; i >= 0; i -= 2){
        digits[i] = digits[i] * 2
        if (String(digits[i]).length > 1){
            console.log(String(digits[i]))
            digits.push(parseInt(String(digits[i]).charAt(0)));
            //console.log(digits[i].charAt(0))
            digits.push(parseInt(String(digits[i]).charAt(1)));
            digits.splice(i, 1);
        }
    }
    for (i = 0; i < digits.length; i ++){
        sum += digits[i];
    }
    if (sum % 10 === 0) {

        if (number.length === 16){
            if (number.charAt(0) === "4"){
                console.log("valid Visa")
            }
        }
        else if (number.length === 15) {
            if (number.charAt(0) == "3" && number.charAt(1) == "4" || number.charAt(1) == "7"){
                console.log("valid AMEX")
            }
        }
        }
    }

    theInput.innerHTML += "<p>" + digits + "</p>"
//

//        }

};
theButton.addEventListener("click", (e)=> {
    valid();
    
});
