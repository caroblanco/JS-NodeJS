let numero = prompt("Ingrese un numero: ");

alert("ME QUIERO IR A DORMIR");

console.log(numero);


let semaforo = "rojo";

if(semaforo == "verde"){
    console.log("Avance");
}else{
    console.log("Frene");
}

for (let i =0; i<3; i++){
    console.log(i);
}

let opcion = prompt("Ingrese un numero")

while(opcion!=0){
    console.log(opcion)

    opcion = prompt("Ingrese un numero")
}

// se ejecuta AL MENOS una vez
do{
    opcion = prompt("Ingrese un numero")
    console.log(opcion)
}while(opcion!=0)


//funcion declarada
function saludar(){
    console.log("hola");
}

//funcion expresada
const saludar2 = function(){
    console.log("hola");
}


