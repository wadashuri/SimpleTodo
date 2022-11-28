//Ajax非同期通信いいね機能
$(function () {
    let like = $('.like-toggle');
    let likePostid;
    like.on('click', function () {
        let $this = $(this);
        likePostid = $this.data('post-id');

        //ajax処理スタート
        $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/ajaxfavorite',
                method: 'POST',
                data: {
                    'post_id': likePostid
                },
            })

            //通信成功した時の処理
            .done(function (data) {
                $this.toggleClass('liked'); //likedクラスのON/OFF切り替え。
              })

            //通信失敗した時の処理
            .fail(
            function () {
                alert('会員登録(無料)して「いいね」機能を使おう！');
                console.log('fail');
        });
    });
});
