const persona = {
     nombre:'Alejandro',
     'lugarderesidencia':'Madrid'
    };
    // Alejandro 
    console.log(persona.nombre);
    // Alejandro
     console.log(persona['nombre']);
    //error
    console.log(persona.lugar de residencia );
    //enestecasosonobligatoriosloscorchetes
     persona['lugar de residencia']='Sevilla';
     //Sevillac
     console.log(persona['lugar de residencia']);
     constpropiedad='nombre';
     //undefinedporquebuscalavariablepropiedaddentrodelobjetopersona 
     console.log(persona.propiedad);
     //Alejandro
      console.log(persona[propiedad]);
//En el espacio de memoria de un objeto no se almacena el propio objeto (sus propiedades),sinounadireccióndememoria(referencia)queapuntaalobjeto. Debidoa estarazón,no hayunaforma simple de comparar un objeto con otro.
constcoche1={marca:'Ford',modelo:'Focus'}; 
constcoche2={marca:'Ford',modelo:'Focus'};
//devuelvefalseporquenocompartenreferencia 
console.log(coche1 == coche2);
//devuelvefalseporquenocompartenreferencia 
console.log(coche1 === coche2);
//devuelve trueporqueelvalor eselmismoysondetipostring 
console.log(coche1.modelo=== coche2.modelo);
constcoche3=coche1;
//devuelvetrueporquecompartenreferencia 
console.log(coche1 === coche3);Elborradodepropiedadesenobjeto
fresas:20};
deletex.fresas;
constx={
    peras:3,
    fresas:20,
    //nosedebeutilizaraquílasintaxisdelafuncióndeflechaporquethisenesecaso
     apuntaríaal objeto global
     contar: function () { 
         console.log(this.peras+this.fresas);
        }
    };
     //seguardaenunarrayelnombredetodaslaspropiedadesdelobjetox 
     constnombresPropiedades =Object.keys(x);
     // ["peras", "fresas", "contar"] 
     console.log(nombresPropiedades);
     // true 
     console.log(nombresPropiedades.includes('fresas'));
     //creacióndeunobjetovacío constalejandro={};//agregandounmétodonuevo alejandro.saludar =()=>{console.log('Hola');};Paraiterar laspropiedadesdeunobjetoseutilizaelbuclefor...in constx = {peras:3,fresas:20};for(letkeyinx){//perasyfresas(endistintaslíneas) console.log(key);//stringystring(endistintaslíneas) console.log(typeof(key));
     //3y20(endistintaslíneas) console.log(x[key]);//undefinedyundefinedporquebuscalapropiedadx.key (2veces) ynoexiste console.log(x.key);}