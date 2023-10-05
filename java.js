FUNCTION

// q no 1

var date = new Date();

console.log(date);

// q no 2

var firstName = prompt("Enter your first name :");

var lastName = prompt("Enter your last name :");

function fullname(firstName,lastName) {
    var greets = firstName + " " + lastName ;
    console.log("Welcome Sir/Ma,am",greets,);
}

fullname(firstName,lastName);

// q no 3

var num1 = Number(prompt("Enter First Number :"));

var num2 = Number(prompt("Enter Second Number :"));

function sum(num1,num2){
    console.log("The sum of two numbers is",num1 + num2);
}

sum(num1,num2);

// q no 4

var num1 = Number(+prompt("Enter First Number :"));

var operator = prompt("Enter The Operator :");

var num2 = Number(prompt("Enter Second Number :"));

function calculator(num1, operator, num2) {
  if (operator == "+") {
    console.log(
      "The addition of",
      num1.toString(),
      "and",
      num2.toString(),
      "is",
      (num1 + num2).toString()
    );
  } else if (operator == "-") {
    console.log(
      "The subtraction of",
      num1.toString(),
      "and",
      num2.toString(),
      "is",
      (num1 - num2).toString()
    );
  } else if (operator == "*") {
    console.log(
      "The multiplication of",
      num1.toString(),
      "and",
      num2.toString(),
      "is",
      (num1 * num2).toString()
    );
  } else if (operator == "/") {
    console.log(
      "The quotient of",
      num1.toString(),
      "and",
      num2.toString(),
      "is",
      (num1 / num2).toString()
    );
  } else if (operator == "%") {
    console.log(
      "The remainder of",
      num1.toString(),
      "and",
      num2.toString(),
      "is",
      (num1 % num2).toString()
    );
  } else {
    console.log("Your operation is invalid");
  }
}

calculator(num1, operator, num2);

// q no 5

var num = Number(prompt("Enter A Number :"));

function square(num){
    console.log("The square of",num.toString(),"is",(num * num).toString());
}

square(num);

// q no 6

var num = Number(prompt("Enter A Number :"));

var num1 = 1 ;

function factorial(num,num1) {
    for(var i = 1 ; i <= num; i++){
        num1 *= i;
    }
    console.log(num1);
}

factorial(num,num1);

// q no 7

var start = Number(prompt("Enter A Number :"));

var end = Number(prompt("Enter A Number :"));

function counting(start,end){
    for(var i = start; i <= end; i++){
        console.log(i);
    }
}

counting(start,end);

// q no 8

var base = Number(prompt("Enter the lenght of base :"));

var perpendicular = Number(prompt("Enter the lenght of perpendicular :"));

var underRoot , baseSquare , perpendicularSquare ;

function calculateHypotenuse(baseSquare,perpendicularSquare,base,perpendicular,underRoot){
    function square (base,perpendicular){
        baseSquare = base * base ;
        perpendicularSquare = perpendicular * perpendicular ;
    }
    square (base,perpendicular);
    underRoot = Math.sqrt(baseSquare + perpendicularSquare).toFixed(3);
    console.log(underRoot);
}

calculateHypotenuse(baseSquare,perpendicularSquare,base,perpendicular,underRoot);

// q no 9 ( i )

function area(a,b) {
    console.log("The area is",(a * b).toString());
}

area(4,12);

// q no 9 ( ii )

var width = Number(prompt("Enter The Width :"));

var height = Number(prompt("Enter The Height :"));

function area(width,height) {
    console.log("The area is",(width*height).toString());
}

area(width,height);

// q no 10

var word = prompt("Enter Any Word :");

var reversed = "";

function palindrome(word, reversed) {
  for (var i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);
    reversed += word[i];
  }

  if (reversed === word) {
    console.log("Yes, it is a palindrome .");
  } else {
    console.log("No, it is not a palindrome .");
  }
}

palindrome(word, reversed);

// q no 11

var string = "the quick brown fox";

function upperCase(string) {
    string = string.replace("t" , "T");
    string = string.replace("q" , "Q");
    string = string.replace("b" , "B");
    string = string.replace("f" , "F");
    console.log(string);

}

upperCase(string);

// q no 12

var string = "Web Development Tutorial";

var maxLength = 0 ;

var longestWord = "" ;

string = string.split(' ');

function biggestWord(string,maxLength,longestWord) {
    for( var i = 0 ; i < string.length ; i++){
        if(string[i].length > maxLength){
            maxLength = string[i].length;
            longestWord = string[i] ;
        }
    }
    console.log(longestWord);

}

biggestWord(string,maxLength,longestWord);

// q no 13 

var word = prompt("Enter any word :");
var character = prompt("Enter the character you want to find :");
var flag = false;

function findCharacter(word,character) {
    for(var i = 0 ; i < word.length ; i++ ){
        if (word[i] === character){
            flag = true ;
            console.log(character,"is present in",word,"at index",i);
        }
    }
    if(flag === false){
        console.log("It is not present in it");
    }  
}

findCharacter(word,character);

// q no 14

var radius = Number(prompt("Enter Radius :"));

function  calcCircumference(radius) {
    console.log("The circumference is",(2 * 3.14 * radius).toString());

}

function  calcArea(radius) {
    console.log("The area is",(3.14 * ( radius * radius )).toString());

}

calcCircumference(radius);
calcArea(radius);

