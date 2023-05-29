// Ejercicio de JavaScript -01

//Nos pide que imprimamos un mensaje en pantalla, el mensaje es Hello JavaScript
// El resultado -> El resultado tiene que dar "hello JavaScript"

// Hay que vincular el archivo js con html
// Hay que vincular el archivo css con html
// Crear el componente donde irá nuestro texto
// Desde JS hay que recuperar el componente 
// Ahora hay que poner el h1 con el texto deseado


const title = 'Hello JavaScript'
function getElement () {
    let sectionEx1 = document .getElementById('ex1')
    console.log(divEx1)
}
function render (text) {
    let section = getElement() ;
    section.innerHTML = '<h1>${text}<h1>'
}