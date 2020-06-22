$('#tab-contents .tab[id != "tab1"]').hide();
 
$('#tab-menu a').on('click', function() {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");        //#tab-menuに"active"クラスを付け加える事で、#tab-menu .activeのcssとなる
  $($(this).attr("href")).show();
  return false;
});