if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery-latest.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}
window.onload = function() {
    $(function() {
        $(".se-pre-con").fadeOut("slow");
    });

}
