if (parent.document.URL.indexOf('template=off') < 0)
$(document).ready(function(){
	$(".pagewrapper").prepend("<div class=\"templateheader\"></div>");
	$(".templateheader").load("template.html .templateheader");
	$(".templateheader").after("<div class=\"templateleftnav\"></div>");
	$(".templateleftnav").load("template.html .templateleftnav");
	$(".content").addClass("templatecontent");
	$(".pagewrapper").addClass("templatepagewrapper");
	$(".content").after("<div class=\"templatefooter\"></div>");
	$(".templatefooter").load("template.html .templatefooter");
	$(".notemplatefooter").remove();
});
