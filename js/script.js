(function($) {
    $(function() {

        $(".dropdown-button").dropdown();
        $('.parallax').parallax();
        $(".button-collapse").sideNav({
            menuWidth: 200,
            draggable: true,
        });

    });
})(jQuery);

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}