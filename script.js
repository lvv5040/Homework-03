var enter;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

// Possible characters
symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

lowC = character.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    enter = parseInt(prompt("Must be between 7 and 70 characters"));
    if (!enter) {
        alert("There needs to be a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Choose between 7 and 70 characters!"));

    } else {
        confirmNumber = confirm("Would you like any numbers in your password?");
        confirmSymbol = confirm("Would you like any symbols in your password?");
        confirmUppercase = confirm("Would you like uppercase letters in your password?");
        confirmLowercase = confirm("Would you like lowercase letters in your password?");
    };

    
    if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must pick at least one!");

    }
//all positve
    else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = symbol.concat(number, character, lowC);
    }
//3 positive    
    else if (confirmSymbol && confirmNumber && confirmUppercase) {
        choices = symbol.concat(number, lowC);
    }
    else if (confirmSymbol && confirmNumber && confirmLowercase) {
        choices = symbol.concat(number, character);
    }
    else if (confirmSymbol && confirmLowercase && confirmUppercase) {
        choices = symbol.concat(character, lowC);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(character, lowC);
    }
//2 positive 
    else if (confirmSymbol && confirmNumber) {
        choices = symbol.concat(number);

    } else if (confirmSymbol && confirmLowercase) {
        choices = symbol.concat(character);

    } else if (confirmSymbol && confirmUppercase) {
        choices = symbol.concat(lowC);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = character.concat(lowC);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(lowC);
    }
    //1 positive
    else if (confirmSymbol) {
        choices = symbol;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = character;
    }
    
    else if (confirmUppercase) {
        choices = space.concat(lowC);
    };

    
    var password = [];

    
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
//I had to ask the internet about this one    
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
//prints to box
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

