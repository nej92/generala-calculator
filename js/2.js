let nro2 = document.getElementById('2');
let juegobtns2 = document.getElementsByClassName('juego2');
let J2valorbtn2 = document.getElementById('J2valor2');
let J2valorbtn4 = document.getElementById('J2valor4');
let J2valorbtn6 = document.getElementById('J2valor6');
let valorbtn8 = document.getElementById('valor8');
let valorbtn10 = document.getElementById('valor10');
let valorbtn12 = document.getElementById('valor12');


function calc2 () {
    nro2.style="display: none;";
    let i;
    for(i=0; i < juegobtns2.length; i++){
        juegobtns2[i].style = "display: block;";
    }
}


J2valorbtn2.addEventListener('click', J2agregar2alDOM);
  
    function J2agregar2alDOM (){ 
        for(i=0; i < juegobtns2.length; i++){
            juegobtns2[i].style = "display: none";
        }
        let valorDefjuego2 = document.getElementById('valorDefjuego2');
        let valorjuego2 = document.createElement('h6');
        valorjuego2.innerHTML = 2;
        valorDefjuego2.appendChild(valorjuego2);
  
    }

J2valorbtn4.addEventListener('click', J2agregar4alDOM);
  
    function J2agregar4alDOM (){ 
        for(i=0; i < juegobtns2.length; i++){
            juegobtns2[i].style = "display: none";
        }
        let valorDefjuego2 = document.getElementById('valorDefjuego2');
        let valorjuego2 = document.createElement('h6');
        valorjuego2.innerHTML = 4;
        valorDefjuego2.appendChild(valorjuego2);
  
    }

J2valorbtn6.addEventListener('click', J2agregar6alDOM);
  
    function J2agregar6alDOM (){ 
        for(i=0; i < juegobtns2.length; i++){
            juegobtns2[i].style = "display: none";
        }
        let valorDefjuego2 = document.getElementById('valorDefjuego2');
        let valorjuego2 = document.createElement('h6');
        valorjuego2.innerHTML = 6;
        valorDefjuego2.appendChild(valorjuego2);
  
    }

valorbtn8.addEventListener('click', agregar8alDOM);
  
    function agregar8alDOM (){ 
        for(i=0; i < juegobtns2.length; i++){
            juegobtns2[i].style = "display: none";
        }
        let valorDefjuego2 = document.getElementById('valorDefjuego2');
        let valorjuego2 = document.createElement('h6');
        valorjuego2.innerHTML = 8;
        valorDefjuego2.appendChild(valorjuego2);
  
    }

valorbtn10.addEventListener('click', agregar10alDOM);
  
    function agregar10alDOM (){ 
        for(i=0; i < juegobtns2.length; i++){
            juegobtns2[i].style = "display: none";
        }
        let valorDefjuego2 = document.getElementById('valorDefjuego2');
        let valorjuego2 = document.createElement('h6');
        valorjuego2.innerHTML = 10;
        valorDefjuego2.appendChild(valorjuego2);
  
    }

valorbtn12.addEventListener('click', agregar12alDOM);
  
    function agregar12alDOM (){ 
        for(i=0; i < juegobtns2.length; i++){
            juegobtns2[i].style = "display: none";
        }
        let valorDefjuego2 = document.getElementById('valorDefjuego2');
        let valorjuego2 = document.createElement('h6');
        valorjuego2.innerHTML = 12;
        valorDefjuego2.appendChild(valorjuego2);
  
    }
