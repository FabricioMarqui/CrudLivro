<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
   protected $fillable = [
    'titulo', 'autor', 'editora', 'ano_publicacao',
    'numero_paginas', 'genero', 'data_cadastro'
];

}
