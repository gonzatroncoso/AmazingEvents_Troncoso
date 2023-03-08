import data from "./datos.js"


function pastEvents() {
  let arrayPast = [];

for (let i = 0; i< data.events.length; i++) {
    const date = data.events[i].date;

    if (date < data.currentDate ) {
      console.log(data.events[i]);
      arrayPast.push(data.events[i]);
    }
  }
  return arrayPast;
}


let eventoPast = document.getElementById('card-js-past')
let pastEvent = [];
let fragment = document.createDocumentFragment();
pastEvent = pastEvents();

for(let persona of pastEvent) {
    const card = document.createElement('div');
    card.innerHTML = `
              <div class="card">
                <img src="${persona.image}" class="card-img-top img-card h-100" alt="imagenes del evento">
                <div class="card-body">
                  <h2 class="card-title">${persona.name}</h2>
                  <p class="card-text">${persona.description}</p>
                  <p>Price: $${persona.price}</p>
                  <a href="#" class="btn btn-primary">+ Info</a>
                </div>
              </div> `

    fragment.appendChild(card);
}
eventoPast.appendChild(fragment);


