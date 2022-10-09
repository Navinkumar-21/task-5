function TwoNumbers(a, b) {

    if (a > b) {
  
      console.log("a is Greater Then b");
  
    } else {
  
      console.log("b is Greater Then a");
  
    }
  
  }
  
  TwoNumbers(2, 3);

  function timeOfDay(hour) {
    if (hour < 12) {
        console.log("Good Morning");
    } else if (hour >= 12 && hour <= 16) {
        console.log("Good Afternoon");
    } else {
        console.log("Good Evening");
    }
}

timeOfDay(13);

  ///

  function checkevenAndadd(num){
    if(num% 2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
   
  }
  checkevenAndadd(10);
function largestOfThree(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

largestOfThree(1, 2, 3);



    let pet = "dog";

    switch (pet) {
      case "dog":
        pet = "I won a dog";
        break;
      case "cat":
        pet = "I won a cat";
        break;
      case "cow":
        pet = "I won a cow";
        break;
      case "horse":
        pet = "I won a horse";
        break;
      default:
        pet = "I own a pet";
    }
    
    console.log(pet);

//if else statement 
function petOwner(pet) {
    if (pet == "dog") {
        console.log("I won a dog");
    } else if (pet == "cat") {
        console.log("I own a cat");
    } else if (pet == "cow") {
        console.log("I own a cow");
    } else if (pet == "horse") {
        console.log("I own a horse");
    } else {
        console.log("I own a pet");
    }
}

petOwner("cow");


//getting current day 
let day;
let currentDay=new Date().getDay()
switch (currentDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day);


const animals = ['dog', 'horse', 'cat', 'cow'];


for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}


animals.forEach(animal => {
    console.log(animal);
});


animals.map(animal => console.log(animal));


let i = 0;
while (i < animals.length) {
    console.log(animals[i]);
    i++;
}


let j = 0;
do {
    console.log(animals[j]);
    j++;
}
while (j < animals.length);


for (const animal of animals) {
    console.log(animal);
}


const animalsAgain = ['dog', 'horse', 'cat', 'cow'];


for (const index in animalsAgain) {
    console.log(animalsAgain[index]);
}

// Difference between forEach and map loops in JavaScript.
// forEach loop is used to iterate over an array and perform some action on each element of the array.
// map loop is used to iterate over an array and perform some action on each element of the array and return a new array.


