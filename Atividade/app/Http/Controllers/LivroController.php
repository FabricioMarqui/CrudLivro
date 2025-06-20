<?php

namespace App\Http\Controllers;

use App\Models\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    // Listar todos os livros
    public function index()
    {
        return Livro::all();
    }

    // Criar um novo livro
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string',
            'autor' => 'required|string',
            'editora' => 'required|string',
            'ano_publicacao' => 'required|integer',
            'numero_paginas' => 'required|integer',
            'genero' => 'required|string',
            'data_cadastro' => 'required|date',
        ]);

        return Livro::create($request->all());
    }

    // Mostrar um livro específico
    public function show($id)
    {
        return Livro::findOrFail($id);
    }

    // Atualizar um livro
    public function update(Request $request, $id)
    {
        $livro = Livro::findOrFail($id);

        $request->validate([
            'titulo' => 'sometimes|string',
            'autor' => 'sometimes|string',
            'editora' => 'sometimes|string',
            'ano_publicacao' => 'sometimes|integer',
            'numero_paginas' => 'sometimes|integer',
            'genero' => 'sometimes|string',
            'data_cadastro' => 'sometimes|date',
        ]);

        $livro->update($request->all());
        return $livro;
    }

    // Deletar um livro
    public function destroy($id)
    {
        return Livro::destroy($id);
    }
}
