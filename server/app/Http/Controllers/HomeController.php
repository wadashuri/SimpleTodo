<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;

class HomeController extends Controller
{

    public function index(Request $request)
    {

        return view('home', [
            'title' => 'Home',
            'posts' =>  Post::latest()->paginate(9),
        ]);
    }
}
