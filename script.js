var enter;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

// the characters that are possible
symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
number = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [],

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

lowC = character.map(toUpper);

var get = document.querySelector(#generate);

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
})

function generatePassword() {
    enter = parseInt(prompt("Must be between 7 and 70 characters"));
    if (!enter) {
        alert("This needs a value added");
    } else if (enter < 7 || enter > 70) {
        enter = parseInt(prompt("Chose between 7 and 70 characters"));
    } else {
        confirmNumber = confirm("Do you want any numbers in your password?");
        confirmSymbol = confirm("Do you want any symbols in your password?");
        confirmUppercase = confirm("Do you want any uppercase letters in your password?");
        confirmLowercase = confirm("Do you want any lowercase letters in your password?");
    };

    if (!confirmNumber && !confirmSymbol && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose at least one!");
    }

} 