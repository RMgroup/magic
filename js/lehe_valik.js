$(document).ready(function () {
    var url = window.location;
    $('.nav a[href="' + url + '"]').parent().addClass('active');
    $('.nav a').filter(function () {
        return this.href == url;
    }).parent().addClass('active');
});
$(".nav a").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
$('#update a').on('click', function () {
    $('.nav a[href="' + url + '"]').parent().addClass('active');
    $('.nav a').filter(function () {
        return this.href == url;
    }).parent().addClass('active');
});