import { useState } from 'react';
function Counter() {
    //Estado o Hook
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>
                Has hecho clic { count } en el boton.
            </p>
            <button onClick={()=> {
                setCount(count+1);
            }}>Picale</button>
            <button onClick={() => {
                setCount(0)
            }}>Reiniciar</button>
        </div>
    );
}

export default Counter;