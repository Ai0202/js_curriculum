$(function(){
	//ボタンのサイズ変更
	$('#js-hover-btn').on('click', function() {
		$(this).addClass('large-btn');
	});

	// タブメニュー
	$(".tab > ul").on("click", "li",function() {
		$("li.selected").removeClass("selected");
		$(this).addClass("selected");
		myID = this.id.split("_")[1];
		$("#textArea>div").hide();
		$("#text_" + myID).show();

		var myColor = $(this).css("background-color");
		$("#textArea").css("background-color", myColor);
	});

	$("#tab_1").trigger("click");


	// モーダル
	$(".modal .btn").on("click", function() {
		function showModal(event) {

		            var $shade = $('<div></div>');
		            $shade
		                .attr('id', 'shade')
		                .on('click', hideModal);


		            var $modalWin = $('#modalwin');
		            var $window = $(window);
		            var posX = ($window.width() - $modalWin.outerWidth()) / 2;
		            var posY = ($window.height() - $modalWin.outerHeight()) / 2;

		            $modalWin
		                .before($shade)
		                .css({left: posX, top: posY})
		                .removeClass('hide')
		                .addClass('show')
		                .on('click', 'button', function () {
		                    hideModal();
		                });
		        }

		        function hideModal() {
		            $('#shade').remove();
		            $('#modalwin')
		                .removeClass('show')
		                .addClass('hide');
		        }

		        $('.modal .btn').on('click', showModal);
	});

});
