import React, { useState, useEffect } from 'react';
import api from './services/api';

function App() {
  const [livros, setLivros] = useState([]);
  const [editandoId, setEditandoId] = useState(null); // <- ID em edição
  const [form, setForm] = useState({
    titulo: '', autor: '', editora: '',
    ano_publicacao: '', numero_paginas: '',
    genero: '', data_cadastro: ''
  });

  useEffect(() => {
    carregarLivros();
  }, []);

  const carregarLivros = () => {
    api.get('/livros').then(res => setLivros(res.data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editandoId) {
      // Atualizar livro existente
      api.put(`/livros/${editandoId}`, form).then(() => {
        carregarLivros();
        setEditandoId(null);
        resetarForm();
      });
    } else {
      // Criar novo livro
      api.post('/livros', form).then(res => {
        setLivros([...livros, res.data]);
        resetarForm();
      });
    }
  };

  const resetarForm = () => {
    setForm({
      titulo: '', autor: '', editora: '',
      ano_publicacao: '', numero_paginas: '',
      genero: '', data_cadastro: ''
    });
  };

  const deletar = (id) => {
    if (window.confirm('Deseja realmente excluir este livro?')) {
      api.delete(`/livros/${id}`).then(() => {
        setLivros(livros.filter(l => l.id !== id));
      });
    }
  };

 const editar = (livro) => {
  setForm({
    titulo: livro.titulo,
    autor: livro.autor,
    editora: livro.editora,
    ano_publicacao: livro.ano_publicacao,
    numero_paginas: livro.numero_paginas,
    genero: livro.genero,
    data_cadastro: livro.data_cadastro?.substring(0, 10) || ''
  });
  setEditandoId(livro.id);
};



  return (
    <div style={{ padding: 20 }}>
      <h2>{editandoId ? 'Editar Livro' : 'Cadastrar Livro'}</h2>

      <form onSubmit={handleSubmit}>
        {Object.keys(form).map(key => (
          <div key={key}>
            <input
              type={key.includes('data') ? 'date' : (typeof form[key] === 'number' ? 'number' : 'text')}
              name={key}
              placeholder={key}
              value={form[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">{editandoId ? 'Atualizar' : 'Salvar'}</button>
        {editandoId && (
          <button type="button" onClick={() => { resetarForm(); setEditandoId(null); }}>
            Cancelar
          </button>
        )}
      </form>

      <h2>Lista de Livros</h2>

      <table border="1" cellPadding="8" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ano</th>
            <th>Páginas</th>
            <th>Gênero</th>
            <th>Data Cadastro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map(l => (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.titulo}</td>
              <td>{l.autor}</td>
              <td>{l.editora}</td>
              <td>{l.ano_publicacao}</td>
              <td>{l.numero_paginas}</td>
              <td>{l.genero}</td>
              <td>{l.data_cadastro}</td>
              <td>
                <button onClick={() => editar(l)}>Editar</button>{' '}
                <button onClick={() => deletar(l.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
