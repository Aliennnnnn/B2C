/*
* @Author: Administrator
* @Date:   2016-10-30 22:54:19
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-30 23:21:39
*/

'use strict';
$(function(){
	waterfall();
});

function waterfall(){
	var boxs = $('#main>div');
	var w = boxs.eq(0).outerWidth();
	var cols = Math.floor($(document).width()/w);

	$('#main').css({
		'width':cols*w,
		'margin':'0 auto'
	})


	//设置一个数组存放每一列的总高度
	var hArr = [];
	boxs.each(function(index,value){
		var h = boxs.eq(index).outerHeight();
		//把第一行图片的高度存进数组
		if( index<cols ){
			hArr.push(h);
		}else{
			//求出第一行最短的图片的高度及其index
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);

			$(value);//把DOM对象转变为jQuery对象

			$(value).css({
				'position':'absolute',
				'left':(w*minHIndex+33)+'px',
				'top':minH+'px'
			})
			//被添加的那列的高度加上新添加图片的高度
			hArr[minHIndex] += h;
		}
	})
}