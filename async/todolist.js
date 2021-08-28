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
function studingProgramming() {
  setTimeout(function () {
    console.log(`Finally! I'm gonna start my classes.`);
  }, 1000);
}

// callback 7
function meditating(callback) {
  setTimeout(function () {
    console.log(`This time is reserved for my metitation`);
    callback();
  }, 1000);
}

// callback 6
function goingToCoffee(callback) {
  setTimeout(function () {
    console.log(`I got to go to my coffee, because its getting cold.`);
    callback();
  }, 1000);
}

// callback 5
function takingAnsietyCourse(theme, callback) {
  setTimeout(function () {
    console.log(`Taking my ${theme} course.`);
    callback();
  }, 1000);
}

// callback 1
function turnOffAlarm(callback, nombre) {
  setTimeout(function () {
    console.log(`Hello, I'm ${nombre} and I'm turning off my alarm.`);
    callback(nombre);
  }, 0.5);
}

// callback 4
function turningOnDevice(device, callback) {
  setTimeout(function () {
    console.log(`Turning on the ${device}...`);
    callback();
  }, 100);
}

// callback 2
function washingMyFace(callback) {
  setTimeout(function () {
    console.log("Now, I'm washing my face.");
    callback();
  }, 1000);
}

// callback 3
function preparingMyCoffee(drink, callback) {
  setTimeout(function () {
    console.log(`Then, I gonna prepare my ${drink}`);
    callback();
  }, 2000);
}

function myDailyRoutine(callback) {
  washingMyFace(function () {
    preparingMyCoffee("coffee", callback);
  });
  callback()
}

turnOffAlarm(function () {
  myDailyRoutine(function () {
  });
}, "Ivan");

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
