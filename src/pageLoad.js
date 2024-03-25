
import { generateHomeContent } from './home.js';
import { generateMenuContent } from './menu.js';
import { generateAboutContent } from './about .js';



export function loadPage(){
    
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    //display home content
    contentDiv.appendChild(generateHomeContent());
    
    //function to switch content based on button clicks
    function switchContent(newContent){
        contentDiv.innerHTML = ''; //clears existing content

        //Append new content based on the selected tab
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
    //Event Listeners for button clicks
    document.getElementById('homeBtn').addEventListener('click', () => {
        switchContent('home');
    });
    document.getElementById('menuBtn').addEventListener('click', () => {
        switchContent('menu');
    });
    document.getElementById('aboutBtn').addEventListener('click', () => {
        switchContent('about');
    });
}