@extends('layouts.app')

@section('title', $title)

@section('content')
    <div class="card" style="margin-bottom: 10px">
        <div class="card-body">
            <form class="d-flex" method="GET" action="{{ route('search.index') }}">
                <a href="{{route("home")}}"><button class="btn btn-outline-secondary" type="button">＜</button></a>
                <input class="form-control me-2" type="search" name="search" placeholder="検索キーワードを入力"
                    value="@if (isset($search)) {{ $search }} @endif">
                <button class="btn btn-outline-secondary" type="submit">Search</button>
            </form>
        </div>
        <div class="card-footer">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                絞り込み検索
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">絞り込み検索</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <form method="GET" action="{{ route('search.index') }}">
                                    <div class="form-group">
                                        <label class="control-label">カテゴリー</label>
                                        @foreach ($categories as $value)
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" name="category[]" value="{{ $value->id }}"  {{in_array(strval($value->id), $category )? 'checked' : '[]'}}>
                                                <label class="custom-control-label"
                                                    for="custom-check-1">{{ $value->name }}</label>
                                            </div>
                                        @endforeach
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
                                        <input type="submit" class="btn btn-primary" value="検索">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            @forelse($posts as $post)
                <div class="col" style="margin-bottom: 25px">
                    <div class="card h-100">
                        <div class="ratio ratio-16x9">
                            <iframe width="260" height="115"
                                src="{{ str_replace('https://youtu.be/', 'https://www.youtube.com/embed/', $post->video) }}"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ $post->title }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">作者：{{ $post->author }}</h6>
                            @foreach ($post->categories as $category)
                                <p class="card-text">カテゴリー：{{ $category->name }}</p>
                            @endforeach
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><a href="{{ route('posts.show', $post) }}"
                                    class="btn btn-primary">詳細</a></small>
                        </div>
                    </div>
                </div>
            @empty
                <p>検索結果に一致する動画本はありません。</p>
            @endforelse
            {{ $posts->links() }}
        </div>
@endsection
