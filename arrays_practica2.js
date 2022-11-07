
/* EN UN ARRAY SE ALMACENAN 5 IMAGENES, DE TAL FORMA QUE SE PIDA AL USUARIO 
POR PANTALLA EL NÚMERO DE CELDA Y LE APAREZCA LA IMAGEN CORRESPONDIENTE */

var equipos =new Array(5);

equipos[0]= "<img src='Real.png'>";
equipos[1]= "<img src='Leganes.png'>";
equipos[2]= "<img src='Atletico.png'>";
equipos[3]= "<img src='Rayo.png'>";
equipos[4]= "<img src='Alcorcon.png'>";

let numero_celda = parseInt(window.prompt("Ingrese el número de celda a elegir"));

document.write("Has elegido la celda: " + numero_celda + "<br> su centenido es: </br>" + equipos[numero_celda]);

