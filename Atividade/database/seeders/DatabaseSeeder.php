<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DataBaseSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('livros')->insert([
            [
                'titulo' => 'Dom Casmurro',
                'autor' => 'Machado de Assis',
                'editora' => 'Editora Nacional',
                'ano_publicacao' => 1899,
                'numero_paginas' => 256,
                'genero' => 'Romance',
                'data_cadastro' => Carbon::now()->subDays(5),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => '1984',
                'autor' => 'George Orwell',
                'editora' => 'Companhia das Letras',
                'ano_publicacao' => 1949,
                'numero_paginas' => 328,
                'genero' => 'Distopia',
                'data_cadastro' => Carbon::now()->subDays(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'O Hobbit',
                'autor' => 'J.R.R. Tolkien',
                'editora' => 'HarperCollins',
                'ano_publicacao' => 1937,
                'numero_paginas' => 310,
                'genero' => 'Fantasia',
                'data_cadastro' => Carbon::now()->subDays(15),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
