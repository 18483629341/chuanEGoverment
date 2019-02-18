$(function () {
	//获取文本的行高，并获取文本的高度，假设我们规定的行数是五行，那么对超过行数的部分进行限制高度，并加上省略号
	onlyTwoLine('.li-heading');
	$('.selfTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show');
		onlyTwoLine('.li-heading');
	})
	$('.selfTab a').mouseover(function (e) {
		e.preventDefault()
		$(this).tab('show');
		onlyTwoLine('.li-heading');
	})
	$("#content-1").mCustomScrollbar();
})