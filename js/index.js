window.onload=function(){
	let shoplist=document.getElementsByClassName("shop-list")[0];
	//就算只有一个元素也要写下标
	let lis=shoplist.getElementsByTagName("li");
	let item=document.getElementsByClassName("item");
	let circle=document.getElementsByClassName("circle")[0];
	let circle1=circle.getElementsByClassName("circle1");
	let bannerbox=document.getElementsByClassName("banner-box")[0];
	let imgs=document.getElementsByClassName("img-1");

	let banner=$(".banner_bottom")[0];
	
///////////////////////////////////////////////////////////////////侧导航
	//第一种：lis 对应  item   //第二种：先找lis 再找它里面的item
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display="block";
			//item[i].className="item block";
			//animate(item[i],{opacity:1});
		}
		lis[i].onmouseout=function(){
			item[i].style.display="none";
			//item[i].className="item";
			//animate(item[i],{opacity:0});
		}
	}
		
////////////////circle//////////////////////////////////轮播图：点击点出现对应的图片
	
	//第一种：所有的消失，对应的显示，也可以是z-index/opacity（操作所有图片）
	for(let i=0;i<circle1.length;i++){	
		circle1[i].onclick=function(){
			for(let j=0;j<imgs.length;j++){
				//imgs[j].style.display="none";
				animate(imgs[j],{opacity:0});
				circle1[j].style.background="rgba(0,0,0,0.3)";	
				circle1[j].style.borderRadius="50%";	
			}
			//imgs[i].style.display="block";
			animate(imgs[i],{opacity:1});
			circle1[i].style.background="rgba(255, 255, 255, 0.5)";		
			circle1[i].style.borderRadius="50%";
///////////////////////////////////////////////////////////////////////背景换色
			switch(i){
			case 0:
				banner.style.background="#F9CD22";
				break;
			case 1:
				banner.style.background="#850B2A";
				break;
			case 2:
				banner.style.background="#AEABAC";
				break;
			case 3:
				banner.style.background="#E8E8E8";
				break;
			case 4:
				banner.style.background="#FF6B40";
				break;
			case 5:
				banner.style.background="#7B12E5";
				break;
		}				
		}
	}
	// //第二种：对应的显示，除了要显示的其它所有的消失（操作所有图片）
	// for(let i=0;i<circle1.length;i++){	
	// 	circle1[i].onmouseover=function(){			
	// 		imgs[i].style.display="block";
	// 		for(let j=0;j<imgs.length;j++){
	// 			if(i!=j){
	// 				imgs[j].style.display="none";//除了i以外，其它全部隐藏
	// 			}	
	// 		}
	// 	}
	// }
	// //第三种：把窗口当前显示的none，把要显示的block（只需要操作两张图）	
	//不能用var，会越界，只有一个临界值，let会保留每次循环的结果，
	//如果要用var，要给对象添加属性：对象名.index=i
	// let now=0;//当前窗口
	// for(let i=0;i<circle1.length;i++){
	// 	circle1[i].onmouseover=function(){	
	// 		imgs[now].style.display="none";
	// 		imgs[i].style.display="block";
	// 		now=i;//更新now
	// 	}
	// }
	// //第四种：var
	//不能用var，会越界，只有一个临界值，let会保留每次循环的结果，
	//如果要用var，要给对象添加属性：对象名.index=i
	// let now=0;//记录窗口显示的下表
	// for(var i=0;i<circle1.length;i++){
	// 	circle1[i].index=i;//给对象添加属性
	// 	circle1[i].onclick=function(){	
	// 		imgs[now].style.display="none";
	// 		imgs[this.index].style.display="block";
	// 		now=this.index;
	// 	}
	// }
	// for(var i=0;i<circle1.length;i++){
	// 	circle1[i].index=i;	
	// 	circle1[i].onclick=function(){
	// 		for(let j=0;j<imgs.length;j++){
	// 				imgs[j].style.display="none";//除了i以外，其它全部隐藏
	// 		}
	// 		imgs[this.index].style.display="block";
	// 	}
	// }
	// // 第五种：闭包函数
	// let now=0;
	// for(var i=0;i<circle1.length;i++){
	// 	circle1[i].index=i;
	// 	circle1[i].onclick=(function(i){
	// 		return function(){
	// 			imgs[now].style.display="none";
	// 			imgs[i].style.display="block";
	// 			now=i;	
	// 		}
	// 	})(i)
	// }
