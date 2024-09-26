//Eventos
//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

const enlaces = document.querySelectorAll("a"); // Seleccionamos con query todos los enlaces

enlaces.forEach(a => {      // Con la funcion ForEach, recorremos todo el Query y ponemos una variable (en este caso, a)
    a.addEventListener('click', function(event) {       // Le añadimos un evento a esa variable, que al hacer click (en este caso) se aplique una funcion
        event.preventDefault();     // preventDefault elimina el comportamiento "normal" 
    })
});

//Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

let imagenes = document.querySelectorAll("img");    // Seleccionamos con Query todas las etiquetas img

imagenes.forEach(imagen => {    // Recorremos todas las imágenes y les añadimos un evento click
    imagen.addEventListener('click', function() {    // Añade un evento que al hacer click realice una función
        imagen.src = "assets/magic-1.gif";   // Imagen.src para cambiar el source de la imagen
    });
});

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let fondos = document.querySelectorAll("article p");    // Variable que selecciona todos los parrafos del article

fondos.forEach(fondo => {
    fondo.addEventListener('click', function() {
        fondo.style.backgroundColor = "blue";
        fondo.style.color = "yellow";
    })
})

//2.3 Bloques de article o section: Cambia el color de fondo.

let articulos = document.querySelectorAll("article");

articulos.forEach(articulo => {
    articulo.addEventListener('click', function() {
        articulo.style.backgroundColor = "lightblue"
    })
})

//Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

let imagenesCursor = document.querySelectorAll("img");

imagenesCursor.forEach(imagenCursor => {
    const imagenOriginal = imagenCursor.src;
    imagenCursor.addEventListener('mouseover', function() {
        imagenCursor.src = "assets/abracadabra.gif";
    })
    imagenCursor.addEventListener('mouseout', function() {
        imagenCursor.src = imagenOriginal;
    })

})


//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let textosCursor = document.querySelectorAll('article p');

textosCursor.forEach(textoCursor => {
    textoCursor.addEventListener('mouseover', function() {
        textoCursor.style.backgroundColor = "red";
        textoCursor.style.color = "purple";
    })
    textoCursor.addEventListener('mouseout', function() {
        textoCursor.style.backgroundColor = "white";
        textoCursor.style.color = "black"
    })
} )


//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

let articulosCursor = document.querySelectorAll("article");

articulosCursor.forEach(articuloCursor => {
    articuloCursor.addEventListener('mouseover', function() {
        articuloCursor.style.backgroundColor = "green"
    })
    articuloCursor.addEventListener('mouseout', function() {
        articuloCursor.style.backgroundColor = "white";
    })
})

// Premium

// 4.Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

// 5.Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

// 6.Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.
