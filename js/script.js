

var select = document.getElementById('idioma');


    
   select.addEventListener('click', ()=> {
    var selected = select.options[select.selectedIndex].text;
    if (selected === 'Ingles') {
   
        location.href="https://cbedoya66.github.io/ProyectoWebUnir/index_ingles.html";
        
    }else{
        if (selected==="Español") {
            location.href="https://cbedoya66.github.io/ProyectoWebUnir/index.html";
        }
    } 
       
    }) 
