$().ready(function() {
	$(".page-header").attr('style', 'display:none')
	$("h1:first").css("display", "none");
	$("h1:first").html("Teknologi 1 - KEA efterår 2021 - Kompendie");
	$(".page-header a:first").hide()
	//$(".page-header").append("<div>Elective at KEA CS Fall 2021</div>")
	$(".main-content").prepend("<div style='text-align: right'><a href='/e21/'><img src='img/home-5-24.png'></a>");
	//$(".page-header").append("<div style='text-align:right; margin-bottom: -70px;margin-top: 30px; '><a href='' style='color:white; font-weight:bold '>./missing_semester</a> | <a href='' style='color:white; font-weight:bold '>lectures</a> | <a href='' style='color:white; font-weight:bold '>about</a></div>")

	$(".site-footer").append("<div style='text-align:center'><small>Licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA.</a> <br> Claus Bove (clbo@kea.dk) efterår 2021 <br> <div>")
	$(".site-footer-owner").hide()
        $(".site-footer-credits").hide()	
	$(".main-content").attr('style', 'max-width:60rem; font-size:1.2rem');
	//$(".page-header").attr('style', 'padding: 3rem 6rem');

});


/*

$().ready(function() {
		$("h1:first").css("display", "none");
		$(".markdown-body").prepend("<div><i><small><a href='index.html'>Semesterplan</a></small></i></div>")
		$(".markdown-body").prepend("<div><i><small>Dat20B & Dat20C, Teknologi 1, 2. Semester Forår 2021, Underviser: Claus Bove, clbo@kea.dk</small></i></div>")
		$(".markdown-body").append("<div style='text-align:right'><i><small>&copy; clbo@kea.dk, Forår 2021</small></i></div>")	
});
*/
