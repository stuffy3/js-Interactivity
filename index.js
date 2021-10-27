let message = document.querySelector('#message')
let addBtn = document.querySelector('button')
let inputField = document.querySelector('input')

let addMovie = (event) => {
    event.preventDefault()
    
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
   
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    let list = document.querySelector('ul')
    list.appendChild(movie)

   inputField.value = ""
}
const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = 'Movie re-added!'
    } 
} 
// let evt = document.querySelector('form');
addBtn.addEventListener('click', addMovie)

