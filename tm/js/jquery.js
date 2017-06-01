/*
* @Author: gj
* @Date:   2017-05-29 01:09:51
* @Last Modified by:   gj
* @Last Modified time: 2017-05-31 09:01:06
*/

'use strict';
$(function(){
	let boxover=$(".load");
	let wh=window.innerHeight;
	let arr=[];
	let boxs=Array.from(boxover);
	boxs.forEach(function(value,index,obj){
		arr.push(value.offsetTop);
	})

	//左固定定位
	let live=$(".live");
	let livetops=live.offsetTop;
	let fixedleft=$(".fixedleft");
	let fixedli=fixedleft.find("li");

	let flag=true;
	let n=1;
	let a=1;
	fixedli.click(function(){
		if(flag){
			flag=false;
			$(fixedli).eq(n).addClass('hot');
			$(this).removeClass('hot');
			let index=$(this).index();
			n=index;
			$('body').animate({scrollTop:arr[index+1]-200},function(){
				flag=true;
			})
		}
	})
	//返回顶部
	fixedli.last().click(function(){
		$("body").animate({scrollTop:0})
	})
	//顶部搜索栏
	let fixedtop=$(".fixedtop");


	$(window).scroll(function(){
		let tops=document.body.scrollTop;
		//左侧栏显示
		if(tops>arr[0]){
			fixedleft.css("display","block");
		}else if(tops<arr[0]){
			fixedleft.css("display","none");
		}

		arr.forEach(function(value,index){
			if(wh+tops>value+100){
				let a=boxover.eq(index).find('img')
				for(let i=0;i<a.length;i++){
					a[i].src=a[i].title;
				}
				
			}
		})

		//左侧栏颜色随高度变化
		for(let j=2;j<arr.length-2;j++){
			if(wh+tops>=arr[j]){
				fixedli.eq(a).addClass('hot');
				fixedli.eq(j-1).removeClass('hot');
				a=j-1;
			}
			//当高度小于第一块的高度是换颜色
			if(wh+tops<arr[2]-100){
				fixedli.first().addClass('hot');
			}

			//鼠标移入移除换颜色
			fixedli.eq(j-1).mouseover(function(){
				$(this).removeClass('hot');
			})
			fixedli.eq(j-1).mouseout(function(){
				if((wh+tops>=arr[j])&&(wh+tops<=arr[j+1])){
					$(this).removeClass("hot");
				}else{
					$(this).addClass("hot");
				}	
			})
		}


		//顶部搜索栏出现
		if(tops>=arr[0]){
			fixedtop.css("height","50px")
		}else if(tops<arr[0]){
			fixedtop.css("height","0")
		}
			
	})



		//banner图
	let list=$(".banner");
	let photo=list.find(".photo");
	let bannerimg=photo.find("img");
	let imgs=Array.from(bannerimg)
	let spor=list.find(".sporul");
	let sporli=spor.find("li");

	list.mouseover(function(){
		clearInterval(t);
	})
	list.mouseout(function(){
		t=setInterval(fn,2000);
	})

		let index=0;
		sporli.click(function(){
				imgs.forEach(function(value,index){
					bannerimg.eq(index).css("opacity","0");
					sporli.eq(index).removeClass('hot');
				})
				let num=$(this).index()
				$(this).addClass("hot");
				bannerimg.eq(num).css("opacity","1");
				index=num;
			})
				
		console.log(bannerimg.length)
		let t=setInterval(fn,2000);
		function fn(){
				index++;
				if(index==bannerimg.length){
					index=0;
				}
				imgs.forEach(function(value,index){
					bannerimg.eq(index).css("opacity","0");
					sporli.eq(index).removeClass('hot');
				})
				bannerimg.eq(index).css("opacity","1");
				sporli.eq(index).addClass('hot');
			}



		//右固定定位
	let fixedright=$(".fixed");
	let winbottom=window.innerHeight;
	let num1=fixedright.find(".box");
	let box11=fixedright.find(".box1");
	console.log(box11)
	num1.hover(function(){
		box11.css({visibility:"visible",opacity:"1",transform:"translateX(35px)"})
	},function(){
		box11.css({visibility:"hidden",opacity:"0",transform:""});
	})
	let num3=fixedright.find(".box3");
	num3.hover(function(){
		console.log($(this).next(".conbox3"))
		$(this).next(".conbox3").css({visibility:"visible",opacity:"1",transform:"translateX(35px)"})
	},function(){
		$(this).next(".conbox3").css({visibility:"hidden",opacity:"0",transform:""});
	})

	let num8=fixedright.find(".box8");
	let box88=fixedright.find(".conbox8");
	num8.hover(function(){
		box88.css({visibility:"visible",opacity:"1",transform:"translateX(35px)"})
	},function(){
		box88.css({visibility:"hidden",opacity:"0",transform:""});
	})


	//文字轮播
	let textmove=$(".textmove");
	for(let i=0;i<textmove.length;i++){
		let texta=$(textmove[i]).find("a");
			let a1=0,a2=0;
			for(let i=0;i<texta.length;i++){
				if(i==0){
					continue;
				}
				texta.eq(i).css("top","30px");
			}

			let l=setInterval(textmove1,3000)
			function textmove1(){
				a2++;
				if(a2==texta.length){
					a2=0;
				}	
				texta.eq(a2).css("top","30px");
				texta.eq(a1).animate({"top":"-20px"});
				texta.eq(a2).animate({"top":"7px"});
				a1=a2;
			}
	}
	
	//右固定定位
	let right=$(".fixed");
	let top=right.find(".box3");
	top.last().click(function(){
		$("body").animate({scrollTop:0})
	})
})