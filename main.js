icons.addEventListener('click', () => {
    nav.classList.toggle("active")
});
console.log(icons);



function ajoutePanier(){
    
    // let affichePanier=document.write("Ajouter au pannier");
    let cpt=parseInt(document.querySelector("#CompteurPanier"));
    let nombre=parseInt(1);
    cpt.innerHTML+=nombre;
}