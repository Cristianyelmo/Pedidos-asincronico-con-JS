window.onload = async() => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
try {
  // Aqui debemos agregar nuestro fetch
  let response = await fetch('http://localhost:3031/api/movies')
  let peliculas = await response.json()


 
    let data = peliculas.data;

    data.forEach((movie) => {


  
      if(movie.id == localStorage.getItem( `estrellita${movie.id}`   )){
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


      const a = document.createElement('button');
      
      a.setAttribute('class','botonAgregar');
      a.textContent = 'Borrar Favoritos'
      card.appendChild(a)


      a.addEventListener('click',()=>{
        localStorage.removeItem(`estrellita${movie.id}`)
        window.location.href = "http://127.0.0.1:5500/frontend/favoritas.html"
      })
      
     
}





    });
  
} catch (error) {
  
}
  
  
};
