let nombre= 'nicolas';
let apellido= ' quevedo';

let nombreCompleto= nombre  + apellido;

console.log(nombreCompleto)

let metros= prompt('cuantos metros tiene que hacer?')

if(metros<=1000){
    alert('anda a pie')
}else if(metros<=10000){
    alert('anda en bci')
}else if(metros<=30000){
    alert('anda micro')
}else if(metros<=100000){
    alert('anda en auto')
}else{
    alert('anda en avion')
}


let numeros=[56,4,6,12,55,1100] ;

let numeroMayor= 0 ;

for (let i=0; i< numeros.length; i++){
   if(numeros[i]>numeroMayor){
       numeroMayor=numeros[i]
   } 
  console.log('el numero mayor de'+ numeros + 'es'+ numeroMayor)
}