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

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nome = form.nome.value;
    const email = form.email.value;

    if (nome && email) {
      const novoUsuario = {
        id: usuarios.length + 1,
        first_name: nome,
        email: email
      };
      setUsuarios([...usuarios, novoUsuario]);
      form.reset();
    }
  }

  return (
    <main>
      <h1>Lista de usuários</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Nome" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <button type="submit">Adicionar Usuário</button>
      </form>

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
