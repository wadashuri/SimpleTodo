@extends('layouts.app')

@section('title', $title)

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $title }}</div>

                    <div class="card-body">
                        <a href="{{ route('posts.create') }}">新規投稿</a>
                        <table class="table">
                            <tr>
                                <th>名前</th>
                                <th>タイトル</th>
                                <th>コメント</th>
                                <th>編集を加える</th>
                                <th>削除する</th>
                                <th>カテゴリー</th>
                            </tr>
                            @forelse($posts as $post)
                                <tr>
                                    <td>{{ $post->user->name }}</td>
                                    <td>{{ $post->title }}</td>
                                    <td>{!! nl2br(e($post->comment)) !!}</td>
                                    <td>[<a href="{{ route('posts.edit', $post) }}">編集</a>]</td>
                                    <td>
                                        <form method="post" class="delete" action="{{ route('posts.destroy', $post) }}">
                                            @csrf
                                            @method('delete')
                                            <input type="submit" value="削除">
                                        </form>
                                    </td>
                                    @foreach ($post->categories as $category)
                                        <td>{{ $category->name }}</td>
                                    @endforeach
                                </tr>
                            @empty
                                <td>書き込みはありません。</td>
                            @endforelse
                        </table>
                        {{ $posts->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
