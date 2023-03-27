<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory(20)
            ->sequence(
                fn ($sequence) => [
                    'name' => 'user' .($sequence->index + 1),
                    'email' => 'user' .($sequence->index + 1). '@example.com',
                    'password' => Hash::make('user' .($sequence->index + 1))
                ],
            )
            ->create();
    }
}
