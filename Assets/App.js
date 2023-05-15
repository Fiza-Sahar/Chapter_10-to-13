// Question_1:
var input = prompt("Enter a character:");
var charCode = input.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
  document.write(input + " is a number.");
} 
else if (charCode >= 65 && charCode <= 90) {
    document.write(input + " is an uppercase letter.");
}
else if (charCode >= 97 && charCode <= 122) {
    document.write(input + " is a lowercase letter.");
}
else {
    document.write("Invalid input.");
}

//Question_2:
var num_1 = +prompt("Enter the first integer:");
var num_2 = +prompt("Enter the second integer:");
if (num_1 === num_2) {
  document.write("Both integers are equal!");
} else {
  // Find the larger integer
  var largerInteger = (num_1 > num_2)  ? num_1 : num_2;
  document.write("The larger integer is: " + largerInteger);
}

//Question_3:
var number = +prompt("Enter a number:");

// Check if the number is positive, negative, or zero
if (number > 0) {
  document.write("The number is positive.");
} 
else if (number < 0) {
  document.write("The number is negative.");
} 
else {
  document.write("The number is zero.");
}

//Question_4:

var character = prompt("Enter a character:");
var lowercaseCharacter = character.toLowerCase();
// Check if the character is a vowel
var isVowel = false;
if (
  lowercaseCharacter === 'a' ||
  lowercaseCharacter === 'e' ||
  lowercaseCharacter === 'i' ||
  lowercaseCharacter === 'o' ||
  lowercaseCharacter === 'u'
) {
  isVowel = true;
}
document.write(isVowel);

//Question_5:

var correctPassword = "Fiza12345";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
  document.write("Please enter your password.");
} 
else if (userPassword === correctPassword) {
  document.write("Correct! The password you entered matches the original password.");
} 
else {
  document.write("Incorrect password.");
}

//Question_6:
var greeting;
var hour = 13;
if (hour < 18) {
document.write ("Good day");}

else{
    document.write("Good evening");
}

//Question_7:
function convertTime() {
    var input = +prompt("Enter the time in 24-hour clock format: ");
    var hour = Math.floor(input / 100);
    var min = input % 100;
    var timePeriod;
  
    if (hour >= 0 && hour <= 11) {
      timePeriod = "AM";
    } 
    else if (hour === 12) {
      timePeriod = "PM";
    } 
    else if (hour >= 13 && hour <= 23) {
      hour -= 12;
      timePeriod = "PM";
    } 
    else {
      document.write("Invalid time format");
      return; 
    }
    document.write("Converted time: " + hour + ":" + min.toString().padStart(2, "0") + " " + timePeriod);
  }
  convertTime();
  
