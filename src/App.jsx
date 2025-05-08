import { useEffect, useState } from "react";

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

  const carregarUsuariosDeApi = async () => {
    const response = await fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      }
    });

    const json = await response.json();

    if (json && json.data) {
      setUsuarios(json.data)
    }
  };

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
  };

  useEffect(() => {
    carregarUsuariosDeApi();
  }, []);

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
