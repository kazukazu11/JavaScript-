//box1の上にカーソルをかざした時
$(function(){
	$('.box1').mouseover(function(){
		$('.box1').addClass('box1-ext');
	});
	$('.box1').mouseout(function(){
		//box1の上からカーソルが離れた時
		$('.box1').removeClass('box1-ext').removeClass('box1-ext1');
	});
	//box1をクリックした時
	$('.box1').on('click', function(){
        $('.box1').addClass('box1-ext1');
    });
});
 
//box1をクリックした時
// $(function(){
//     $('.box1').on('click', function(){
//         $('.box1').addClass('box1-ext');
//     });
//     $('.box1').mouseout(function(){
//         $('.box1').removeClass('box1-ext');
//     });
// });