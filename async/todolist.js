/* Excercise to improve the Asynchronism.
First: I'm gonna make my morning process in async way,
because if I do all my stuff in sync way probably the things are gonna bad.

So.. this is my daily routine:

1. Turn off my alarm
2. Wash my face
3. Prepare my coffee
4. Turn on my device
5. Take my ansiety course class
6. I go to my coffee
7. Start my daily meditation
8. Starting my daily course about programming 

I've written every function in different places to evidence
the asynchronism with callbacks.
*/

// call back 8
function studingProgramming(e) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Finally! I'm gonna start my classes.`);
    }, 1000);
    resolve(e);
  });
}

// callback 7
function meditating(e) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`This time is reserved for my metitation`);
      resolve(e);
    }, 1000);
  });
}

// callback 6
function goingToCoffee(e) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`I got to go to my coffee, because its getting cold.`);
      resolve(e);
    }, 1000);
  });
}

// callback 5
function takingAnsietyCourse(theme) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Taking my ${theme} course.`);
      resolve(theme);
    }, 1000);
  });
}

// callback 1
function turnOffAlarm(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Hello, I'm ${nombre} and I'm turning off my alarm.`);
      resolve(nombre);
    }, 0.5);
  });
}

// callback 4
function turningOnDevice(device) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Turning on the ${device}...`);
      resolve(device);
    }, 100);
  });
}

// callback 2
function washingMyFace() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Now, I'm washing my face.");
      resolve();
    }, 1000);
  });
}

// callback 3
function preparingMyCoffee(drink) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Then, I gonna prepare my ${drink}`);
      resolve(drink);
    }, 2000);
  });
}

// This is the way to make async functions using promises

turnOffAlarm("Ivan")
  .then(washingMyFace)
  .then(preparingMyCoffee('coffee'))
  .then(turningOnDevice('Laptop'))
  .then(takingAnsietyCourse("Ansiety"))
  .then(studingProgramming)
  .catch((error) => {
    console.error("It was an error.");
    console.error(error);
  });

// This is the way that I've used to get an async functions using callbacks.

// turnOffAlarm(function () {
//   washingMyFace(function () {
//     preparingMyCoffee("coffee", function () {
//       turningOnDevice("computer", function () {
//         takingAnsietyCourse("Emotional Intellingence", function () {
//           goingToCoffee(function () {
//             meditating(function () {
//               studingProgramming();
//             });
//           });
//         });
//       });
//     });
//   });
// }, "Ivan");
