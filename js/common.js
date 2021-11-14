$(document).ready(function () {

	// document.querySelector(".mainButton").ho

	$(".mainButton").hover(function () {
		// over
		$(".mainButton").css({ 'box-shadow': '0 0 100px white', 'border-color': 'orange', 'color': '#fff' });
		$("body").css('background', '#303035');
		$(".scarryBeako").css({ 'opacity': '0.08', 'bottom': '-30px' });
	}, function () {
		// out
		$(".mainButton").css({ 'box-shadow': '2px 2px 5px rgba(0, 0, 0, 0.5)', 'border-color': 'black' });
		$(".scarryBeako").css('opacity', '0');
	});
	$(".mainButton").click(function () {
		$(".mainButton").css('background', 'grey');
		$(".hidden").css({ 'top': '50%' });
		$("body").css('background', 'grey');
		$(".scarryBeako").css('opacity', '0');
	});
	$(".exico").click(function () {
		$(".mainButton").css('background', '#f00');
		$(".hidden").css({ 'top': '-500px' });
	});

	function setCursorPosition(pos, e) {
		e.focus();
		if (e.setSelectionRange) e.setSelectionRange(pos, pos);
		else if (e.createTextRange) {
			var range = e.createTextRange();
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select()
		}
	}

	function mask(e) {
		var matrix = this.placeholder,
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		def.length >= val.length && (val = def);
		matrix = matrix.replace(/[_\d]/g, function (a) {
			return val.charAt(i++) || "_"
		});
		this.value = matrix;
		i = matrix.lastIndexOf(val.substr(-1));
		i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
		setCursorPosition(i, this)
	}
	window.addEventListener("DOMContentLoaded", function () {
		var input = document.querySelector("#phone");
		input.addEventListener("input", mask, false);
		input.focus();
		setCursorPosition(3, input);
	});
});

