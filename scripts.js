//Eventos
//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

//Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

let imagenes = document.querySelectorAll(".kg-image");

// Recorremos todas las imágenes y les añadimos un evento click
imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        imagen.src = "assets/magic-1.gif"; 
    });
});

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let fondos = document.querySelectorAll("article p");

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

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.