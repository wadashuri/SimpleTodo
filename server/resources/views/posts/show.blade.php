@extends('layouts.app')

@section('title', $title)

@section('content')
    <div class="container">
        <div class="row row-cols-1 row-cols-md-1 g-4">
            <div class="col" style="margin-bottom: 25px">
                <div class="card h-100">
                    <div class="ratio ratio-16x9">
                        <iframe width="260" height="115" src="{{ str_replace('https://youtu.be/','https://www.youtube.com/embed/',$post->video) }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ $post->title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">作者：{{ $post->author }}</h6>
                        <p>{!! nl2br(e($post->comment)) !!}</p>
                        @if ($likes->LikeCheck(Auth::user()->id ?? '', $post->id))
                            <p class="card-text">ライブラリへ追加：<span type="button" class="like-toggle liked" href=""
                                    data-post-id="{{ $post->id }}">♡</span>{{ $post->likes_count }}</p>
                        @else
                            <p class="card-text">ライブラリへ追加：<span class="like-toggle like" href=""
                                    data-post-id="{{ $post->id }}">♡</span>{{ $post->likes_count }}</p>
                        @endif
                        @if (!empty($post->affiliate))
                            <p><a href="{{ $post->affiliate }}">{{ $post->title }}のご購入はこちらから</a></p>
                        @endif
                        @foreach ($post->categories as $category)
                            <p class="card-text">カテゴリー：{{ $category->category }}</p>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
