var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")  
var txtOutput = document.getElementById("txt-output")

function errorHandler(error) {
    alert("Error Occured", error)
    txtOutput.innerText = "Error Occured\n\n" + error
}

function clickHandler() {
    fetch("https://api.funtranslations.com/translate/minion.json?text="+txtInput.value)
    .then(response => response.json())
    .then(json => txtOutput.innerText = json.contents.translated)
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
