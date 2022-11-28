@extends('layouts.app')

@section('title', $title)

@section('content')

    @guest
        <section class="py-5 text-center bg-white">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Album example</h1>
                    <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator,
                        etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                        <a href="{{ route('register') }}" class="btn btn-primary my-2">会員登録(無料)</a>
                        <a href="{{ route('login') }}" class="btn btn-secondary my-2">ログイン</a>
                    </p>
                </div>
            </div>
        </section>
    @endguest

    <div class="album py-5 bg-light">
        <div class="container">

            <div class="card-body py-5">
                <form class="d-flex" method="GET" action="{{ route('search.index') }}">
                    <input class="form-control me-2" type="search" name="search" placeholder="検索キーワードを入力"
                        value="@if (isset($search)) {{ $search }} @endif">
                    <button class="btn btn-outline-secondary" type="submit">Search</button>
                </form>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                @forelse($posts as $post)
                    <div class="col">
                        <div class="card shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%"
                                    fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div class="card-body">
                                <p class="card-text">{{ $post->title }}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a href="{{ route('posts.show', $post) }}"><button type="button"
                                                class="btn btn-sm btn-outline-secondary">View</button></a>
                                    </div>
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                @empty
                    <p>投稿がありません</p>
                @endforelse
                {{ $posts->links() }}
            </div>
        </div>
    </div>
@endsection
