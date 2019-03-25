(jQuery)(function($) {
	$(window).load(function() {
		// 拖动验证初始化
		$('#drag').drag();

        var picArr = $('.pic-change .bg');
		var circleArr = $(".left .circle");
		var isNow = -1;
		
		function move() {
            picArr.eq(isNow).css("opacity", "1").siblings().css("opacity", "0");
			circleArr.eq(isNow).addClass("active").siblings().removeClass("active");
		}
		// 定时器初始值
		function run() {
			isNow++;
			if(isNow > 4) {
				isNow = 0;
			}
			move();
		}
		var timer = setInterval(run, 5000);

		// 鼠标滑入，停止背景切换，进入当前背景
		circleArr.hover(function() {
			clearInterval(timer);
			isNow = $(this).index() - 1;
			picArr.eq(isNow).css("opacity", "1").siblings().css("opacity", "0");
			$(this).addClass("active").siblings().removeClass("active");
		}, function() {
			timer = setInterval(run, 5000);
		});
	});
});