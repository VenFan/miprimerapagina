function showAlert() {
    alert ('¡Hola, esta es una alerta desde JavaScript');
}

// obtenemos el boton por su id
let boton = document.getElementById("miBoton");
// añadimos un oyente de eventos que "escuche" el evento click
boton.addEventListener("click", function(){
    alert("haz hecho click en este boton");
})  

// agregando un aoyente de eventos al formulario para manejar ele evento "submt"
const form = document.getElementById('myForm')


form.addEventListener('submit', function(event){
    // event.preventDefault() se utiliza para evitar que el formulario
    // se envie de manera prdeterminada, lo que permite realizar la validadcion
    // antes de enviar los datos
        event.preventDefault();
        validateForm();
    });
// sumar una funvion de validacion que verifique  los creiterios  deseados

// la función “validateEmail()” indica que el mail contenga un “@” y un “.” para ser válido.
function validateEmail(email) {
// define una expresión regular (regular expression en inglés) 
// que se utiliza para validar una dirección de correo electrónico.

// // La expresión regular comienza y termina con un "/" que indica 
// que es una expresión regular. En medio se encuentran una serie de caracteres que describen los patrones que deben cumplirse para que la dirección de correo electrónico sea válida.

// // La expresión regular se descompone de la siguiente manera:

// // ^ indica el inicio de la cadena de texto.
// // [^\s@]+ indica que debe haber uno o más caracteres que no sean 
// espacios en blanco ni el símbolo "@".
// // @ indica la presencia del símbolo "@", que es obligatorio en 
// una dirección de correo electrónico.
// // [^\s@]+ indica que debe haber uno o más caracteres que no sean
//  espacios en blanco ni el símbolo "@".
// // \. indica la presencia del símbolo ".".
// // [^\s@]{2,7} indica que debe haber de 2 a 7 caracteres que no sean 
// espacios en blanco ni el símbolo "@".
// // En resumen, esta expresión regular valida una dirección de correo 
// electrónico que contenga al menos un carácter antes y después del
//  símbolo "@", y que tenga entre 2 y 7 caracteres después del último 
//  punto en el dominio (por ejemplo, ".com", ".net", ".org", etc.).
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email);
}

function validateForm(){
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)){
        alert ('Por favor ingrese un correo electronico válido.');
    } else {
        alert('Correo eletrónico enviado correctamente.');
    }
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")})