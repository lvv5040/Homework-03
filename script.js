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
});

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

    //all of these are positive
    else if (confirmNumber && confirmSymbol && confirmUppercase &&confirmLowercase) {
        choices = symbol.concat(number, character, lowC);
    }

    //three positive
    else if (confirmNumber && confirmSymbol && confirmUppercase) {
    choices = symbol.concat(number, lowC);
    }

    else if (confirmNumber && confirmSymbol && confirmLowercase) {
        choices = symbol.concat(number, character);
    }

    else if (confirmSymbol && confirmUppercase && confirmLowercase) {
        choices = symbol.concat(character, lowC);
    }

    else if (confirmNumber && confirmUppercase && confirmLowercase) {
        choices = symbol.concat(character, lowC)
    }

    //two positive
    else if (confirmNumber && confirmSymbol) {
        choices = symbol.concat(number);
    }

    else if (confirmSymbol && confirmLowercase) {
        choices = symbol.concat(character);
    }

    else if (confirmSymbol && confirmUppercase) {
        choices = symbol.concat(lowC);
    }

    else if (confirmNumber && confirmLowercase) {
        choices = symbol.concat(number);
    }

    else if (confirmUppercase && confirmLowercase) {
        choices = symbol.conact(lowC);
    }

    else if (confirmNumber && confirmUppercase) {
        choices = symbol.concat(lowC);
    }

    //one postive
    else if (confirmNumber) {
        choices = number;
    }


    else if (confirmSymbol) {
        choices = symbol;
    }

    else if (confirmUppercase) {
        choices = space.concat(lowC);
    }

    else if (confirmLowercase) {
        choices = character;
    }

    var password [];

    for (car i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

//print 

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}


  