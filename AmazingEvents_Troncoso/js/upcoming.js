import data from "./datos.js"

function upcomingEvents() {
  let arrayUpcoming = [];

for (let i = 0; i< data.events.length; i++) {
    const date = data.events[i].date;

    if (date > data.currentDate ) {
      console.log(data.events[i]);
      arrayUpcoming.push(data.events[i]);
    }
  }
  return arrayUpcoming;
}


let eventoUpcoming = document.getElementById('card-js-up')
let upEvent = [];
let fragment = document.createDocumentFragment();
upEvent = upcomingEvents();

for(let persona of upEvent) {
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
eventoUpcoming.appendChild(fragment);

