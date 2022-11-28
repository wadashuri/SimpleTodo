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
        <div class="card">
            <div class="card-header">{{ $title }}</div>
            <div class="card-body">
                <a href="{{ route('categories.create') }}">新規投稿</a>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>名前</th>
                            <th>操作</th>
                        </tr>
                        @foreach ($categories as $category)
                            <tr>
                                <th scope="row">{{ $category->id }}</th>
                                <td>{{ $category->name }}</td>
                                <td><a href="{{ route('categories.edit', $category) }}">編集</a>/
                                    <form method="post" class="delete" action="{{ route('categories.destroy', $category) }}">
                                        @csrf
                                        @method('delete')
                                        <input type="submit" value="削除">
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                        {{ $categories->links() }}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
