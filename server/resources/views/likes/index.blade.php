@extends('layouts.app')

@section('title', $title)

@section('content')
    {{-- if alert --}}
    @if (session('alert'))
        <div class="alert alert-{{ session('alert.type') }} alert-dismissible fade show mt-3 mb-0" role="alert"
            id="liveAlert">
            <div>{!! nl2br(e(session('alert.message'))) !!}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif
    <div class="container">
        <h3 class="border-bottom"><i class="bi bi-heart"></i>{{ $title }} </h3>
        <div id="list" data-url="likeAjaxAddPost">
            <div class="row row-cols-2 row-cols-md-3">
                @forelse($likes as $like)
                    <div class="col" style="margin-bottom: 25px">
                        <div class="card h-100">
                            <div class="ratio ratio-16x9">
                                <iframe width="260" height="115"
                                    src="{{ str_replace('https://youtu.be/', 'https://www.youtube.com/embed/', $like->video) }}"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{{ $like->title }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">作者：{{ $like->author }}</h6>
                            </div>
                            <div class="card-footer">
                                <div>
                                    <a href="{{ route('posts.show', $like) }}" class="btn btn-primary">詳細</a>
                                    {!! Form::open(['route' => ['likes.destroy', $like], 'method' => 'delete', 'class' => 'btn-group']) !!}
                                    {!! Form::button('<span data-feather="trash"></span>削除', [
                                        'type' => 'submit',
                                        'class' => 'btn btn-sm btn-outline-danger',
                                        'onclick' => "if(!confirm('削除をしてもよろしいですか？ ※後からもう一度追加できます')) return false;",
                                    ]) !!}
                                    {!! Form::close() !!}
                                </div>
                            </div>
                        </div>
                    </div>
                @empty
                    <p>ライブラリーに動画本がありません<br>
                        <a href="{{ route('home') }}" class="btn btn-primary">動画本を探す</a>
                    </p>
                @endforelse
                {{ $likes->links() }}
            </div>
        </div>
    </div>
@endsection
