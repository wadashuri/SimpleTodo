<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $datetime = $this->faker->dateTimeBetween('-700 day', 'now');
        $text = $this->faker->realText($maxNbChars = 50, $indexSize = 2);

        return [
            'title' => $this->faker->text(5),
            'is_done' => $this->faker->boolean(),
            'created_at'=> $datetime,
            'updated_at'=> $datetime
        ];

    }
}
