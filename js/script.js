 // Aquí tu código
 const botonAgregar = document.getElementById('agregar');
 const listado = document.getElementById('lista');
 //const element = prompt('Agrega un elemento a la lista');
 
 
 
 botonAgregar.addEventListener('click', function() {
     const item = prompt('Agrega un elemento a la lista');
     const newElement = document.createElement('li');
     listado.appendChild(newElement);
     const elementText = document.createTextNode(item);
     newElement.appendChild(elementText);
 });
 