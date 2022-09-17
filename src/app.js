/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let array = [
    "I'm too busy today, how about tomorrow?",
    "Yesterday I feel bad, today I'm staying home.",
    "Please call me later",
    "I'm AFK today."
  ];
  let website = document.querySelector("#msg");
  console.log(array);
  let contenido;

  for (let i = 0; i < array.length; i++) {
    contenido = array[i];
  }
  let random = Math.floor(Math.random() * array.length);
  console.log(random, array[random]);

  website.innerHTML = array[random];
};
