//Ejercicio1:escribe unprograma que genereun arrayde6 valores detipo numbery sean mostrados en pantallautilizando un buclefor clásico yun bucle for...of
let numbery =[number of numeros]{
    consoleg.log(number);
}
//Ejercicio2:escribe unprograma quealmacene losnombresdetres coloresenunarrayy losmuestre por pantallamediante un bucle for...of
let colores= ["amarillo", "verde", "azul"];
for (let color of colores){
    colores3.push(color);
     }


//Ejercicio3:escribeunprogramaconunarrayquealmacenelosnombresdetrescolores.Acontinuación,creaotroarrayvacíoeinsertaenéltodosloselementosdelprimerarraymedianteunfor...ofyelmétodopush.
let colores3=[];
for (let color of colores){
    colores3.push(color);
}

//Ejercicio4:escribeunprogramaquedadodosarrays,devuelvaelnúmerodeelementosquesoniguales.
let elementos1 = ["mar", "cielo", "rio", "sol"];
let elementos2 = ["oceano", "rio", "cielo"];
let repeticiones =[]
let contador=0;
for (let element1 of elementos1) {
    for (let element2 of elementos2) {
        if (element1==element2){
            contador++; //contador = contador +1
            repeticiones.push(element1);
        }
    }
    
}
console.log('el numero de repeticiones es ${contador}');
console.log("hay" + contador +"elementos iguales entre los dos array. estos son: " + repetidores );

//Ejercicio5:escribe unprogramaqueextraigaunaporcióndel arraya partirde una posicióninferior yuna superior ylo almacene enotro array.
let tierra = ["mar", "rio", "sol", "oceano", "nuves"];
let tierra2 = []