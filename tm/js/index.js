/*
* @Author: gj
* @Date:   2017-04-29 13:04:33
* @Last Modified by:   gj
* @Last Modified time: 2017-04-29 14:24:57
*/

'use strict';
// $('.class')
// $('#id')
// $('div')
// $('function')
function $(selector,ranger=document){
	if(typeof selector=="string"){ 
		if(selector.charAt(0)=="."){
			return ranger.getElementsByClassName(selector.slice(1));
		}else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.slice(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
			return ranger.getElementsByTagName(selector);
		}
	}
	else if(typeof selector=="function"){
			window.onload=function(){
				selector();
			}
		}
	}

//获取对象的属性
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}

//获取设置某一个元素的内容
//html(obj[,content])
//obj 指定的对象
//[content]有，代表设置元素的内容
//没有，代表获取内容
function html(obj,content){
	if(content){
		obj.innerHTML=content;
	}else{
		return obj.innerHTML
	}
}