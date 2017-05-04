$(document).ready(function(){
		$('.sidebar').on('click','li',function(){
		var sTop = $(document).scrollTop();
		var headTop = 800;
		var p1Top = $('#part1').height()+headTop;
		var p2Top = $('#part2').height()+p1Top;
		var p3Top = $('#part3').height()+p2Top;
		var p4Top = $('#part4').height()+p3Top;
		var p5Top = $('#part5').height()+p4Top;
		var num = $(this).index();
		var topFun = function($hTop){
			hTime = Math.abs((sTop-$hTop)/10);
			$('body').animate({
				scrollTop:$hTop
			},hTime);
		}
		switch(num){
			case 0:
			topFun(headTop);
				break;

			case 1:
			topFun(p1Top);
				break;

			case 2:
			topFun(p2Top);
				break;

			case 3:
			topFun(p3Top);
				break;

			case 4:
			topFun(p4Top);
				break;

			case 5:
			topFun(p5Top);
				break;
		}
	});
	// 动态控制sidebar显示位置
	if($(window).width()<1400){
		$('.sidebar').css({
			display:'none'
		});
	}
	if($(window).width()<1700){
		$('.sidebar').css({
			left:'10px'
		});
	}
	function sidebarFixed(){
		$sTop = $(document).scrollTop();
		if($sTop>573){
			$('.sidebar').css({
				position:'fixed',
				top:'100px'
			});
		}else{
			$('.sidebar').css({
				position:'absolute',
				top:'auto'
			});
		}
	}
	$(window).scroll(function(){
		sidebarFixed();
	});
	sidebarFixed();
	//控制part1部分显隐
	$('.list').on('mouseenter','li',function(){
		$(this).find('.cover').animate({
			opacity:1
		},500);
	});
	$('.list').on('mouseleave','li',function(){
		$(this).find('.cover').animate({
			opacity:0
		},500);
	});
	//控制part2部分切换效果
	cardToggle = function(){
		$('#part2 .item.hidden').removeClass('hidden').siblings().addClass('hidden');
	}
	cardInterval = setInterval('cardToggle()',5000);
		// 当鼠标悬浮时停止切换,移开继续切换
	$('#part2 .items').on('mouseover','.item',function(){
		clearInterval(cardInterval);
	});

	$('#part2 .items').on('mouseleave','.item',function(){
		cardInterval = setInterval('cardToggle()',5000);
	});
	
	// 按钮点击事件
	$('.btn').click(function(){
		openZoosUrl("chatwin","");return false;
	});
});
