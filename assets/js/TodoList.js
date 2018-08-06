//check off tasks by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
})

//click to delete todo
$("ul").on("click", "li span", function(e){
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	e.stopPropagation();
});
//create new todo
$("input[type='text']").keypress(function(e){
	if(e.which === 13) {
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + text + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(200);
})