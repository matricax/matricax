"use strict";
document.querySelector(".yesBtn").addEventListener("click", function () {
  document.querySelector("h1").textContent = "OMG! You are the best!";
  document.querySelector("h1").style.color = "rgb(255 98 98)";
  document.querySelector(".firstImg").style.display = "none";
  document.querySelector(".secondImg").style.display = "block";
  document.querySelector("body").style.backgroundColor = "#f0a8ce";
  document.querySelector("body").style.transition = "4s";
  document.querySelector(".smalltxt").style.display = "block";
  document.querySelector(".thirdImg").style.display = "none";
  document.querySelector(".yesBtn").textContent = "Love you too";
  document.querySelector(".yesBtn").style.width = "170px";
  document.querySelector("main").style.marginTop = "8vh";
  document
    .querySelector("body")
    .animate(
      [
        { backgroundColor: "#f0a8ce" },
        { backgroundColor: "#db79ae" },
        { backgroundColor: "#f3c9df" },
      ],
      {
        delay: 4000,
        duration: 500,
        iterations: Infinity,
      }
    );
  document.querySelector(".movebtn").style.display = "none";
  document.querySelector(".hearts").style.display = "block";
  document.querySelector(".heartTwo").style.display = "block";
  document.querySelector(".yesBtn").addEventListener("click", function () {
    document.querySelector(".secondImg").style.display = "none";
    document.querySelector(".fifthImg").style.display = "block";
    document.querySelector("h1").textContent = "US?";
    document.querySelector(".smalltxt").style.display = "none";
    document.querySelector(".yesBtn").textContent = "Yes yes yes!!!";
    document.querySelector("main").style.marginTop = "15vh";
  });
});

const button = document.querySelector(".movebtn");
button.addEventListener("mouseover", function () {
  button.style.position = "absolute";
  button.style.transition = "0.5s";
  button.style.left = `${Math.ceil(Math.random() * 90)}%`;
  button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

let snd;

function sound() {
  const audioSrc = "./sounds/kitty_ringtone.mp3";

  // If audio is currently playing, pause it
  if (snd && !snd.paused) {
    snd.pause();
    snd.currentTime = 0;
  }

  // Create a new Audio element every time to ensure we can play the same audio again
  snd = new Audio(audioSrc);

  // Play the audio
  snd.play();
}

document.querySelector(".movebtn").addEventListener("click", function () {
  document.querySelector(".movebtn").style.display = "none";
  document.querySelector(".sorrybtn").style.display = "block";
  document.querySelector(".thirdImg").style.display = "block";
  document.querySelector(".firstImg").style.display = "none";
  document.querySelector("body").style.transition = "3s";
  document.querySelector("h1").textContent =
    "Why are you trying to press no? I will give you another chanсe if you apologize for hurting my feelings. Xoargagizdi";
  document.querySelector("h1").style.fontSize = "7vh";
  document.querySelector("h1").style.color = "white";
  document.querySelector(".fourthImg").style.display = "block";
  document.querySelector("body").style.backgroundColor = "navy";
  document.querySelector(".yesBtn").style.display = "none";
  document.querySelector(".sorrybtn").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#fbd7e5";
    document.querySelector(".yesBtn").style.display = "block";
    document.querySelector(".movebtn").style.display = "block";
    document.querySelector(".sorrybtn").style.display = "none";
    document.querySelector(".btndiv").style.display = "flex";
    document.querySelector(".btndiv").style.justifyContent = "center";
    document.querySelector(".thirdImg").style.display = "none";
    document.querySelector(".firstImg").style.display = "block";
    document.querySelector("body").style.transition = "0s";
    document.querySelector("h1").textContent =
      "Hello Mariam will you go out with me?";
    document.querySelector(".fourthImg").style.display = "none";
  });
});
