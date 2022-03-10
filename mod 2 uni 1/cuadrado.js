window.onload= start;
function start(){
    var cuadradoUno=document.getElementById('cuadrado1');
    var cuadradoDos=document.getElementById('cuadrado2');
    var cuadradoTres=document.getElementById('cuadrado3');

    
 
  cuadradoUno.addEventListener('click', function(){
        cuadradoUno.style.backgroundColor="red";
    })

    cuadradoDos.addEventListener('click', function(){
        cuadradoDos.style.backgroundColor="pink";
    })

    cuadradoTres.addEventListener('click', function(){
        cuadradoTres.style.backgroundColor="green";
    }) 

    let texto=document.getElementById('texto');
    let contador= document.getElementById('contador');
    texto.addEventListener('keyup', function(){
        contador.innerText=texto.value.length;
    })
} 