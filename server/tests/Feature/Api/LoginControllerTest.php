<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    use DatabaseTransactions;


    // APITokenが取得できるか
    public function testLoginSuccessfully()
    {
        $response = $this->postJson('/api/login/index', [
            'email' => 'user1@example.com',
            'password' => 'user1',
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['token']);
    }

    // バリデーションが正しいか
    public function testLoginValidation()
    {
        $response = $this->postJson('api/login', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['email', 'password']);
    }
}
