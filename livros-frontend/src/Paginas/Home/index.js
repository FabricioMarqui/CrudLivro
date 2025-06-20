import { useEffect, useState } from 'react';
// src/Paginas/Home/index.js
import api from '../../services/api';


export default function Home() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    api.get('/livros')
      .then(res => setLivros(res.data))
      .catch(err => console.error("Erro ao buscar livros:", err));
  }, []);

  return (
    <div>
      <h2>Lista de Livros</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Título</th><th>Autor</th></tr>
        </thead>
        <tbody>
          {livros.map(livro => (
            <tr key={livro.id}>
              <td>{livro.id}</td>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
