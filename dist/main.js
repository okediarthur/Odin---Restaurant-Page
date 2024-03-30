(()=>{"use strict";function e(e,t,n,a){const o=document.createElement("div");o.classList.add("menu-item");const i=document.createElement("h2");i.textContent=t,o.appendChild(i);const r=document.createElement("p");if(r.textContent=n,o.appendChild(r),e){const n=document.createElement("img");n.src=e,n.alt=t,o.appendChild(n)}const d=document.createElement("p");return d.textContent=a,o.appendChild(d),o}document.addEventListener("DOMContentLoaded",(()=>{function t(t){switch(contentDiv.innerHTML="",t){case"home":contentDiv.appendChild(function(){const e=document.createElement("div");e.classList.add("home-content");const t=document.createElement("h1");t.textContent="Gastrol Pub",e.appendChild(t);const n=document.createElement("p");n.textContent="Indulge in a symphony of flavors at Gastrol Pub, where every dish is a culinary masterpiece and every sip a celebration. Experience the perfect fusion of gastronomic delights and pub charm, where hearty meals meet artisanal brews in an ambiance that's as lively as it is inviting. Join us for a dining experience that's not just a meal, but a journey through taste sensations!",e.appendChild(n);const a=document.createElement("h3");a.textContent="Opening Hours",e.appendChild(a);const o=document.createElement("ul");["Wednesday - Friday: Midday - 10:00pm","Saturday - Sunday: 11:00am - 12:00pm"].forEach((e=>{const t=document.createElement("li");t.textContent=e,o.appendChild(t)})),e.appendChild(o),document.getElementById("contentDiv").appendChild(e)}());break;case"menu":contentDiv.appendChild(function(){const t=document.createElement("div");t.classList.add("menu-content");const n=document.createElement("h1");n.textContent="Our Menu",t.appendChild(n);const a=e("Classic Burger","Sink your teeth into bliss with our mouthwatering burgers at Gastrol Pub. Crafted to perfection, each burger is a symphony of flavors, featuring juicy, hand-formed patties made from the finest cuts of beef, nestled between soft, toasted buns.","$12.99","./images/burger.png"),o=e("Meaty Pizza","Step into pizza paradise at Gastrol Pub, where every slice tells a story of tradition, quality, and flavor. Our handcrafted pizzas start with the freshest dough, stretched to perfection and topped with a symphony of premium ingredients.","$23.99","./images/pizza.png"),i=e("Grilled Steak","At Gastrol Pub, our grilled meats are a testament to the art of barbecue. Prepared with care and expertise, our selection of prime cuts, marinated to perfection and kissed by the flames, delivers a sensory experience like no other.","$43.79","./images/grilled-meat.png");return t.appendChild(a),t.appendChild(o),t.appendChild(i),t}());break;case"about":contentDiv.appendChild(function(){const e=document.createElement("div");e.classList.add("about-content");const t=document.createElement("h1");t.textContent="About Us",e.appendChild(t);const n=document.createElement("p");n.textContent="At Gastrol Pub, we're not just a restaurant - we're a culinary destination. We pride ourselves on offering a unique dining experience that combines the best of both worlds: exceptional food and a vibrant pub atmosphere.",e.appendChild(n);const a=document.createElement("p");a.textContent="Our passion for gastronomy drives us to create dishes that are not only delicious but also thoughtfully crafted, using the finest ingredients sourced locally whenever possible. From our signature gourmet burgers to our tantalizing small plates and hearty mains, each bite tells a story of flavor and innovation.",e.appendChild(a);const o=document.createElement("p");o.textContent="Whether you're joining us for a quick bite or settling in for a leisurely meal, we invite you to experience the Gastrol Pub difference - where great food, great drinks, and great company come together in perfect harmony.",e.appendChild(o),document.getElementById("contentDiv").appendChild(e)}())}}document.getElementById("homeBtn").addEventListener("click",(()=>{t("home")})),document.getElementById("menuBtn").addEventListener("click",(()=>{t("menu")})),document.getElementById("aboutBtn").addEventListener("click",(()=>{t("about")}))}))})();