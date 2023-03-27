<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  use HasFactory;

  protected $guarded = ['id'];

  protected $casts = [
    'is_done' => 'bool',
    'user_id' => 'int'
  ];


  //****************************************
  //     リレーション設定
  //****************************************

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
