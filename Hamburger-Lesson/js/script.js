$(function() {
 
  $('.menu-trigger').on('click', function(event) {
    // 「.menu-trigger」と「.menu-trigger.active」を繰り返す
    $(this).toggleClass('active');
    // 「#sp-menu」の表示と非表示を繰り返す
    $('#sp-menu').fadeToggle(1000);
    event.preventDefault();
  });
 
 });