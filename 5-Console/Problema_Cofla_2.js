// Minutos diarios

let minutosTrabajo = 240; 
let minutosEstudio = 105;
let minutosPracticas = 105;
let minutosCasa = 34;
let descanso = 10;
let dormir = 480;

let minutosDia = 1440;
let totalDias = 14;

let contadorDias = 1;

let calendario = [];

const organizarDia = ()=>{
    for (i = 1 ; i <= totalDias ; i ++){
        console.groupCollapsed(`Dia ${i}`);
        for( minutos = 0; minutos < minutosDia ; minutos++){
            if (minutos == minutosTrabajo) {
                console.log(`Cofla trabajará ${minutosTrabajo/60} horas`)
            } else if (minutos == ( minutosTrabajo + descanso)) {
                console.log(`Cofla descansará ${descanso} minutos`);
            } else if (minutos == ( minutosTrabajo + descanso + minutosEstudio)){
                console.log(`Cofla estudiará ${minutosEstudio/60} horas`)
            } else if (minutos == ( minutosTrabajo + descanso + minutosEstudio +minutosPracticas)){
                console.log(`Cofla hará sus practicas durante ${minutosPracticas/60} horas`);
            } else if (minutos == ( minutosTrabajo + descanso + minutosEstudio +minutosPracticas + descanso)){
                console.log(`Cofla descansará ${descanso} minutos`);
            } else if (minutos == ( minutosTrabajo + descanso + minutosEstudio +minutosPracticas + descanso + minutosCasa)){
                console.log(`Cofla hará las tareas de la casa durante ${minutosCasa} minutos`);
            } else if (minutos == ( minutosTrabajo + descanso + minutosEstudio +minutosPracticas + descanso + minutosCasa + dormir)){
                console.log(`Cofla se irá a dormir durante ${dormir/60} horas`);
            }
        }
        console.groupEnd();
        contadorDias++
    }
}

organizarDia();
