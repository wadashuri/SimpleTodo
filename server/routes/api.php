<?php

use Illuminate\Http\Request;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [LoginController::class,'login']);
Route::post('logout', [LoginController::class,'logout']);

// APIToken取得仮コード
Route::post("login",[LoginController::class,'index']);

Route::group([
    'middleware' => 'auth:sanctum'
], function () {
Route::apiResource('posts',PostController::class);
Route::patch('posts/update_done/{post}', [PostController::class,'updateDone']);
Route::get('user', function (Request $request) {
    return $request->user();
});
});
