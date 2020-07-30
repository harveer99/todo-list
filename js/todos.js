cross = {
	color: "grey",
	textDecoration: "line-through"
};

$("ul").on("click","li",function(){
	$(this).toggleClass("cross");
});

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		var todotext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type=text]").fadeToggle();
});