let message = document.querySelector('#message')
let addBtn = document.querySelector('button')
let inputField = document.querySelector('input')
let revealMessage = () =>  {
    setTimeout( () => {
        message.classList.add('hide')
}, 1000);
        message.classList.remove('hide')
}

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
    message.textContent = `${event.target.parentNode.firstChild.textContent} has been deleted.`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} has been watched.`
    } else {
        message.textContent = `${event.target.textContent} re-added!`
    } 
    revealMessage()
} 
// let evt = document.querySelector('form');
addBtn.addEventListener('click', addMovie)

