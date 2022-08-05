let button = document.querySelector('.btn') 

button.onmouseover = (e) => {
    alert('HOLA ESTO ES UNA PRUEBA')
}  

let boxColor = document.getElementById('box')

boxColor.addEventListener('mouseover', () => {
    boxColor.classList.replace('black', 'red')
}) 

boxColor.addEventListener('mouseout', () => {
    boxColor.classList.replace('red', 'black')
}) 

    