////////////////////////////////////////////////////////////自动轮播：时间函数
////////////////////////////////////////////////////////////点击圆点，变样式
	let t;
	let num=0;//记录窗口显示的下表
	t=setInterval(move, 2000);
	function move(){
		num++;
		if(num==imgs.length){
			num=-1;
			move();
		}	
		for(let i=0;i<imgs.length;i++){
			//imgs[i].style.display="none";
			animate(imgs[i],{opacity:0});
			circle1[i].style.background="rgba(0,0,0,0.3)";	
			circle1[i].style.borderRadius="50%";	
		}
		//imgs[num].style.display="block";
		animate(imgs[num],{opacity:1});
		circle1[num].style.background="rgba(255, 255, 255, 0.5)";		
		circle1[num].style.borderRadius="50%";
		switch(num){
			case 0:
				banner.style.background="#F9CD22";
				break;
			case 1:
				banner.style.background="#850B2A";
				break;
			case 2:
				banner.style.background="#AEABAC";
				break;
			case 3:
				banner.style.background="#E8E8E8";
				break;
			case 4:
				banner.style.background="#FF6B40";
				break;
			case 5:
				banner.style.background="#7B12E5";
				break;
		}		
	}
///////////////////////////////////////////////////////////鼠标移入:不动/鼠标移出:动
	
	banner.onmouseover=function(){
		clearInterval(t); 
		//num=i;
	}
	banner.onmouseout=function(){
		t=setInterval(move, 2000);
	}
///////////////////////////////////////////////////////////////////锚链接
	let wH=innerHeight;
	let mao=document.querySelector(".mao");
	let liM=$("li",mao);
	let LArr=Array.from(liM);
	console.log(LArr);//////////////8个li
	let floors=document.querySelectorAll(".floor");
	console.log(floors);/////////////////7个floors
	let colors=["#64C333","#F15453","pink","skyblue","red","#6262C4","#F5953E","#39D8F7"];
	let flag=true;
	let floorsArr=[];


	floors.forEach((element)=>{
		floorsArr.push(element.offsetTop);
	});
	console.log(floorsArr);
////////////////////////////////////////////////////////////////////点击出现相应的模块
	LArr.forEach((element,index)=>{
		element.onclick=function(){
			flag=false;/////////////////////////////////////////////////？？？？？？？？？？
			// document.documentElement.scrollTop=floorsArr[index];
			// --过渡只能设置给动画，所以不能使用上面这种方法
			animate(document.documentElement,{scrollTop:floorsArr[index]},function(){
				flag=true;
			});			
			for(let i=0;i<colors.length;i++){
				LArr[i].style.background="#666666";	//////////必须要写原来的颜色？？？？？	
			}
			element.style.background=colors[index];
		}
	});
////////////////////////////////////////////////////////////////////滚动页面，加载图片和锚链接自动换色
	let search=document.querySelector(".search");
	console.log(search);
	// let flag=true;
	window.onscroll=function(){
		if(flag==true){
			let scrolls=document.documentElement.scrollTop;
			console.log(scrolls)
			floorsArr.forEach((value,index)=>{
				if(wH+scrolls>=value+100){
					let imgs=floors[index].getElementsByTagName("img");
					console.log(imgs);
					for(let i=0;i<imgs.length;i++){
						imgs[i].src=imgs[i].getAttribute("srcPath");
					}			
					for(let i=0;i<colors.length;i++){
						LArr[i].style.background="#666666";		
					}
					LArr[index].style.background=colors[index];	///////////////////////index			
				}

			
			});
		}
		let flag1=true;
		if(document.documentElement.scrollTop>=1199){
			// if(flag1){
				// flag1=false;
				// animate(search,{display:"block"});
				animate(search,{top:0},function(){
					// flag1=true;
				});
				
			// }
					
		}
		if(document.documentElement.scrollTop<1199){
			// if(!flag1){
				// flag1=true;
				// animate(search,{display:"none"});
				animate(search,{top:-50},function(){
					// flag1=false;
				});
				
			// }
				
		}
		
			
		
	}

