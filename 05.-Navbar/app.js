// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener("click", ()=>{
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    //verifica si entre las clases de classlist se consigue la clase random devuelve un booleano
    
    // if(links.classList.contains("show-links"))
    //     links.classList.remove("show-links");
    // else
    //     links.classList.add("show-links");

    // lo anterior es exactamente lo mismo a:

    links.classList.toggle("show-links");
    
});