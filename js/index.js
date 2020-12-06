	$(document).ready(function () {
		$(".content-music, .content-war, .content-death, .content-revolution, .content-love, .content-demo, .resistance").hide();
		$(".folder-music").on("click", function () {
			$(".content-music").show(500);
		});
		$(".folder-war").on("click", function () {
			$(".content-war").show(500);
		});
		$(".folder-death").on("click", function () {
			$(".content-death").show(500);
		});
		$(".folder-revolution").on("click", function () {
			$(".content-revolution").show(500);
		});
		$(".folder-love").on("click", function () {
			$(".content-love").show(500);
		});
		$(".folder-demo").on("click", function () {
			$(".content-demo").show(500);
		});
	})

