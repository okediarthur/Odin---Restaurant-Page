
export function generateAboutContent(){
    
    const div = document.createElement('div');
    div.classList.add('about-content');

    const title = document.createElement('h1');
    title.textContent = "About Us";

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = "At Gastrol Pub, we're not just a restaurant - we're a culinary destination. We pride ourselves on offering a unique dining experience that combines the best of both worlds: exceptional food and a vibrant pub atmosphere.";

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = "Our passion for gastronomy drives us to create dishes that are not only delicious but also thoughtfully crafted, using the finest ingredients sourced locally whenever possible. From our signature gourmet burgers to our tantalizing small plates and hearty mains, each bite tells a story of flavor and innovation.";

    const paragraph3 = document.createElement('p');
    paragraph3.textContent = "Whether you're joining us for a quick bite or settling in for a leisurely meal, we invite you to experience the Gastrol Pub difference - where great food, great drinks, and great company come together in perfect harmony.";


    div.appendChild(title);
    div.appendChild(paragraph1);
    div.appendChild(paragraph2);
    div.appendChild(paragraph3);

    const mainContent = document.getElementById('content');
    mainContent.appendChild(div);
}