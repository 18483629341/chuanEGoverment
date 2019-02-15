function onlyTwoLine(tag){
	$(tag).each(function (i, obj) {
		//返回到最初的样式；
		$(this).removeClass("p-after")
		$(this).css("height", "initial");
		//
		var lineHeight = parseInt($(this).css("line-height"));
		var height = parseInt($(this).height());
		console.log(i,$(this),$(this).height(),lineHeight);
		

		if ((height / lineHeight) > 2) {
			console.log("addClass");
			$(this).addClass("p-after")
			$(this).css("height", "46px");
		} else {
			$(this).removeClass("p-after");
		}
	});
}