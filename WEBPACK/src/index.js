import GenerateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";
import generateJoke from "./generateJoke";

const laughImg = document.getElementById("laughing");
laughImg.src = laughing;

const jokeBtn=document.getElementById('jokeBtn')
jokeBtn.addEventListener('click',generateJoke)

generateJoke()
