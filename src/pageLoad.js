
export function loadPage(){
    
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    //Create content for each tab
    const homeContent = document.createElement('p');
    homeContent.textContent = "Welcome to Tony's Steakhouse.";

    const menuContent = document.createElement('p');
    menuContent.textContent = "Check out Our Delicious Menu Options";

    const aboutContent = document.createElement('p');
    aboutContent.textContent = 'Our Story';

    //Display home content
    contentDiv.appendChild(homeContent);

    //function to switch content based on button clicks
    function switchContent(newContent){
        contentDiv.innerHTML = ''; //clears existing content

        //Append new content based on the selected tab
        switch(newContent){
            case 'home':
                contentDiv.appendChild(homeContent);
                break;
            case 'menu':
                contentDiv.appendChild(menuContent);
                break;
            case 'about':
                contentDiv.appendChild(aboutContent);
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