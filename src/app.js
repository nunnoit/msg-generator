/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let person = ["I", "You", "he"];
  let act = ["sleep", "eat", "jump", "cry", "dance", "fly"];
  let what = ["dragons", "cake", "bed", "pokemons", "phone", "mouse"];
  let when = ["tomorrow", "yesterday", "today", "never"];

  let website = document.querySelector("#msg");
  let contenido =
    "<p>" +
    person[Math.floor(Math.random() * person.length)] +
    " " +
    act[Math.floor(Math.random() * act.length)] +
    "<p>" +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    "</p>";
  website.innerHTML = contenido;
  console.log(website);
};
