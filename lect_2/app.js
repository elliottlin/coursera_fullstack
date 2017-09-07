var student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    // The 'fullName' is too tight to get elem.
    // AngularJS would help doing this better.
    document.getElementById('fullName').addEventListener("keyup", keyUp);
}

function keyUp(event) {
    calculatorNumericOutput();
}

// This is a bad example that contains too many stuff 
// unrelated to "calulatorNumericOutput"
function calculatorNumericOutput() {
    // here should be simpler
    student.name = document.getElementById('fullName').value;

    var totalNameValue = 0;
    for (var i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);
    }

    // insert result into page
    var output = "Total Numeric value of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}