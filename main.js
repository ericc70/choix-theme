var themeLink = document.querySelector('#theme-link');


window.onload =()=>{ //on attend que lae Dom soit entierment chargé

    //on select la balise qui contient le link
    //let themeLink = document.querySelector('#theme-link');

    //on verifie si un theme est chargé
    if(localStorage.theme != null){
        //si un theme est present on le charge
        themeLink.href =`styles-${localStorage.theme}.css`
    }
    else{
//si aucun theme
themeLink.href='styles-light.css';
//on stocke le theme
localStorage.theme="light"

    }
}


document.querySelector("#theme").addEventListener("click", function(){
    //if theme clair in localstaorage
    if(localStorage.theme == "light"){

        localStorage.theme ="dark";
        //on prepare le text du spa,
        var themeText="light";
    }else{


        localStorage.theme="light";
        var themeText ="dark"

    }
//on met a jopur le span
this.innerText = `Thème ${themeText}`;
//on met a jour le link css
themeLink.href=`styles-${localStorage.theme}.css`


})