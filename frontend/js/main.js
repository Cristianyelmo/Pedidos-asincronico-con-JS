window.onload = async() => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch

  try {
    let response = await fetch('http://localhost:3031/api/movies')
    let peliculas = await response.json()


    let data = peliculas.data;

    data.forEach((movie) => {
     
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
      const a = document.createElement('a');
      a.setAttribute('href','formulario.html?id=' + movie.id);
      a.setAttribute('class','botonAgregar');
      a.textContent = 'Ver mas'
      card.appendChild(a)

const star = document.createElement('button')
star.setAttribute('class','botonstar')
star.setAttribute('id',movie.id)
star.innerHTML = '<i class="far fa-star"></i>'


card.appendChild(star)

/* console.log(star) */

/* console.log(localStorage.getItem.key.length) */

if(localStorage.getItem(`estrellita${movie.id}` )){
  const favoritos=document.querySelector('.favoritosancla')
      
            
            
       favoritos.textContent = `favoritos `
             
             
           }



star.addEventListener('click', ()=>{
let hola = star.id 


/* arrayestrella.push(++hola)       

console.log(arrayestrella)   */


 hola.innerHTML = '<i class="fa-solid fa-star"></i>'
 
localStorage.setItem(`estrellita${star.id}`,hola) 
 /*  console.log(star.id)  */
 window.location.href = "http://127.0.0.1:5500/frontend/home.html"

})



    });
  


 


  } catch (error) {
    
  }



  /** Codigo que debemos usar para mostrar los datos en el frontend
    let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    });
  */
};
