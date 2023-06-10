
const $ = (id)=> document.getElementById(id)
const urlBase = 'http://localhost:3031/api/movies/'
window.onload = async() => {
let query = new URLSearchParams(location.search)
let id =query.has('id')&& query.get('id')

const botonAgregar = document.querySelector('.botonAgregar')
const botonCrear = document.querySelector('.botonCrear')
botonBorrar = document.querySelector('.botonBorrar')

try {
    let response = await fetch(urlBase + id)
    let pelicula = await response.json()
    let{title,rating,awards,length=duration,duration,release_date} = pelicula.data



   $('title').value = title
   $('rating').value = rating
   $('length').value = length,
   $('release_date').value =moment(release_date).format('YYYY-MM-DD')
   $('awards').value = awards
} catch (error) {
    
}

document.querySelector('.formulario').addEventListener('submit',async (e)=>{
    e.preventDefault();

botonAgregar.addEventListener('click',async ()=>{

    try {
        let response = await fetch(urlBase + 'update/' + id,{
            method:'PUT',
            body: JSON.stringify({
                title :$('title').value,
              
   rating:$('rating').value ,
   length:$('length').value ,
  release_date: $('release_date').value ,
   awards :$('awards').value 
            }),
            headers:{
              'Content-type': 'application/json'
            }
           
        });
        let result = await response.json()
        console.log(result)
    } catch (error) {
        
    }




})


botonCrear.addEventListener('click',async ()=>{

    try {
        let response = await fetch(urlBase + 'create' ,{
            method:'POST',
            body: JSON.stringify({
                title :$('title').value,
              
   rating:$('rating').value ,
   length:$('length').value ,
  release_date: $('release_date').value ,
   awards :$('awards').value 
            }),
            headers:{
              'Content-type': 'application/json'
            }
           
        });
        let result = await response.json()
        console.log(result)
    } catch (error) {
        
    }




})


botonBorrar.addEventListener('click',async ()=>{

    try {
        let response = await fetch(urlBase + 'delete/' + id,{
            method:'DELETE',
            
            headers:{
              'Content-type': 'application/json'
            }
           
        });
        let result = await response.json()
        window.location.href = "http://127.0.0.1:5500/frontend/home.html"
    } catch (error) {
        
    }




})
    


})
}