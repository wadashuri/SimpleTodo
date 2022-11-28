<?php

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * Front | リダイレクト設定
 */
Route::get('{all}', function () {
    return view('index');
})->where(['all' => '.*']);


/**
 * User | ログイン前
 */
# ホーム
Route::get('home', [HomeController::class, 'index'])->name('home');

# 投稿
// Route::resource('posts', PostController::class);

# 検索
Route::resource('search', SearchController::class)->only('index');

# カテゴリー
Route::resource('categories', CategoryController::class)->only('index');

Auth::routes();

/**
 * User | ログイン後
 */
Route::group(['middleware' => ['auth:web']], function () {

    # いいね
    Route::resource('likes', LikeController::class)->only('index', 'destroy');
    # ajax非同期いいね機能
    Route::post('ajaxfavorite', [LikeController::class, 'ajaxfavorite'])->name('ajaxfavorite');

    # 管理者ユーザーの権限を与えられたuserのみアクセスできるルート
    Route::middleware(['auth', 'can:isAdmin'])->group(function () {


        # カテゴリー
        Route::resource('categories', CategoryController::class)->except('index');

    });

});
