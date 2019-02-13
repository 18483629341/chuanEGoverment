
function onlyTwoLine(tag){
	$(tag).each(function (i, obj) {
		var lineHeight = parseInt($(this).css("line-height"));
		var height = parseInt($(this).height());
		if ((height / lineHeight) > 2) {
			$(this).addClass("p-after")
			$(this).css("height", "46px");
		} else {
			$(this).removeClass("p-after");
		}
	});
}