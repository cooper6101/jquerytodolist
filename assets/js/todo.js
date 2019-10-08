$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span.remove", function(event) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li><span class = 'remove'><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});

