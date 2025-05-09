import { useEffect, useState } from "react";
import { ListaUsuarios } from "./ListaUsuario";

function App() {
  const [autenticado, setAutenticado] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const json = await response.json();

    if (json?.token) {
      setAutenticado(true);
    } else {
      alert("Email ou senha inválidos");
    }
  } 

  return (
    <main>
      {!autenticado && (
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      )}
      {autenticado && <ListaUsuarios />}
    </main>
  );
}

export default App;