//////////////////////////////////////////////////////////我的淘宝
	let my=$(".head-right-1")[0];
	let baby=$(".baby")[0];
	let coll=$(".coll")[0];
	let baby1=$(".baby1")[0];
	my.onmouseover=function(){
		baby.style.display="block";
	}
	my.onmouseout=function(){
		baby.style.display="none";
	}
	coll.onmouseover=function(){
		baby1.style.display="block";
	}
	coll.onmouseout=function(){
		baby1.style.display="none";
	}
	let phone=$(".phone-erweima")[0];
	let yinying=$(".shouji-yinying")[0];
	phone.onmouseover=function(){
		yinying.style.display="block";
	}
	phone.onmouseout=function(){
		yinying.style.display="none";
	}
	let shangjia=$(".head-right-11")[0];
	let shangjia_shop=$(".shangjia-shop")[0];
	shangjia.onmouseover=function(){
		shangjia_shop.style.display="block";
	}
	shangjia.onmouseout=function(){
		shangjia_shop.style.display="none";
	}

///////////////////////////////////////////////////////////////////右边
	let quanyi_box=document.querySelector(".quanyi-box");
	let quanyi=document.querySelector(".quanyi");
	quanyi_box.onmouseover=function(){
		quanyi.style.display="block";
		animate(quanyi,{left:-100});
	}
	quanyi_box.onmouseout=function(){
		quanyi.style.display="none";
		animate(quanyi,{left:-140});
	}

	let pinpai_box=document.querySelector(".pinpai-box");
	let pinpai=document.querySelector(".pinpai");
	pinpai_box.onmouseover=function(){
		pinpai.style.display="block";
		animate(pinpai,{left:-100});
	}
	pinpai_box.onmouseout=function(){
		pinpai.style.display="none";
		animate(pinpai,{left:-140});
	}


	let collect_box=document.querySelector(".collect-box");
	let collect=document.querySelector(".collect");
	collect_box.onmouseover=function(){
		collect.style.display="block";
		animate(collect,{left:-100});
	}
	collect_box.onmouseout=function(){
		collect.style.display="none";
		animate(collect,{left:-140});
	}

	let chongzhi_box=document.querySelector(".chongzhi-box");
	let chongzhi=document.querySelector(".chongzhi");
	chongzhi_box.onmouseover=function(){
		chongzhi.style.display="block";
		animate(chongzhi,{left:-100});
	}
	chongzhi_box.onmouseout=function(){
		chongzhi.style.display="none";
		animate(chongzhi,{left:-140});
	}

	let kanguo_box=document.querySelector(".kanguo-box");
	let kanguo=document.querySelector(".kanguo");
	kanguo_box.onmouseover=function(){
		kanguo.style.display="block";
		animate(kanguo,{left:-100});
	}
	kanguo_box.onmouseout=function(){
		kanguo.style.display="none";
		animate(kanguo,{left:-140});
	}

	let APP_box=document.querySelector(".APP-box");
	let APP=document.querySelector(".APP");
	APP_box.onmouseover=function(){
		APP.style.display="block";
	}
	APP_box.onmouseout=function(){
		APP.style.display="none";
	}

	let TOP_box=document.querySelector(".TOP-box");
	TOP_box.onclick=function(){
		animate(document.documentElement,{scrollTop:0});
	}

	
}
