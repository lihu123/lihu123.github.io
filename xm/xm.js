/*
* @Author: lenovo
* @Date:   2017-05-07 09:53:19
* @Last Modified by:   lenovo
* @Last Modified time: 2017-05-15 11:54:46
*/

'use strict';
// 头部开始
window.onload=function(){
		let  bc=document.getElementsByClassName("header");
		let  box=document.getElementsByClassName("tc");
		for(let i=0;i<bc.length;i++){
			bc[i].onmouseenter=function(){
				box[i].style.height="100px";
			}
			bc[i].onmouseleave=function(){
				box[i].style.height="0px";
			}
		}
		let current=0;
		let next=0;
// 头部结束
// 导航栏开始
		let  a=document.getElementsByClassName("nav_1a");
		let  b=document.getElementsByClassName("xiala");
		for(let i=0;i<a.length;i++){
			a[i].onmouseenter=function(){
				b[i].style.height="245px";
			}
			a[i].onmouseleave=function(){
				b[i].style.height="0px";
			}
		}
// 导航栏结束
// 轮播图  开始
let lunbo=document.getElementById("lunbo");
	let banner=document.getElementsByClassName("banner");
	let lunboa = document.getElementsByClassName("lunbodian")[0];
	let dian = lunboa.getElementsByTagName("li");
			let index=0;
			let t;
			t=setInterval(lunbotu,2000);
			
			function lunbotu(){
				index++;
				if(index==banner.length){
					index=0;
				}
				for(let i=0;i<banner.length;i++){
					banner[i].style.display="none";
					dian[i].className=""
				}
				dian[index].className="dian";
				banner[index].style.display="block"
			}
			//轮播图
	let bannerleft=document.getElementsByClassName("bannerleft_a");
	let bannerright=document.getElementsByClassName("bannerright");
		for(let i=0;i<bannerleft.length;i++){
			bannerleft[i].onmouseover=function(){
				bannerright[i].style.display="block";
			}
			bannerleft[i].onmouseout=function(){
				bannerright[i].style.display="none";
			}
		}
// 轮播图  结束
// 小米明星单品  开始
	let imgBox=document.getElementsByClassName("imgBox")[0];
	let lis=imgBox.getElementsByTagName("li");
	let widths=parseInt(getComputedStyle(lis[0],null).width)+parseInt(getComputedStyle(lis[0],null).marginRight);
	
	t=setInterval(move,2000);
	function move(){
		animate(imgBox,{left:-widths},function(){
			
				let first=imgBox.firstChild;
				imgBox.appendChild(first);
				imgBox.style.left=0;
		})
	}
// 为你推荐 开始
	let imgBox1=document.getElementsByClassName("imgBox1")[0];
		let imgBox1W=imgBox1.offsetWidth;
	let lis1=imgBox1.getElementsByTagName("li");
	console.log(lis1)
	 let widthf=parseInt(getComputedStyle(lis[0],null).width)+parseInt(getComputedStyle(lis[0],null).marginRight);
	
	t=setInterval(move1,2000);
	function move1(){
		animate(imgBox1,{left:-widths},function(){
			
				let first=imgBox1.firstElementChild;
				console.log(first)
				imgBox1.appendChild(first);
				imgBox1.style.left=0;
		})
	}

		}
	
	



