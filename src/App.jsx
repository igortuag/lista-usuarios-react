import { useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      first_name: "João",
      email: "joao@exemplo.com"
    },
    {
      id: 2,
      first_name: "Maria",
      email: "maria@exemplo.com"
    }
  ]);

  return (
    <main>
      <h1>Lista de usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.first_name}</strong> - {usuario.email}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
