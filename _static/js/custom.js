// accordion menu buradan alındı: https://www.w3schools.com/howto/howto_js_accordion.asp
// sayfa yüklendikten sonra scriptin çalışması için jquery uyumlu "$(document).ready(function(){//your code});" satırı buradan alındı: https://stackoverflow.com/questions/11936816/execute-function-after-complete-page-load

$(document).ready(function(){
    var acc = document.getElementsByClassName("math-accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
});

