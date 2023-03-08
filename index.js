import data from './datos.js'

let divContenedor = document.getElementById('card-js')

let cards = "";
let personas = data.events;


for(let persona of personas) {
    const card = document.createElement("div");
    cards += `
              <div class="card">
                <img src="${persona.image}" class="card-img-top img-card h-40" alt="imagenes del evento">
                <div class="card-body">
                  <h2 class="card-title">${persona.name}</h2>
                  <p class="card-text">${persona.description}</p>
                  <p>Price: $${persona.price}</p>
                  <a href="#" class="btn btn-primary">+ Info</a>
                </div>
              </div> `

    divContenedor.appendChild(card);
}
divContenedor.innerHTML = cards;