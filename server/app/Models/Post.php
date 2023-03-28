<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

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

  // ========================================================================

    /**
     * スコープ設定
     */
    public function scopeSearchCreatedAt($query, $request)
    {
        $createdAt = $request->created_at ?? date("Y-m-d");
    
        $query->when($createdAt, function ($q) use ($createdAt) {
            $q->whereDate('created_at', $createdAt);
        });
    }
}
