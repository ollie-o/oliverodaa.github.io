$(function() {
	$('#nav-wrapper').height($('#nav').height());
})

function checkWidth() {
	var fullWidth = ($('#title_container').css("padding-top") == "70px")
	if (fullWidth && $('#cover_space').width() < 466) {
		$('#title_container').css({"padding-top":"10px"});
	}
	else if (!fullWidth && $('#cover_space').width() > 466) {
		$('#title_container').css({"padding-top":"70px"});
	}
}

$(document).ready(function () {
	var longTitle = ($('#title').text().length > 12)
	if (longTitle) {
		checkWidth()
		$(window).resize(checkWidth())
	}
})