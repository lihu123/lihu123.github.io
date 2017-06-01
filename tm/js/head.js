/*
* @Author: gj
* @Date:   2017-04-29 14:18:02
* @Last Modified by:   gj
* @Last Modified time: 2017-05-29 01:09:29
*/

'use strict';

$(function(){
	//按需加载
	let boxover=$(".load");
	let wh=window.innerHeight;
	let arr=[];
	let boxs=Array.from(boxover);
	boxs.forEach(function(value,index,obj){
		arr.push(value.offsetTop);
	})

	//左固定定位
	let live=$(".live")[0];
	let livetops=live.offsetTop;
	let fixedleft=$(".fixedleft")[0];
	let fixedli=$("li",fixedleft);
	console.log(fixedli);

	//点击左侧栏
	let flag=true;
	let n=1;
	for(let i=1;i<fixedli.length-1;i++){
		fixedli[i].onclick=function(){
			if(flag){
				flag=false;
				fixedli[n].className="fli1 hot";
				fixedli[i].className="fli1";
				n=i;
				animate(document.body,{scrollTop:arr[i+1]-200},function(){
					flag=true;
				})
			}
		}
	}
	//返回顶部
	fixedli[fixedli.length-1].onclick=function(){
		animate(document.body,{scrollTop:0})
	}
	
	//顶部搜索栏
	let fixedtop=$(".fixedtop")[0];
	console.log(fixedtop)



	//滚动事件
	let a=1;
	window.onscroll=function(){
		let tops=document.body.scrollTop;
		//左侧栏显示
		if(tops>arr[0]){
			fixedleft.style.display="block";
		}else if(tops<arr[0]){
			fixedleft.style.display="none";
		}

		//加载图片
		for(let i=0;i<arr.length;i++){
			if(wh+tops>arr[i]+100){
				let a=$(".load")[i];
				let img=$("img",a);
				for(let j=0;j<img.length;j++){
					img[j].src=img[j].title;
				}
			}
		}
		//左侧栏颜色随高度变化
		for(let j=2;j<arr.length-2;j++){
			if(wh+tops>=arr[j]){
				// if(flag==true){
				fixedli[a].className="fli1 hot";
				fixedli[j-1].className="fli1";
				a=j-1;
				// }
			}
			//当高度小于第一块的高度是换颜色
			if(wh+tops<arr[2]-100){
				fixedli[1].className="fli1 hot";
			}

			//鼠标移入移除换颜色
			fixedli[j-1].onmouseover=function(){
				fixedli[j-1].className="fli1";
			}
			fixedli[j-1].onmouseout=function(){
				if((wh+tops>=arr[j])&&(wh+tops<=arr[j+1])){
					fixedli[j-1].className="fli1";
				}else{
					fixedli[j-1].className="fli1 hot";
				}
				
			}
		}
		//顶部搜索栏出现
		if(tops>=arr[0]){
			fixedtop.style.height="50px";
		}else if(tops<arr[0]){
			fixedtop.style.height="0";
		}

	}




	//banner图
	let list=$(".banner")[0];
	let photo=$(".photo",list)[0];
	let bannerimg=$("img",photo);
	let spor=$(".sporul",list)[0];
	let sporli=$("li",spor);

	list.onmouseover=function(){
		clearInterval(t);
	}
	list.onmouseout=function(){
		t=setInterval(fn,2000);
	}

		let index=0;
		for(let j=0;j<sporli.length;j++){
			sporli[j].onclick=function(){
				for(let e=0;e<bannerimg.length;e++){
					sporli[e].className=" ";
					bannerimg[e].style.opacity="0";
				}
				bannerimg[j].style.opacity="1";
				sporli[j].className="hot";

				index=j;
			}
		}

	let t=setInterval(fn,2000);
	function fn(){
				index++;
				if(index==bannerimg.length){
					index=0;
				}
				for(let i=0;i<bannerimg.length;i++){
					bannerimg[i].style.opacity="0";
					sporli[i].className=" ";
				}
				bannerimg[index].style.opacity="1"
				sporli[index].className="hot";
			}

	//右固定定位
	let fixedright=$(".fixed")[0];
	let winbottom=window.innerHeight;
	let num1=$(".box",fixedright)[0];
	let box11=$(".box1",fixedright)[0];

	num1.onmouseover=function(){
		box11.style.visibility="visible";
		box11.style.opacity="1";
		box11.style.transform="translateX(35px)";
	}
	num1.onmouseout=function(){
		box11.style.visibility="hidden";
		box11.style.opacity="0";
		box11.style.transform="";
	}
	let num3=$(".box3",fixedright);
	let box33=$(".conbox3",fixedright);
	for(let i=0;i<box33.length;i++){
	num3[i].onmouseover=function(){
		box33[i].style.visibility="visible";
		box33[i].style.opacity="1";
		box33[i].style.transform="translateX(35px)";
	}
	num3[i].onmouseout=function(){
		box33[i].style.visibility="hidden";
		box33[i].style.opacity="0";
		box33[i].style.transform="";
	}
	}

	let num8=$(".box8",fixedright)[0];
	let box88=$(".conbox8",fixedright)[0];
	console.log(box88)
	num8.onmouseover=function(){
		box88.style.visibility="visible";
		box88.style.opacity="1";
		box88.style.transform="translateX(35px)";
	}
	num8.onmouseout=function(){
		box88.style.visibility="hidden";
		box88.style.opacity="0";
		box88.style.transform="";
	}
	//点击右侧返回顶部
		let rightbottom=$(".box3",fixedright)[5];
		rightbottom.onclick=function(){
			animate(document.body,{scrollTop:0})
		}

	//文字轮播
	let textmove=$(".textmove");
	for(let i=0;i<textmove.length;i++){
		let texta=$("a",textmove[i]);
			let a1=0,a2=0;
			for(let i=0;i<texta.length;i++){
				if(i==0){
					continue;
				}
				texta[i].style.top="30px";
			}

			let l=setInterval(textmove1,3000)
			function textmove1(){
				a2++;
				if(a2==texta.length){
					a2=0;
				}	
				texta[a2].style.top="30px";
				animate(texta[a1],{top:-20});
				animate(texta[a2],{top:7});
				a1=a2;
			}
	}
	console.log(textmove)
	
	
})