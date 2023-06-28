import { useState } from 'react';
function CountDown() {
    //Declaras el tiempo target y el tiempo restante.
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds,setElapsedSeconds] = useState(0);

    function parseForm(ev){
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }

    //Validas si el target sale del null
    if(targetSeconds !== null) {
        return(
            <p>Soy un contador hacia atras {targetSeconds}</p>
        );
    }

    return(
        <>
            <p>¿Cuantos segundos quieres contar?</p>
            {/* The heading text is large */}
            <form action="#" onSubmit={ev => parseForm(ev)}>
                <input type="number" name="Seconds" />
            </form>
            <button>Inicializar</button>
        </>
    );
}

//Exportamos el componente para utilizarlo en App.jsx
export default CountDown;