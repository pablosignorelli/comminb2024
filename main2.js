const arraydeObjetos =[
    { NumeroDeSerie:1,
      Microprocesador: "Procesador Intel Core i3 12100 4.3GHz Socket 1700 Alder Lake",
      Mother: "Mother Asrock H610M-HDV/M2+ DDR5 S1700",
      Fuente: "Fuente Gigabyte 550W 80 Plus Bronze P550B",
      Memoria:"Memoria Corsair DDR5 16GB 5200MHz Vengeance CL40 Intel XMP 3.0",
      DiscoDuro:"Disco Solido SSD GeiL 256GB Zenith Z3 520MB/s5",
      Monitor:"Monitor Samsung 24 T350H FHD IPS",
      Perifericos:"Teclado-Mouse" 

    },   
    
];



function IngresodeDatos(){

  let NumeroDeSerie=Number(prompt("Ingrese el numero de serie a la lista."))
  let Microprocesador=prompt("Ingrese el tipo de Microprocesador.")
  let Mother=prompt("Ingrese el tipo de Mother.")
  let Fuente=prompt("Ingrese el tipo de Fuente.")
  let Memoria=prompt("Ingrese el tipo de Memoria.")
  let DiscoDuro=prompt("Ingrese el tipo de Disco Duro.")
  let Monitor=prompt("Ingrese el tipo de Monitor.")
  let Perifericos=prompt("Ingrese el tipo de Perifericos.")
 
  arraydeObjetos.push(
    {NumeroDeSerie,
     Microprocesador,
     Mother,
     Fuente,
     Memoria,
     DiscoDuro,
     Monitor,
     Perifericos,  })

}


function MostrarEnConsola(){

  for (let i=0; i<arraydeObjetos.length; i++) {
    console.log("=======================================");
    console.log("Numero de serie de lista: "+ arraydeObjetos[i].NumeroDeSerie);
    console.log("Modelo de Microprocesador: "+ arraydeObjetos[i].Microprocesador);
    console.log("Modelo de Mother: "+ arraydeObjetos[i].Mother);
    console.log("Fuente: "+ arraydeObjetos[i].Fuente);
    console.log("Modelo de Memoria: "+ arraydeObjetos[i].Memoria);
    console.log("Modelo de Disco Duro: "+ arraydeObjetos[i].DiscoDuro);
    console.log("Monitor "+ arraydeObjetos[i].Monitor);
    console.log("Mouse y Teclado: "+ arraydeObjetos[i].Perifericos);
                }
              }


function Arraypart (){

  const Arraytempo=[]
  for(let i=0; i<arraydeObjetos.length;i++){
   const transitorio= arraydeObjetos[i]
   Arraytempo.push(transitorio.NumeroDeSerie)
   }
   return Arraytempo;


}             


function core(){

let confirmacion=false

confirmacion= confirm("¿Desea ingresara a la lista de inventario?")

while(confirmacion){

bandera=Number(prompt("Seleccione una de las siguientes opciones:/N -1 para ingreso./N -2 para eliminar./N -3 para mostrar inventario./N -4 para modificar inventario."))

switch(bandera){

    case 1:

          let paingreso= confirm("¿Desea ingresar una Computadora?")

          if(paingreso){
         
               IngresodeDatos()

               let paingreso= confirm("¿Desea volver a ingresar otra Computadora?")
              
               MostrarEnConsola()

            }

            break;

    case 2:   

          const Arraytempo =Arraypart ()

           
          let NumeroDeSerie = Number(prompt("Ingrese el numero de serie a eliminar"));

          let index= Arraytempo.indexOf(NumeroDeSerie);

          if (index===-1){
            alert("La Computadora no se encuentra en el inventario.")
          }else{
            arraydeObjetos.splice(index,1)
          }

          console.log(index)

         MostrarEnConsola()
          
            break;

        case 3: 
                let inventario="\n"
             for (let i=0; i<arraydeObjetos.length; i++) { 
              
             
           
               const inventari = arraydeObjetos[i];

            inventario = inventario + "\n"+" -El numero de serie es: "+inventari.NumeroDeSerie + " -El Microprocesador es: " + inventari.Microprocesador + " -La Mother es: " + inventari.Mother +" -El tipo de Fuente: " + inventari.Fuente + " -La Memoria: " + inventari.Memoria +" -Disco Duro: " + inventari.DiscoDuro + " -Monitor: " + inventari.Monitor+ "-Los Perifericos"+ inventari.Perifericos+"\n"
              }
              
              alert ("Las Computadoras son las siguientes: " + inventario+"\n")
              break;

        case 4:     

        const Arraytempo1=Arraypart ()
         
        let NumeroDeSerie1 = Number(prompt("Ingrese la Computadora a modificar"));

        let index1= Arraytempo1.indexOf(NumeroDeSerie1);

        if (index1===-1){

          alert("La Computadora no se encuentra en el inventario.")

        }else{
         
          
          arraydeObjetos.splice(index1,1)

          IngresodeDatos()

        }

        console.log(index1)

         MostrarEnConsola()
          break;

           
}

confirmacion= confirm("¿Desea continuar ejecutando la lista de inventario?")   
}

}

core()