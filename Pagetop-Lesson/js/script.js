//htmlとcssだけで表すとすぐにトップに戻ってしまうので、
//jsを用いて表現すると、topに戻るまでのスピードも制御できる
$(function() {
 
  // back内の<a>タグがクリックされたときの処理
  $('#back a').on('click',function(){
  // body要素またはhtml要素に処理を行いたい
    $('body, html').animate({
      // 最上部に移動
      scrollTop:0
    }, 800);
      return false;
  });
 
});