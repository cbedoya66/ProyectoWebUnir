

var select = document.getElementById('idioma');


    
   select.addEventListener('click', ()=> {
    var selected = select.options[select.selectedIndex].text;
    if (selected === 'Ingles') {
   
        location.href="http://localhost/Blog_restaurante/index_ingles.html";
        
    }else{
        if (selected==="Español") {
            location.href="http://localhost/Blog_restaurante/index.html";
        }
    } 
       
    }) 
