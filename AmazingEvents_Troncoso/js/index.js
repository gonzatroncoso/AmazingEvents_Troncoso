import data from "./datos.js"
// import crearCards from './functions.js'



let divContenedorCheck = document.getElementById('ContenedorCheck')
const input = document.querySelector('input')

input.addEventListener("input", () =>{
   let arrFiltrado = filtroTexto(data.events, input.value)
   crearCards(arrFiltrado)
})

divContenedorCheck.addEventListener("change", ()=>{
    let arrayFiltrado = filtroCheckbox(data.events);
    crearCards(arrayFiltrado)
})




let divContenedorCard = document.getElementById('card-js')

let crearCards = (arr) => {
  let cards = ''

  arr.forEach(card => {
    cards += `
          <div class="card">
            <img src="${card.image}" class="card-img-top img-card h-40" alt="imagenes del evento">
              <div class="card-body">
              <h2 class="card-title">${card.name}</h2>
              <p class="card-text">${card.description}</p>
              <p>Price: $${card.price}</p>
              <a href="#" class="btn btn-primary">+ Info</a>
              </div>
          </div> `          
})

  divContenedorCard.innerHTML = cards;
}
crearCards(data.events)


function crearCheckbox(array) {
  let arrCategory =  array.map(e => e.category ) 
  let categorySet = new Set(arrCategory)
  let arrayChecks = Array.from(categorySet);
  let check =  '';
  arrayChecks.forEach(category => {
    check +=  ` <label class="label" value="${category}">
                    <input type="checkbox" id="${category}" for="${category}">
                    ${category}
                </label> `
  });

  divContenedorCheck.innerHTML = check
}
crearCheckbox(data.events);


function filtroTexto(array, texto) {
   let arrFiltrados = array.filter(e => e.name.toLowerCase().includes(texto.toLowerCase()))
   return arrFiltrados
};

// console.log(filtroTexto);


function filtroCheckbox(array) {
    let checkboxes = document.querySelectorAll("input[type='checbox']")

    let arrChecks = Array.from(checkboxes);
    let arrChecked = arrChecks.filter(check => check.checked);

    let arrayCheckedValues = arrChecked.map(checkChecked => checkChecked.value)
    let arrayFiltrado = array.filter(e => arrayCheckedValues.includes(e.category))

    console.log(arrayFiltrado);
}
filtroCheckbox(data.events);
