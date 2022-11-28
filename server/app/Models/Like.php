<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    public $fillable = ['user_id', 'post_id'];

    public $timestamps = false;



    //****************************************
    //     呼び出し関数
    //****************************************
    
    //いいねを押したか確認
    public function LikeCheck($user_id, $post_id)
    {
        //Likeのデータベースにあるuser_idとpost_idを参考する
        $check = Like::where([['user_id', $user_id], ['post_id', $post_id]])->get();
        //もしいいねを押した場合はいいねをキャンセルするいいねを押した事がない場合はいいねをデータベースに追加
        if (!$check->isEmpty()) {
            return true;
        } else {
            return false;
        }
    }
}
