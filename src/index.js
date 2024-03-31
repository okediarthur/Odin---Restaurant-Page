import { generateHomeContent } from "./home.js";
import { generateAboutContent } from "./about.js";
import { generateMenuContent } from "./menu.js";

document.addEventListener('DOMContentLoaded', () => {

    const contentDiv = document.getElementById('contentDiv');
    function switchContent(newContent) {
        contentDiv.innerHTML = '';

        switch(newContent){
            case 'home':
                contentDiv.appendChild(generateHomeContent());
                break;
            case 'menu':
                contentDiv.appendChild(generateMenuContent());
                break;
            case 'about':
                contentDiv.appendChild(generateAboutContent());
                break;
            default:
                break;
        }
    }

    generateHomeContent();

    document.getElementById('homeBtn').addEventListener('click', () =>{
        switchContent('home');
    });
    document.getElementById('menuBtn').addEventListener('click', () => {
        switchContent('menu');
    });
    document.getElementById('aboutBtn').addEventListener('click', () => {
        switchContent('about');
    });
});