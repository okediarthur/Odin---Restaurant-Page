
export function generateHomeContent(){
    
    const div = document.createElement('div');
    div.classList.add('home-content');

    const title = document.createElement('h1');
    title.textContent = "Gastrol Pub";
    div.appendChild(title);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Indulge in a symphony of flavors at Gastrol Pub, where every dish is a culinary masterpiece and every sip a celebration. Experience the perfect fusion of gastronomic delights and pub charm, where hearty meals meet artisanal brews in an ambiance that's as lively as it is inviting. Join us for a dining experience that's not just a meal, but a journey through taste sensations!";
    div.appendChild(paragraph);

    const title2 = document.createElement('h3');
    title2.textContent = "Opening Hours";
    div.appendChild(title2);

    const ul = document.createElement('ul');
    const items = ["Wednesday - Friday: Midday - 10:00pm", "Saturday - Sunday: 11:00am - 12:00pm"];
    items.forEach(itemText => {
        const li = document.createElement('li');
        li.textContent = itemText;
        ul.appendChild(li);
    });
    div.appendChild(ul);

    // return div;
    // const image1 = document.createElement('img');
    // image1.src = './images/'

    //Append paragraph and images to the div
    // div.appendChild(title);
    // div.appendChild(paragraph);
    // // div.appendChild(image1);
    // div.appendChild(title2);
    // div.appendChild(ul);

    // //Append the div content to the main container
    const mainContent = document.getElementById('contentDiv');
    mainContent.appendChild(div);
}

// export function generateHomeContent(){
//     const homeContent = document.createElement('p');
//     homeContent.textContent = "Welcome to the Gastrol Pub";
//     return homeContent;
// }