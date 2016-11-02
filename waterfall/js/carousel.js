/*
* @Author: Administrator
* @Date:   2016-10-30 20:51:23
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-30 22:31:53
*/

'use strict';
$(function(){
	//将第一个图片复制并添加到队列最后
	var clone = $('.wrap li').first().clone();
	$('.list').append(clone);

	//点击prev触发函数
	var i = 0;
	var num = $('.list li').length;
	$('.prev').click(function(){
		i--;
		if( i==-1 ){
			$('.list').css({
				'left':-(num-1)*400
			})
			i = num - 2;
		}
		$('.list').stop().animate({
			left:-i*400
		},500)

		$('.dot li').eq(i).addClass('active').siblings().removeClass('active');		
	})

	//点击next触发函数
	$('.next').click(function(){
		moveR();
	})

	function moveR() {
		i++;
		if( i==num ){
			$('.list').css({
				'left':0
			})
			i = 1;
		}
		$('.list').stop().animate({
			left:-i*400
		},500)

		if( i==num-1 ){
			$('.dot li').eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$('.dot li').eq(i).addClass('active').siblings().removeClass('active');
		}
	}

	//鼠标悬浮在dot上切换图片
	$('.dot li').mouseover(function(){
		var index = $(this).index();
		$('.list').stop().animate({
			left:-index*400
		})
		$('.dot li').eq(index).addClass('active').siblings().removeClass('active');
	})

	//自动播放
	var timer = setInterval(function() {
		moveR();
	},1800)

	//鼠标悬浮在图片上停止播放
	$('.list').hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(function() {
			moveR();
		},2500)
	})
});