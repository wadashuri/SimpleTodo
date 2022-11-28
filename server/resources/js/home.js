
const swiper = new Swiper(".swiper", {
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },

  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//無限スクロール
jQuery(function() {
	let documentHeight = jQuery(document).height();
	let windowsHeight = jQuery(window).height();
	let list = document.getElementById('list');
	let url = list.dataset.url;
	let search = list.dataset.search;
	let category_string = list.dataset.category_string;
	let book_tuber_category_string = list.dataset.book_tuber_category_string;
	let postNumNow = 6; /* 最初に表示されている記事数 */
	let postNumAdd = 6; /* 追加する記事数 */
	let flag = false;
	jQuery(window).on("scroll", function() {
		let scrollPosition = windowsHeight + jQuery(window).scrollTop();
		if (scrollPosition >= documentHeight) {
			if (!flag) {
				flag = true;
				jQuery.ajax({
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
					type: "POST",
					url: url,
					data: {
						post_num_now: postNumNow,
						post_num_add: postNumAdd,
						search: search,
						category_string: category_string,
						book_tuber_category_string: book_tuber_category_string,
					},
					success: function(response) {
						jQuery("#list").append(response);
						documentHeight = jQuery(document).height();
						postNumNow += postNumAdd;
						flag = false;
					}
				});
			}
		}
	});
});