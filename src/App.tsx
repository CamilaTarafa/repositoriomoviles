import React, { useState } from 'react';
import './App.css';
function App() {
const [mensaje, setMensaje] = useState('Hola, Mundo!');
const [nuevoMensaje, setNuevoMensaje] = useState('');
const [contador, setContador] = useState(0);
const cambiarMensaje = () => {
setMensaje(nuevoMensaje);
setContador(contador + 1);
};

return (
<div className="App">
<header className="App-header">
<h1>{mensaje}</h1>
<input
type="text"
value={nuevoMensaje}
onChange={(e) => setNuevoMensaje(e.target.value)}
placeholder="Escribe un nuevo mensaje"
/>
<button onClick={cambiarMensaje}>Cambiar Mensaje</button>
<p>El mensaje ha sido cambiado {contador} veces</p>
</header>
</div>
);
}
export default App;