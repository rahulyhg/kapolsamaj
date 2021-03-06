$(function(){
  $("#navigation-global a:first").cornerz({
    radius: 16,
    background: "#7dc3ec",
    corners: "bl"
  });
  
  $("#navigation-global a:last").cornerz({
    radius: 16,
    background: "#7dc3ec",
    corners: "br"
  });
  
  $("#home #content-main, #404 #content-main, #terms #content-main, #privacy #content-main ").cornerz({
    radius: 16,
    background: "#83c5ed",
    corners: "tl tr"
  });

  $("#home #content-main, #404 #content-main, #terms #content-main, #privacy #content-main ").cornerz({
    radius: 16,
    background: "#d1e9f8",
    corners: "bl br"
  });
  
  $("#navigation-secondary").cornerz({
    radius: 16,
    background: "#d1e9f8",
    corners: "tl tr"
  });
  
  $("#navigation-page").tabs();
  $(".here").click(function(){
    var myTabID = this.href.substr(this.href.indexOf('#'));
    $("#navigation-page").tabs('select', myTabID)
  });
})
