<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;


class SearchController extends Controller
{
    
    public function index(Request $request)
    {
        $category = $request->category === null ? [] : $request->category;
        $search = $request->input('search');

        return view('search.index', [
            'category' => $category,
            'title' => 'search',
            'posts' => Post::search($request)->latest()->paginate("9"),
            'categories' => Category::all(),
            'search' => $search,
        ]);
    }
}
