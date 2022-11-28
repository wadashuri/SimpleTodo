<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $datetime = $this->faker->dateTimeBetween('-700 day', 'now');
        $randomElement = $this->faker->randomElement($array = ['カテゴリー1', 'カテゴリー2','カテゴリー3', 'カテゴリー4']);

        return [
            'name' => $randomElement,
            'created_at'=> $datetime,
            'updated_at'=> $datetime
        ];

    }
}
