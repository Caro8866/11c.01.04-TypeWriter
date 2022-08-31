"use strict";

window.addEventListener("DOMContentLoaded", init);

let typeText;
let textString;
let audiokey1;
let audiokey2;
let audioSpace;
let audioLast;
let audioReturn;
let iterator;
function init() {
  typeText = document.querySelector(".typewritten").textContent;
  textString = document.createElement("h1");
  textString.classList.add(".typewritten");
  document.querySelector("body").appendChild(textString);
  document.querySelector("h1").textContent = "";

  audiokey1 = document.querySelector("#typekey1");
  audiokey2 = document.querySelector("#typekey2");
  audioSpace = document.querySelector("#typespace");
  audioLast = document.querySelector("#typelast");
  audioReturn = document.querySelector("#typeReturn");

  displayText(); // Calling next function
}

// Seperate text into character array
function displayText() {
  textString.textContent += typeText[iterator];

  iterator++; // iterating through each character and showing it
  if (iterator < typeText.length) {
    setTimeout(() => {
      displayText();
      if (typeText[iterator] === " ") {
        playSpaceSound();
      } else {
        playKeySound();
      }
    }, 200); // Display a character every 200 ms
  } else {
    setTimeout(() => {
      textString.textContent = "";
      iterator = 0;
      displayText();
    }, 1000); // waits 1 second then restarts whole process
  }
}

function playSpaceSound() {
  audioSpace.currentTime = 0;
  audioSpace.play();
  audioSpace.volume = 1;
}

function playKeySound() {
  let ranNum = Math.floor(Math.random) * 2;
  if (ranNum === 0) {
    audiokey1.currentTime = 0;
    audiokey1.play();
    audiokey1.volume = 1;
  } else if (ranNum === 1) {
    audiokey2.currentTime = 0;
    audiokey2.play();
    audiokey2.volume = 1;
  }
}
