@extends('layouts.app')

@section('title', $title)

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $title }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('posts.update', $post) }}">
                            @csrf
                            @method('patch')
                                <table class="table">
                                    <tbody>
                                      <tr>
                                        <th scope="row">YouTube動画リンク</th>
                                        <td><input type="text" name="title" value="{{ $post->video }}"></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">タイトル</th>
                                        <td><input type="text" name="title" value="{{ $post->title }}"></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">作者</th>
                                        <td><input type="text" name="author" value="{{ $post->author }}"></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">コメント</th>
                                        <td><textarea name="comment" rows="8" cols="20">{{ $post->comment }}</textarea></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">アフィリエイトリンク</th>
                                        <td><input type="text" name="affiliate" value="{{ $post->affiliate }}"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <h3>本カテゴリー</h3>
                                <select name="category_id" class="content_inquiry_category">
                                    <option value="">選択してください</option>
                                    @foreach ($categories as $value)
                                        <option value="{{ $value->id }}"
                                            @if(old('category_id') == $value->id) selected @endif>
                                            {{ $value->category }}</option>
                                    @endforeach
                                </select>
                                <h3>BookTuberカテゴリー</h3>
                                <select name="booktuber_category_id" class="content_inquiry_booktuber_category">
                                  <option value="">選択してください</option>
                                  @foreach ($book_tuber_categories as $value)
                                      <option value="{{ $value->id }}"
                                          @if(old('category_id') == $value->id) selected @endif>
                                          {{ $value->book_tuber_category }}</option>
                                  @endforeach
                              </select>
                                <input type="submit" value="更新">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
