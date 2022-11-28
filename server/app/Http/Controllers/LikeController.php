<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Like;
use App\Models\Post;
use App\Models\User;

class LikeController extends Controller
{

    //いいねしている投稿の一覧ページ
    public function index()
    {
        return view('likes.index', [
            'title' => 'いいね一覧',
            'likes' => Auth::user()->likes()->latest()->paginate(9),
        ]);
    }

    //いいね機能
    public function ajaxfavorite(Request $request)
    {
        $user_id = Auth::user()->id;
        $post_id = $request->post_id;
        $already_liked = Like::where('user_id', $user_id)->where('post_id', $post_id)->first();
        if (!$already_liked) {
            Like::create([
                'user_id' => $user_id,
                'post_id' => $post_id,
            ]);
        } else { //もしこのユーザーがこの投稿に既にいいねしてたらdelete
            Like::where('post_id', $post_id)->where('user_id', $user_id)->delete();
        }
    }

    public function destroy(Request $request)
    {
        Auth::user()->likes->find($request->like)->delete();
        return redirect()->route('likes.index')->with([
            'alert' => [
                'message' => '投稿を削除しました',
                'type' => 'success'
            ]
        ]);
    }
}
