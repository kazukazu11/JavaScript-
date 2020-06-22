//thisの説明 
$(function(){
    // $('.bg1').on('click', function(){
    //     $('.bg1').slideUp();
    // });
 
    // $('.bg2').on('click', function(){
    //     $('.bg2').slideUp();
    // });
 
    // $('.bg3').on('click', function(){
    //     $('.bg3').slideUp();
    // });
 
    // $('.bg4').on('click', function(){
    //     $('.bg4').slideUp();
    // });
    // ⬆︎⬆︎⬆︎class名のみ異なるイベントを4つも記述しなければならず、少し面倒なので、⬆︎⬆︎⬆︎
    // ⬇︎⬇︎⬇︎thisを利用すると、コードをシンプルにまとめられる⬇︎⬇︎⬇︎
    // this：box1のクリックされた要素のみ選択
    $('.box1').on('click', function(){
       $(this).slideUp()
    });
});

//childrenの説明
// $(function(){
//     $('button').on('click', function(){
//         $('ul').children().css('color','red');
//     });
// });

//奇数回、偶数回でクリックイベントを変更
$(function() {
    var cc = true;
    $('button').on("click",
        function() {
            if (cc) {
              $('ul').children().css('color','red');
            } else {
              $('ul').children().css('color','black');
            }
            cc = !cc;
        });
});