@extends('layouts.app')

@section('title', $title)

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $title }}</div>

                    <div class="card-body">
                        <h1>{{ $title }}</h1>
                        <form method="POST" action="{{ route('posts.store') }}">
                            @csrf
                            <h3>カテゴリー</h3>
                            <select name="category" class="content_inquiry_category">
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}" @if (old('category') == $category->id) selected @endif>
                                        {{ $category->name }}</option>
                                @endforeach
                            </select>
                            <div>
                                <ul>
                                    <li>
                                        タイトル:
                                        <input type="text" name="title">
                                    </li>
                                    <li>
                                        コンテンツ:<br>
                                        <textarea name="content" rows="8" cols="40"></textarea>
                                    </li>
                                    <li>
                                        コメント:<br>
                                        <textarea name="comment" rows="8" cols="40"></textarea>
                                    </li>
                                </ul>
                            </div>

                            <input type="submit" value="投稿">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
