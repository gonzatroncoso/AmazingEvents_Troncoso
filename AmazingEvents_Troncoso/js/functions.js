import data from './datos.js'
// import crearCards from './index.js'


// const queryString = location.search;
// const params = new URLSearchParams(queryString);
// const beerId = params.get("id")

// const beer = beer.find (beer => beer.id == beerId)

// let ContenedorCardDetail = document.querySelector('#cardDetails')

const queryString = location.search;
const params = new URLSearchParams(queryString);
const beerId = params.get('id')

const beer = data.events.find(beer => beer.id == beerId);


let ContenedorCardDetail = document.querySelector('#cardDetails')
ContenedorCardDetail.innerHTML = `
         <div class="card">
         <img src="${beer.image}" class="card-img-top img-card h-40" alt="imagenes del evento">
         <div class="card-body">
         <h2 class="card-title">${beer.name}</h2>
         <p class="card-text">${beer.description}</p>
         <p>Price: $${beer.price}</p>
        <a href="./details.html?id=${beer.id}" class="btn btn-primary">+ Info</a>
        </div>
      </div> `   



// const divContenedorCard = document.getElementById('createCard')

// let beers = ""
// function crearCards(events) {
//   if (events.length == 0) {
//     divContenedorCard.innerHTML = `<h2>No se escontraron coincidencias!</h2>`
//     // el return es para q me corte la funcion
//         return
//       }
//       let cards = '';
      
//       events.forEach(card => {
//         cards += `
//         <div class="card">
//         <img src="${card.image}" class="card-img-top img-card h-40" alt="imagenes del evento">
//         <div class="card-body">
//         <h2 class="card-title">${card.name}</h2>
//         <p class="card-text">${card.description}</p>
//         <p>Price: $${card.price}</p>
//         <a href="./details.html?id=${card.id}" class="btn btn-primary">+ Info</a>
//         </div>
//         </div> `          
//       })

//       divContenedorCard.innerHTML = cards;
//     }
    // crearCards(data.events)



    

// const queryString = location.search;
// const params = new URLSearchParams(queryString);
// const beerId = params.get('id')

// const beer = data.events.find(beer => beer.id == beerId);
    
  // console.log(   crearCards(beer, ContenedorCardDetail));













// let ContenedorCardDetail = document.getElementById('cardDetails')


// let cards = "";
// // let personas = data.events;

// function crearDetail(personas) {
//     const card = document.createElement("div");
//     // cards += `
//     //           <div class="card">
//     //             <img src="${card.image}" class="card-img-top img-card h-40" alt="imagenes del evento">
//     //             <div class="card-body">
//     //               <h2 class="card-title">${card.name}</h2>
//     //               <p class="card-text">${personas.description}</p>
//     //               <p>Price: $${personas.price}</p>
//     //               <a href="#" class="btn btn-primary">+ Info</a>
//     //             </div>
//     //           </div> `

//               personas.forEach(card => {
//                 cards += `
//                       <div class="card">
//                         <img src="${card.image}" class="card-img-top img-card h-40" alt="imagenes del evento">
//                           <div class="card-body">
//                           <h2 class="card-title">${card.name}</h2>
//                           <p class="card-text">${card.description}</p>
//                           <p>Price: $${card.price}</p>
//                           <a href="#" class="btn btn-primary">+ Info</a>
//                           </div>
//                       </div> `  

//               // ContenedorCardDetail.appendChild(card);
//               ContenedorCardDetail.innerHTML = cards;
//               }
// )}
// crearDetail(data.events)