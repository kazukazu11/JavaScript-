// $(function(){
//     $('.box1').css({
//         'background-color': '#0000FF',
//         'height': '100px'
//     });
// });

// $(function(){
//   $('.box1').slideUp();
// });

//非表示の要素をjQueryで表示させる
// $(function(){
//     $('.box1').show();
//     $('.box1').css({'background-color': '#0000FF'});
// });

//表示されている要素をjQueryで非表示にする
// $(function(){
//     $('.box1').hide();
// });

//この書き方だと、slideDownメソッド、cssメソッド、slideUpメソッドが同時に呼び込まれる
// $(function(){
// 	$('.box1').slideDown(5000).css({
// 		'background-color': '#0000FF',
// 		'width': '200px',
// 		'height': '100px'
// 	}).slideUp(5000);
// });

//この書き方だと、slideDownメソッドが呼ばれてから、cssメソッド、slideUpメソッドが同時に呼び込まれる
$(function(){
	$('.box2').slideDown(5000,function(){
		$('.box2').css({
			'background-color': '#0000FF',
			'width': '200px',
			'height': '100px'
		});
	}).slideUp(5000);
});