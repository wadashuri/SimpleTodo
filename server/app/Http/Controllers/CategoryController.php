<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->_category = Category::findOrFail($request->category);
            return $next($request);
        })
            ->except(['index', 'create', 'store']);
    }


    /**
     * カテゴリー一覧
     */
    public function index()
    {
        return view('categories.index', [
            'title' => 'カテゴリー一覧',
            'categories' => Category::latest()->paginate(9),
        ]);
    }

    /**
     * カテゴリー作成
     */
    public function create()
    {
        return view('categories.create', [
            'title' => 'カテゴリー追加',
        ]);
    }

    /**
     * カテゴリー登録
     */
    public function store(Request $request)
    {
        try {
            $params = $request->input();

            DB::transaction(function () use ($params) {
                Category::create($params);
            });

            return redirect()->route('categories.index')->with([
                'alert' => [
                    'message' => '部署登録が完了しました。',
                    'type' => 'success'
                ]
            ]);
        } catch (\Throwable  $e) {
            logger()->error($e);
            throw $e;
        }
    }



    /**
     * カテゴリー編集
     */
    public function edit()
    {
        return view('categories.edit', [
            'title' => '投稿編集',
            'categories' => $this->_category,
        ]);
    }

    /**
     * カテゴリー更新
     */
    public function update(Request $request)
    {
        try {
            $params = $request->input();

            DB::transaction(function () use ($params) {
                $this->_category->fill($params)->update();
            });

            return redirect()->route('categories.index', $this->_category->id)->with([
                'alert' => [
                    'message' => 'カテゴリーの編集が完了しました。',
                    'type' => 'success'
                ]
            ]);
        } catch (\Throwable $e) {
            logger()->error($e);
            throw $e;
        }
    }


    /**
     * カテゴリー削除
     */
    public function destroy()
    {
        try {
            DB::transaction(function () {
                $this->_category->delete();
            });

            return redirect()->route('categories.index')->with([
                'alert' => [
                    'message' => 'カテゴリーの削除が完了しました。',
                    'type' => 'danger'
                ]
            ]);
        } catch (\Throwable $e) {
            logger()->error($e);
            throw $e;
        }
    }

}
