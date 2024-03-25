export function generateHomeContent(){
    // const homeContent = document.createElement('p');
    // homeContent.textContent = "Welcome to Tony's Steakhouse.";
    // return homeContent;
    const div = document.createElement('div');
    div.classList.add('home-content');

    const title = document.createElement('h1');
    title.textContent = "Gastrol Pub";

    const paragraph = document.createElement('p');
    paragraph.textContent = "Indulge in a symphony of flavors at Gastrol Pub, where every dish is a culinary masterpiece and every sip a celebration. Experience the perfect fusion of gastronomic delights and pub charm, where hearty meals meet artisanal brews in an ambiance that's as lively as it is inviting. Join us for a dining experience that's not just a meal, but a journey through taste sensations!";

    const image1 = document.createElement('img');
    image1.src = './images/'
}