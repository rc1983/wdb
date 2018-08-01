window.setTimeout(function () {
    // put all of your JS code from the lecture here

    var age = prompt("Enter your age (In years).");
    // To account for leap years, we average the number of days
    var numberOfDays = age * 365.25;
    alert("You have been alive for " + numberOfDays + " days.");
    console.log("You have been alive for " + numberOfDays + " days.");
}, 500);

