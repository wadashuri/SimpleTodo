<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  use HasFactory;

  protected $guarded = [
    'id',
    'created_at',
    'updated_at',
];


  //****************************************
  //     リレーション設定
  //****************************************

  // public function user()
  // {
  //   return $this->belongsTo(User::class);
  // }

  // public function categories()
  // {
  //   return $this->belongsToMany(Category::class);
  // }

  // public function likes()
  // {
  //   return $this->belongsToMany(User::class, 'likes');
  // }


  // ========================================================================

  /**
   * スコープ設定
   */
  // public function scopeSearch($query, $request)
  // {
  //   $query
  //     ->when($request->filled('search'), function ($q) use ($request) {
  //       $q->where('title', 'LIKE', "%{$request->search}%");
  //     })
  //     ->when($request->filled('category'), function ($q) use ($request) {
  //       $q->whereHas('categories', function ($query) use ($request) {
  //         $query->whereIn('category_id', $request->category);
  //       });
  //     });
  // }
}
