/**
 * Local script file.
 * @author: Raysmond
 */
jQuery(document).ready(function($) {
    var flag = true;
    $(".content .field-name-body img").css("height", "auto");
    jQuery("a#controlbtn").click(function(e) {
        e.preventDefault();
        var slidepx = flag ? 260 : 0;
        if (!jQuery("#col8").is(':animated')) {
            flag = !flag;
            $("#col8").animate({
                width: "" + (980 - slidepx) + "px"
            },
            {
                duration: 'slow',
                easing: 'easeOutQuint'
            });
            $('#col4').css("display", slidepx == 0 ? "none": "block");
            $("#col4").animate({
                width: "" + slidepx + "px"
            },
            {
                duration: 'slow',
                easing: 'easeOutQuint'
            });
        }
    });
});