var select = document.getElementById("idioma");

select.addEventListener("click", () => {
  var selected = select.options[select.selectedIndex].text;
  if (selected === "Ingles") {
    location.href = "http://localhost/Blog_restaurante/index_ingles.html";

    //activa esta opción solo para github page
    //location.href="https://cbedoya66.github.io/ProyectoWebUnir/index_ingles.html";
  } else {
    if (selected === "Español") {
      location.href = "http://localhost/Blog_restaurante/index.html";

      //activa esta opción solo para github page
      //location.href="https://cbedoya66.github.io/ProyectoWebUnir/index.html";
    }
  }
});

//PALIDROMO

const input = document.querySelector("#frase");
const consultar = document.querySelector("#consultar");

let frase2 = "";

if (input) {
  input.addEventListener("input", (event) => {
    frase2 = event.target.value;
  });
}

consultar.addEventListener("click", () => {
  let frase = frase2.split("").reverse().join("");
  if (frase2 === frase) {
    alert("La palabra es Palindroma");
    input.value = "";
    input.focus();
  } else {
    alert("La palabra no es Palindroma");
    input.value = "";
    input.focus();
  }
});

//Numero mayor

const input1 = document.getElementById("num1");
const input2 = document.querySelector("#num2");

let array = [];

input1.addEventListener("input", (event) => {
  num1 = event.target.value;
});

input2.addEventListener("input", (event) => {
  num2 = event.target.value;
});

mayor.addEventListener("click", (e) => {
  array.push(num1);
  array.push(num2);
  let mayor = Math.max(...array);
  alert(`El numero mayor es ${mayor}`);
  input1.value = "";
  input2.value = "";
  input1.focus();
});

//Vocales

const inputVocales = document.querySelector("#vocales");
const cons_vocales = document.querySelector("#cons_vocales");

let palabra2 = "";
let array2 = [];

if (inputVocales) {
  inputVocales.addEventListener("input", (event) => {
    palabra2 = event.target.value;
  });
  console.log(palabra2);
}

cons_vocales.addEventListener("click", () => {
  let letrasUnicas = [];
  for (const letra of palabra2) {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      array2.push(letra);
    }
  }
  array2.forEach((elemento) => {
    if (!letrasUnicas.includes(elemento)) {
      letrasUnicas.push(elemento);
    }
  });
  inputVocales.value = "";
  inputVocales.focus();
  alert(`Las vocales de la frase son [ ${letrasUnicas.sort()} ]`);
});

//Url de la pagina

let URLactual = window.location.href;
const inputUrl = document.getElementById("url");
inputUrl.value = URLactual;
const UrlUsuario = inputUrl.value;

//mostrar contenido
const botonUrl = document.getElementById("urlBoton");
const contenidoUrl = document.getElementById("content");
const estado = document.getElementById("estado");
const codigo = document.getElementById("codigo");


botonUrl.addEventListener("click", cargarHTML, true);

async function cargarHTML(e) {
  

  //creamos una variable para obtener la informacion de una URL
  var ajax = new XMLHttpRequest();

  await setTimeout(function () {
    estado.value = "Sin Iniciar";
    codigo.value = "0";
  }, 1000);

  //parametros metodo get o post, url a traer, boolenao (true->asyncrona---false->sincrona)
  ajax.open("GET", "https://es.javascript.info/", true);
  ajax.setRequestHeader("Access-Control-Allow-Origin", "*");

  await setTimeout(function () {
    estado.value ="Conexión Establecida";
    codigo.value = "1";
  }, 2000);

  //await setTimeout(function () {
  ajax.onreadystatechange = async function () {
    await setTimeout(function () {
      estado.value ="Respuesta recibida";
      codigo.value = "2";
    }, 3000);

    await setTimeout(function () {
      estado.value ="Procesando respuesta";
      codigo.value = "3";
    }, 4000);

    await setTimeout(function () {
      if (ajax.readyState === 4) {
        if (ajax.status === 200) {
          //si nuestro estado es igual a 200(ok), insertamos html a nuestro contenedor de la respuesta de ajax
          //contenidoUrl.innerHTML = ajax.responseText;
          document.querySelector("#content").innerHTML = ajax.responseText;
          document.querySelector("#cabeceras").innerHTML = ajax.getAllResponseHeaders('Content-Type')
        } else {
          estado.value ="Petición errada";
        }
        estado.value ="Respuesta finalizada";
        codigo.value = "4";      }
    }, 5000);
  };

  //enviamos la petición
  ajax.send();
  // }, 7000);
}
