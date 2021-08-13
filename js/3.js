let nro1 = document.getElementById('1');
let juegobtns1 = document.getElementsByClassName('juego1');
let valorbtn1 = document.getElementById('valor1');
let valorbtn2 = document.getElementById('valor2');
let valorbtn3 = document.getElementById('valor3');
let valorbtn4 = document.getElementById('valor4');
let valorbtn5 = document.getElementById('valor5');
let valorbtn6 = document.getElementById('valor6');


function calc1 () {
    nro1.style="display: none;";
    let i;
    for(i=0; i < juegobtns1.length; i++){
        juegobtns1[i].style = "display: block;";
    }
}

valorbtn1.addEventListener('click', agregar1alDOM);
  
    function agregar1alDOM (){ 
        for(i=0; i < juegobtns1.length; i++){
            juegobtns1[i].style = "display: none";
        }
        let valorDefjuego1 = document.getElementById('valorDefjuego1');
        let valorjuego1 = document.createElement('h6');
        valorjuego1.innerHTML = 1;
        valorDefjuego1.appendChild(valorjuego1);
  
    }

valorbtn2.addEventListener('click', agregar2alDOM);
  
    function agregar2alDOM (){ 
        for(i=0; i < juegobtns1.length; i++){
            juegobtns1[i].style = "display: none";
        }
        let valorDefjuego1 = document.getElementById('valorDefjuego1');
        let valorjuego1 = document.createElement('h6');
        valorjuego1.innerHTML = 2;
        valorDefjuego1.appendChild(valorjuego1);
  
    }

valorbtn3.addEventListener('click', agregar3alDOM);
  
    function agregar3alDOM (){ 
        for(i=0; i < juegobtns1.length; i++){
            juegobtns1[i].style = "display: none";
        }
        let valorDefjuego1 = document.getElementById('valorDefjuego1');
        let valorjuego1 = document.createElement('h6');
        valorjuego1.innerHTML = 3;
        valorDefjuego1.appendChild(valorjuego1);
  
    }

valorbtn4.addEventListener('click', agregar4alDOM);
  
    function agregar4alDOM (){ 
        for(i=0; i < juegobtns1.length; i++){
            juegobtns1[i].style = "display: none";
        }
        let valorDefjuego1 = document.getElementById('valorDefjuego1');
        let valorjuego1 = document.createElement('h6');
        valorjuego1.innerHTML = 4;
        valorDefjuego1.appendChild(valorjuego1);
  
    }

valorbtn5.addEventListener('click', agregar5alDOM);
  
    function agregar5alDOM (){ 
        for(i=0; i < juegobtns1.length; i++){
            juegobtns1[i].style = "display: none";
        }
        let valorDefjuego1 = document.getElementById('valorDefjuego1');
        let valorjuego1 = document.createElement('h6');
        valorjuego1.innerHTML = 5;
        valorDefjuego1.appendChild(valorjuego1);
  
    }

valorbtn6.addEventListener('click', agregar6alDOM);
  
    function agregar6alDOM (){ 
        for(i=0; i < juegobtns1.length; i++){
            juegobtns1[i].style = "display: none";
        }
        let valorDefjuego1 = document.getElementById('valorDefjuego1');
        let valorjuego1 = document.createElement('h6');
        valorjuego1.innerHTML = 6;
        valorDefjuego1.appendChild(valorjuego1);
  
    }
