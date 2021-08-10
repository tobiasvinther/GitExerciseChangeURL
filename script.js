$().ready(function() {

	$("h1:first").css("display", "none");
	//$("h1:first").html("./missing semester");
	$(".page-header a:first").hide()
	//$(".page-header").append("<div>Elective at KEA CS Fall 2021</div>")
	$(".page-header").append("<div><a href='/e21/' style='color:white; font-weight:bold '><img src='img/home-5-16.png'></a>");
	//$(".page-header").append("<div style='text-align:right; margin-bottom: -70px;margin-top: 30px; '><a href='' style='color:white; font-weight:bold '>./missing_semester</a> | <a href='' style='color:white; font-weight:bold '>lectures</a> | <a href='' style='color:white; font-weight:bold '>about</a></div>")

	//$(".site-footer").append("<div style='text-align:center'><small>Licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA.</a> <br><a href='changelog.md'>Licence change log</a> <br> Claus Bove (clbo@kea.dk) <br> <a href='https://missing.csail.mit.edu/'> MIT - The Missing Semester</a></small></div>")
	$(".site-footer-owner").hide()
        $(".site-footer-credits").hide()	
	$(".main-content").attr('style', 'max-width:60rem; font-size:1.2rem');
	$(".page-header").attr('style', 'padding: 3rem 6rem');

});


/*

$().ready(function() {
		$("h1:first").css("display", "none");
		$(".markdown-body").prepend("<div><i><small><a href='index.html'>Semesterplan</a></small></i></div>")
		$(".markdown-body").prepend("<div><i><small>Dat20B & Dat20C, Teknologi 1, 2. Semester Forår 2021, Underviser: Claus Bove, clbo@kea.dk</small></i></div>")
		$(".markdown-body").append("<div style='text-align:right'><i><small>&copy; clbo@kea.dk, Forår 2021</small></i></div>")	
});
*/
