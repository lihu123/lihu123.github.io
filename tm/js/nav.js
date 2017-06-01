// /*
// * @Author: gj
// * @Date:   2017-04-29 16:07:36
// * @Last Modified by:   gj
// * @Last Modified time: 2017-05-07 12:45:25
// */

// 'use strict';	
//手机版
	let head=$(".head")[0];
	let right=$(".right",head)[0];
	let text=$(".text",right)[0];
	let text1=$(".text1",text)[0];
	let div=$("div",text1)[0];
	text1.onmouseover=function(){
		div.style.display="block";
	}
	text1.onmouseout=function(){
		div.style.display="none";
	}

	//网站导航
	let text5=$(".text5",right)[0];
	let nav=$(".nav",text5)[0];
	text5.onmouseover=function(){
		this.style.background="#fff";
		nav.style.display="block";
		this.style.borderLeft="1px solid #e5e5e5";
		this.style.borderRight="1px solid #e5e5e5";
		this.style.borderBottom="1px solid #e5e5e5";
	}
	text5.onmouseout=function(){
		this.style.background="";
		nav.style.display="none";
		this.style.borderLeft="";
		this.style.borderRight="";
		this.style.borderBottom="";
	}
	//商家支持
	let text4=$(".text4",right)[0];
	let div1=$("div",text4)[0];
	text4.onmouseover=function(){
		text4.style.background="#fff";
		div1.style.display="block";
		this.style.borderLeft="1px solid #e5e5e5";
		this.style.borderRight="1px solid #e5e5e5";
		this.style.borderBottom="1px solid #e5e5e5";
	}
	text4.onmouseout=function(){
		text4.style.background="";
		div1.style.display="none";
		this.style.borderLeft="";
		this.style.borderRight="";
		this.style.borderBottom="";
	}


	//我的淘宝
	let right2=$(".right2",head)[0];
	let rtext=$(".text",right2)[0];
	let rtext1=$(".text1",rtext)[0];
	let box=$(".box",rtext1)[0];
	rtext1.onmouseover=function(){
		this.style.background="#fff";
		this.style.borderLeft="1px solid #e5e5e5";
		this.style.borderRight="1px solid #e5e5e5";
		this.style.borderBottom="1px solid #e5e5e5";
		box.style.display="block";
	}
	rtext1.onmouseout=function(){
		this.style.background="";
		box.style.display="none";
		this.style.borderLeft="";
		this.style.borderRight="";
		this.style.borderBottom="";
	}

	//收藏夹
	let rtext4=$(".text4",rtext)[0];
	let box2=$(".box",rtext4)[0];
	rtext4.onmouseover=function(){
		this.style.background="#fff";
		box2.style.display="block";
		this.style.borderLeft="1px solid #e5e5e5";
		this.style.borderRight="1px solid #e5e5e5";
		this.style.borderBottom="1px solid #e5e5e5";
	}
	rtext4.onmouseout=function(){
		this.style.background="";
		box2.style.display="none"
		this.style.borderLeft="";
		this.style.borderRight="";
		this.style.borderBottom="";
	}



	//导航
	// let nav1=$(".navtop")[0];
	// let ul=$(".navul",nav1)[0];
	// let li=$("li",ul);
	// let img=$("img",ul);
	// for(let i=0;i<li.length;i++){
	// 	li[i].onmouseover=function(){
	// 		img[i].style.transform='translateY(-14px)';
	// 	}
	// 	li[i].onmouseout=function(){
	// 		img[i].style.transform='';
	// 	}
	// }
	// 
	// 
	// 
	

	// //左侧列表
	
	// let listul=$(".list",list)[0];
	// let listli=$("li",listul);
	// let listdiv=$("div",listul);
	// for(let i=0;i<listli.length;i++){
	// 	listli[i].onmouseover=function(){
	// 		listdiv[i].style.display="block";
	// 	}
	// 	listli[i].onmouseout=function(){
	// 		listdiv[i].style.display="none";
	// 	}
	// }
	

	// //直播
	// let live=$(".live")[0];
	// let liveright=$(".right",live)[0];
	// let rightbox=$(".box",liveright);
	// let conbox=$(".conbox",liveright);
	// for(let i=0;i<conbox.length;i++){
	// 	rightbox[i].onmouseover=function(){
	// 		conbox[i].style.opacity="1";
	// 	}
	// 	rightbox[i].onmouseout=function(){
	// 		conbox[i].style.opacity="0";
	// 	}
	// }

	//fashion
	// let fashion=$(".fashion")[0];
	// let middlea=$("a",fashion);
	// let middleimg=$(".img",fashion);
	// for(let i=0;i<middleimg.length;i++){
	// 	middleimg[i].onmouseover=function(){
	// 		this.style.transform='scale(1.1,1.1)'
	// 	}
	// 	middleimg[i].onmouseout=function(){
	// 		this.style.transform='scale(1,1)'
	// 	}
	// }

	// //美丽人生
	// let beautiful=$(".beautiful")[0];
	// let beaubox=$(".box",beautiful);
	// let beauimg=$(".img",beautiful);
	// for(let i=0;i<beauimg.length;i++){
	// 	beaubox[i].onmouseover=function(){
	// 		beauimg[i].style.transform='translateX(-5px)'
	// 	}
	// 	beaubox[i].onmouseout=function(){
	// 		beauimg[i].style.transform='translateX(0)'
	// 	}
	// }

	// //潮电酷玩
	// let chao=$(".chao")[0];
	// let chaobox=$(".box",chao);
	// let chaoimg=$(".img",chao);
	// for(let i=0;i<chaoimg.length;i++){
	// 	chaobox[i].onmouseover=function(){
	// 		chaoimg[i].style.transform='translateX(-5px)'
	// 	}
	// 	chaobox[i].onmouseout=function(){
	// 		chaoimg[i].style.transform='translateX(0)'
	// 	}
	// }

	// //居家
	// let home=$(".home")[0];
	// let homebox=$(".box",home);
	// let homeimg=$(".img",home);
	// for(let i=0;i<homeimg.length;i++){
	// 	homebox[i].onmouseover=function(){
	// 		homeimg[i].style.right='5px'
	// 	}
	// 	homebox[i].onmouseout=function(){
	// 		homeimg[i].style.right='0'
	// 	}
	// }


	// //爱巢
	// let house=$(".house")[0];
	// let housebox=$(".box",house);
	// let houseimg=$(".img",house);
	// for(let i=0;i<houseimg.length;i++){
	// 	housebox[i].onmouseover=function(){
	// 		houseimg[i].style.transform='translateX(-5px)'
	// 	}
	// 	housebox[i].onmouseout=function(){
	// 		houseimg[i].style.transform='translateX(0)'
	// 	}
	// }

	// //户外
	// let outdoors=$(".outdoors")[0];
	// let outbox=$(".box",outdoors);
	// let outimg=$(".img",outdoors);
	// for(let i=0;i<outimg.length;i++){
	// 	outbox[i].onmouseover=function(){
	// 		outimg[i].style.transform='translateX(-5px)'
	// 	}
	// 	outbox[i].onmouseout=function(){
	// 		outimg[i].style.transform='translateX(0)'
	// 	}
	// }

	// //亲子
	// let qin=$(".qin")[0];
	// let qinbox=$(".box",qin);
	// let qinimg=$(".img",qin);
	// for(let i=0;i<qinimg.length;i++){
	// 	qinbox[i].onmouseover=function(){
	// 		qinimg[i].style.transform='translateX(-5px)'
	// 	}
	// 	qinbox[i].onmouseout=function(){
	// 		qinimg[i].style.transform='translateX(0)'
	// 	}
	// }
	// 
	

	// //banner内部文字颜色
	// let bannercon=$(".con",list)[0];
	// let conbox=$(".box",bannercon)[0];
	// let aa=$(".a",conbox);
	// let text=Array.from(aa);//把获取到的.a转化为数组

	// //获取数组里的随机数，获取到的是aa这个值
	// function randomEle(arr,ele){
	// 	let newarr=[];
	// 	for(let i=0;i<ele;i++){
	// 		let index=Math.floor(Math.random()*arr.length);
	// 		while(newarr.includes(arr[index])){
	// 			index=Math.floor(Math.random()*arr.length);
	// 		}
	// 		newarr.push(arr[index]);
	// 	}
	// 	return newarr;
	// }
	// //调用函数获取取到的随机数，也就是获取到的aa
	// let num=randomEle(aa,28);
	// console.log(num);
	// //得到随机的20个aa,num代表aa,直接修改行内样式里的颜色
	// for(let i=0;i<num.length;i++){
	// 	num[i].style.color="#E54077"
	// }