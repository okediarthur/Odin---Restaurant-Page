
export function generateMenuContent(){
    const menuContentDiv = document.createElement('div');
    menuContentDiv.classList.add('menu-content');

    //div for title
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('menu-title');

    const title = document.createElement('h1');
    title.textContent = "Our Menu";
    titleDiv.appendChild(title);

    //Append title to main menu div
    menuContentDiv.appendChild(title);

    //Div for menu items
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');

    //menu items
    //item 1
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menuitem');
    menuItemsDiv.appendChild(menuItem1);

    const item1pic = new Image();
    item1pic.src = "./images/burger.png";
    menuItem1.appendChild(item1pic);

    const item1Name = document.createElement('h2');
    item1Name.textContent = "Classic Burger";
    menuItem1.appendChild(item1Name);

    const item1desc = document.createElement('p');
    item1desc.textContent = "Sink your teeth into bliss with our mouthwatering burgers at Gastrol Pub. Crafted to perfection, each burger is a symphony of flavors, featuring juicy, hand-formed patties made from the finest cuts of beef, nestled between soft, toasted buns.";
    menuItem1.appendChild(item1desc);

    const item1price = document.createElement('p');
    item1price.classList.add('price');
    item1price.textContent = "Price: $12.99";
    menuItem1.appendChild(item1price);

    //item 2
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menuitem');
    menuItemsDiv.appendChild(menuItem2);

    const item2pic = new Image();
    item2pic.src = "./images/pizza.png";
    menuItem2.appendChild(item2pic);

    const item2Name = document.createElement('h2');
    item2Name.textContent = "Meaty Pizza";
    menuItem2.appendChild(item2Name);

    const item2desc = document.createElement('p');
    item2desc.textContent = "Step into pizza paradise at Gastrol Pub, where every slice tells a story of tradition, quality, and flavor. Our handcrafted pizzas start with the freshest dough, stretched to perfection and topped with a symphony of premium ingredients.";
    menuItem2.appendChild(item2desc);

    const item2price = document.createElement('p');
    item2price.classList.add('price');
    item2price.textContent = "Price: $23";
    menuItem2.appendChild(item2price);

    //item 3
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menuitem');
    menuItemsDiv.appendChild(menuItem3);

    const item3pic = new Image();
    item3pic.src = "./images/grilled-meat.png";
    menuItem3.appendChild(item3pic);

    const item3Name = document.createElement('h2');
    item3Name.textContent = "Grilled Steak";
    menuItem3.appendChild(item3Name);

    const item3desc = document.createElement('p');
    item3desc.textContent = "At Gastrol Pub, our grilled meats are a testament to the art of barbecue. Prepared with care and expertise, our selection of prime cuts, marinated to perfection and kissed by the flames, delivers a sensory experience like no other.";
    menuItem3.appendChild(item3desc);

    const item3price = document.createElement('p');
    item3price.classList.add('price');
    item3price.textContent = "Price: $36.8";
    menuItem3.appendChild(item3price);

    menuContentDiv.appendChild(menuItemsDiv);

    return menuContentDiv;
}