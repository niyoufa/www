if(!is_pc()){ 
} 
//否则，加载PC页面
else{
	//window.location.href = "huixian/html/test1.html";
	//margin(上右下左)
	var xfbox = $C(document.body,
					{
							width: '1400px',
							position: 'fixed',
							top: '0px',
							left: '0px',
							height: '90px',
							background:'rgba(255,255,255,1)',	
							zIndex: 20
					},
					'div');	
	
	var imgtop = $C(xfbox,
					{
							display: 'table',
							width: '1400px',
							marginTop: '0px',
							marginLeft: 'auto',
							marginRight: 'auto',
							height: '90px'
					},
					'div');	
					
	var img = $C(imgtop,
					{
							display:'inline',
							float: 'left',
							marginLeft: '100px',
							paddingTop: '0px',
							paddingLeft:'0px',
							zIndex: 15,
							overflow: 'hidden',
							width: '47px',
							height: '90px',
							id: 'img'
					},
					'div');	
	
	var djp = $C(img,
					{
							marginTop: '12px',
							src:'images/logo.gif',
							height: '66px',
							width: '47px'
					},
					'img');	
					
	var aa1 = $C(imgtop,
					{
							width: '1000px',
							height: '90px',
							display:'inline',
							marginRight: '80px',							
							float: 'right',
							paddingRight: '0px',
							paddingTop: '0px'
					},
					'div');	
	
	var a1 = $C(aa1,
					{
							display: 'inline-block',
							lineHeight: '20px',
							height: '20px',
							color: '#585858',
							textDecoration: 'none',
							paddingTop: '35px',
							paddingLeft: '35px',
							fontSize: '20px',
							fontWeight: 'normal',
							href: 'index.html',
							zIndex: 15,
							i: '首页'
					},
					'a');	

	var a2 = $C(aa1,
					{
							display: 'inline-block',
							lineHeight: '20px',
							paddingLeft: '85px',							
							height: '20px',
							color: '#585858',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							href: 'index.html#main3',
							zIndex: 15,
							i: '下单流程'
					},
					'a');	
					
	var a3 = $C(aa1,
					{
							display: 'inline-block',
							lineHeight: '20px',
							paddingLeft: '85px',							
							height: '20px',
							color: '#429acc',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							zIndex: 15,
							i: '加入我们'
					},
					'a');
					
	var a4 = $C(aa1,
					{
							display: 'inline-block',
							lineHeight: '20px',
							paddingLeft: '85px',							
							height: '20px',
							color: '#585858',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							href: 'introduce.html',
							zIndex: 15,
							i: '联系我们'
					},
					'a');					
					
	var djptop1 = $C(aa1,
					{
							display: 'inline-block',
							src:'images/phone.gif',
							paddingLeft: '165px',
							marginBottom:'-7.5px',
							height: '35px',
							width: '204px'
					},
					'img');
	
	var lltop1 = $C(aa1,
					{
							display: 'inline-block',
							lineHeight: '24px',
							height: '24px',
							width: '185px',
							color: '#2e90c8',
							textDecoration: 'none',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: '24px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '400-661-2061'
					},
					'label');	
	
	var main1 = $C(document.body,
					{
							position:'table',
							margin: 'auto',
							fontFamily:'"微软雅黑", "Hiragino Sans GB", "WenQuanYi Micro Hei", Verdana, Arial',							
							width: '1400px',
							height: '2715px',
							background:'white'
					},
					'div');											

	var footer = $C(document.body,
				{
						width: '1140px',
						position: 'absolute',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '0px',
						height: '44px',
						background: '#429acc',	
						lineHeight: '12px',
						height: '44px',
						color: 'white',
						paddingTop: '16px',
						fontSize: '12px',
						fontWeight: 'normal',
						i: 'copyright © 2016&nbsp;&nbsp;&nbsp;&nbsp;上海匠鲜网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备16003628',
						textAlign: 'center',
						zIndex: 20
				},
				'div');			
		
	var w = document.body.clientWidth;
	var h = document.body.clientHeight;
		
	$(function(){
		w = document.documentElement.clientWidth;
		h = document.documentElement.clientHeight;		
		var w1 = w - 50;
		var img_pl = w*80/1400;	
		var a2_pl = w*85/1400;
		var djp_pl = w*100/1400;
		var djp_w = djp_pl + 39;
		var aa1_w = 500 + a2_pl*3 + djp_w;
		console.log(w + " + " + h);	
		//$(a2).css("href", "#main3");
		//$(main1).css("width", w);
		//$(main2).css("width", w);
		//$(main3).css("width", w);
		if(w < 1400 && w > 980){
			console.log(aa1_w + " + " + a2_pl);
			$(imgtop).css("width", w);
			$(xfbox).css("width", w);
			$(footer).css("width", w);
			$(img).css("marginLeft", img_pl);
			$(aa1).css("width", aa1_w);
			$(aa1).css("marginRight", img_pl);
			$(a2).css("paddingLeft", a2_pl);	
			$(a3).css("paddingLeft", a2_pl);
			$(a4).css("paddingLeft", a2_pl);
			$(djptop1).css("paddingLeft", djp_pl);	
			$(djptop1).css("width", djp_w);	
			$(main1).css("width", w);
		}
		else if(w >=1400){
			w1 = 1400 - 50;
			img_pl = 100;
			aa1_w = 1000;
			a2_pl = 85;
			djp_pl = 165;
			djp_w = 204;	
			$(imgtop).css("width", "1400px");
			$(xfbox).css("width", w);
			$(footer).css("width", w);
			$(img).css("marginLeft", "100px");
			$(aa1).css("width", "1000px");
			$(aa1).css("marginRight", "100px");
			$(a2).css("paddingLeft", "85px");	
			$(a3).css("paddingLeft", "85px");
			$(a4).css("paddingLeft", "85px");
			$(djptop1).css("paddingLeft", "165px");	
			$(djptop1).css("width", "204px");	
			$(main1).css("width", "1400px");			
		}	
		else{
			w1 = 980 - 50;
			img_pl = 980*50/1400;
			a2_pl = 980*85/1400;
			djp_pl = 980*80/1400;
			djp_w = djp_pl + 39;
			aa1_w = 500 + a2_pl*3 + djp_w;
			console.log(aa1_w + " + " + a2_pl);				
			$(imgtop).css("width", "980px");
			$(xfbox).css("width", "980px");
			$(footer).css("width", "980px");
			$(main1).css("width", "980px");	
			$(img).css("marginLeft", img_pl);		
			$(aa1).css("width", aa1_w);
			$(aa1).css("marginRight", img_pl);
			$(a2).css("paddingLeft", a2_pl);
			$(a3).css("paddingLeft", a2_pl);
			$(a4).css("paddingLeft", a2_pl);
			$(djptop1).css("paddingLeft", djp_pl);	
			$(djptop1).css("width", djp_w);
			$(document.body).css("width","980px");			
		}		
	
		var xfbox_resize = function(){
			w = document.documentElement.clientWidth;
			console.log("宽度：" + w);
			h = document.documentElement.clientHeight;			
			w1 = w - 50;
			img_pl = w*100/1400;
			a2_pl = w*85/1400;
			djp_pl = w*100/1400;
			djp_w = djp_pl + 39;	
			aa1_w = 500 + a2_pl*3 + djp_w;
			var single_div_w = 1400;
			var bg_position = (single_div_w - 1400)/2;	
			var ll1_l = (single_div_w - 240)/2;
			var l21_l = (single_div_w - 880)/2;
			if(w < 1400 && w > 980){
				single_div_w = w;
				console.log(single_div_w);
				bg_position = (single_div_w - 1400)/2;
				ll1_l = (single_div_w - 240)/2;
				l21_l = (single_div_w - 880)/2;
				img_pl = w*100/1400;
				a2_pl = w*85/1400;
				djp_pl = w*100/1400;
				djp_w = djp_pl + 39;	
				aa1_w = 500 + a2_pl*3 + djp_w;
				$(imgtop).css("width", single_div_w);	
				$(xfbox).css("width", single_div_w);
				$(main1).css("width", single_div_w);
				$(main1).css("marginLeft", "0px");
				$(main1).css("marginRight", "0px");				
				$(footer).css("width", single_div_w);				
				$("#single_div1").css("width", single_div_w);
				$("#single_div1").css("backgroundPosition", bg_position + "px 90px");
				$("#single_div2").css("width", single_div_w);
				$("#ll1").css("left", ll1_l);
				$("#ll2").css("width", single_div_w);
				$("#l21").css("left", l21_l);
				$("#l22").css("left", l21_l);
				$("#l23").css("left", l21_l);
				$("#l24").css("left", l21_l);
				$("#l25").css("left", l21_l);
				$("#l26").css("left", l21_l);
				$("#l27").css("left", l21_l);
				$("#l28").css("left", l21_l);
				$("#l29").css("left", l21_l);
				$("#l210").css("left", l21_l);
				$("#l211").css("left", l21_l);
				$("#l212").css("left", l21_l);
				$("#l213").css("left", l21_l);
				$("#l214").css("left", l21_l);
				$("#l215").css("left", l21_l);
				$("#l216").css("left", l21_l);
				$("#l217").css("left", l21_l);
				$("#l218").css("left", l21_l);
				$("#hr1").css("left", l21_l);
				$("#hr2").css("left", l21_l);
				$(img).css("marginLeft", img_pl);			
				$(aa1).css("width", aa1_w);
				$(aa1).css("marginRight", img_pl);
				$(a2).css("paddingLeft", a2_pl);
				$(a3).css("paddingLeft", a2_pl);
				$(a4).css("paddingLeft", a2_pl);
				$(djptop1).css("paddingLeft", djp_pl);		
				$(djptop1).css("width", djp_w);						
			}
			else if(w>=1400){
				w1 = 1400 - 50;
				img_pl = 100;
				aa1_w = 1000;
				a2_pl = 85;
				djp_pl = 165;
				djp_w = 204;	
				single_div_w = 1400;
				marginL = (w - 1400)/2;				
				bg_position = (single_div_w - 1400)/2;	
				ll1_l = (single_div_w - 240)/2;
				l21_l = (single_div_w - 880)/2;				
				$(imgtop).css("width", "1400px");		
				$(xfbox).css("width", w);
				$(main1).css("width", "1400px");
				$(main1).css("marginLeft", marginL);
				$(main1).css("marginRight", marginL);			
				$(footer).css("width", w);		
				$("#single_div1").css("width", "1400px");
				$("#single_div1").css("backgroundPosition", bg_position + "px 90px");	
				$("#single_div2").css("width", "1400px");
				$("#ll1").css("left", ll1_l);
				$("#ll2").css("width", single_div_w);
				$("#l21").css("left", l21_l);
				$("#l22").css("left", l21_l);
				$("#l23").css("left", l21_l);
				$("#l24").css("left", l21_l);
				$("#l25").css("left", l21_l);
				$("#l26").css("left", l21_l);
				$("#l27").css("left", l21_l);
				$("#l28").css("left", l21_l);
				$("#l29").css("left", l21_l);
				$("#l210").css("left", l21_l);
				$("#l211").css("left", l21_l);
				$("#l212").css("left", l21_l);
				$("#l213").css("left", l21_l);
				$("#l214").css("left", l21_l);
				$("#l215").css("left", l21_l);
				$("#l216").css("left", l21_l);
				$("#l217").css("left", l21_l);
				$("#l218").css("left", l21_l);
				$("#hr1").css("left", l21_l);
				$("#hr2").css("left", l21_l);
				$(img).css("marginLeft", "100px");
				$(aa1).css("width", "1000px");
				$(aa1).css("marginRight", "100px");
				$(a2).css("paddingLeft", "85px");	
				$(a3).css("paddingLeft", "85px");
				$(a4).css("paddingLeft", "85px");
				$(djptop1).css("paddingLeft", "165px");	
				$(djptop1).css("width", "204px");					
			}
			else {
				w1 = 980 - 50;
				img_pl = 980*50/1400;
				a2_pl = 980*85/1400;
				djp_pl = 980*80/1400;
				djp_w = djp_pl + 39;	
				aa1_w = 500 + a2_pl*3 + djp_w;
				single_div_w = 980;
				bg_position = (single_div_w - 1400)/2;
				ll1_l = (single_div_w - 240)/2;
				l21_l = (single_div_w - 880)/2;
				$(imgtop).css("width", "980px");
				$(main1).css("width", "980px");
				$(main1).css("marginLeft", "0px");
				$(main1).css("marginRight", "0px");				
				$(xfbox).css("width", "980px");
				$(footer).css("width", "980px");
				//$(footer).css("marginLeft", "0px");
				//$(footer).css("marginRight", "0px");				
				$("#single_div1").css("width", "980px");
				$("#single_div1").css("backgroundPosition", bg_position + "px 90px");
				$("#single_div2").css("width", "980px");
				$("#ll1").css("left", ll1_l);
				$("#ll2").css("width", single_div_w);
				$("#l21").css("left", l21_l);
				$("#l22").css("left", l21_l);
				$("#l23").css("left", l21_l);
				$("#l24").css("left", l21_l);
				$("#l25").css("left", l21_l);
				$("#l26").css("left", l21_l);
				$("#l27").css("left", l21_l);
				$("#l28").css("left", l21_l);
				$("#l29").css("left", l21_l);
				$("#l210").css("left", l21_l);
				$("#l211").css("left", l21_l);
				$("#l212").css("left", l21_l);
				$("#l213").css("left", l21_l);
				$("#l214").css("left", l21_l);
				$("#l215").css("left", l21_l);
				$("#l216").css("left", l21_l);
				$("#l217").css("left", l21_l);
				$("#l218").css("left", l21_l);		
				$("#hr1").css("left", l21_l);
				$("#hr2").css("left", l21_l);				
				$(img).css("marginLeft", img_pl);			
				$(aa1).css("width", aa1_w);
				$(aa1).css("marginRight", img_pl);
				$(a2).css("paddingLeft", a2_pl);
				$(a3).css("paddingLeft", a2_pl);
				$(a4).css("paddingLeft", a2_pl);
				$(djptop1).css("paddingLeft", djp_pl);		
				$(djptop1).css("width", djp_w);					
				$(document.body).css("width","980px");				
			}
		}
		window.onresize = xfbox_resize;
		var is_scroll = false;
		var is_xfbox_down = false;
		var is_xfbox_up = false;
		//single_div1是否加载
		var is_load_div1 = false;	
		create_div1();
		$(window).scroll(function(){	
			var vtop = $(document).scrollTop();
			is_scroll = true;
			console.log("vtop:" + vtop);
			if(vtop > 30 && is_xfbox_down == false){
				//$(xfbox).css("height", "50px");
				$(xfbox).css("background", "rgba(255,255,255,0.91)");
				$(xfbox).css("boxShadow","0px -30px 25px 25px #888888");
				$(imgtop).css("height", "50px");				
				$(img).css("width", "26px");
				$(img).css("height", "50px");
				//$(djp).attr("src", "huixian/huixian/images/logo-mobile-black.png");
				$(djp).css("marginTop", "8.5px");
				$(djp).css("height", "33px");
				$(djp).css("width", "23.5px");
				$(aa1).css("height", "50px");
				$(aa1).css("width", aa1_w);
				$(a1).css("lineHeight", "16px");
				$(a1).css("height", "16px");
				$(a1).css("paddingTop", "17px");
				$(a1).css("fontSize", "16px");
				$(a2).css("lineHeight", "16px");
				$(a2).css("height", "16px");
				$(a2).css("paddingLeft", a2_pl);
				$(a2).css("fontSize", "16px");
				$(a3).css("lineHeight", "16px");
				$(a3).css("height", "16px");
				$(a3).css("paddingLeft", a2_pl);
				$(a3).css("fontSize", "16px");
				$(a4).css("lineHeight", "16px");
				$(a4).css("height", "16px");
				$(a4).css("paddingLeft", a2_pl);
				$(a4).css("fontSize", "16px");				
				$(djptop1).css("marginBottom", "-1.75px");
				$(djptop1).css("height", "19.4px");
				$(djptop1).css("width", djp_w -17.3);		
				$(lltop1).css("lineHeight", "20px");
				$(lltop1).css("height", "20px");
				$(lltop1).css("fontSize", "20px");						
				$(xfbox).stop().animate({
					height:'50px'
				},200);
				is_xfbox_down = true;
				is_xfbox_up = false;
			}
			else if (vtop < 30 && is_xfbox_up == false){
				//$(xfbox).css("height", "70px");
				$(xfbox).css("background", "rgba(255,255,255,1)");
				$(xfbox).css("boxShadow","0px -50px 25px 25px #888888");
				$(imgtop).css("height", "90px");
				$(img).css("width", "47px");
				$(img).css("height", "90px");
				//$(djp).attr("src", "huixian/huixian/images/logo-mobile-black.png");
				$(djp).css("marginTop", "12px");
				$(djp).css("height", "66px");
				$(djp).css("width", "47px");
				$(aa1).css("height", "90px");
				$(aa1).css("width", aa1_w);
				$(a1).css("lineHeight", "20px");
				$(a1).css("height", "20px");
				$(a1).css("paddingTop", "35px");
				$(a1).css("fontSize", "20px");
				$(a2).css("lineHeight", "20px");
				$(a2).css("height", "20px");
				$(a2).css("paddingLeft", a2_pl);
				$(a2).css("fontSize", "20px");
				$(a3).css("lineHeight", "20px");
				$(a3).css("height", "20px");
				$(a3).css("paddingLeft", a2_pl);
				$(a3).css("fontSize", "20px");
				$(a4).css("lineHeight", "20px");
				$(a4).css("height", "20px");
				$(a4).css("paddingLeft", a2_pl);
				$(a4).css("fontSize", "20px");				
				$(djptop1).css("marginBottom", "-7.5px");
				$(djptop1).css("height", "35px");
				$(djptop1).css("width", djp_w);	
				$(lltop1).css("lineHeight", "24px");
				$(lltop1).css("height", "24px");
				$(lltop1).css("fontSize", "24px");				
				$(xfbox).stop().animate({
					height:'90px'
				},200);
				is_xfbox_up = true;
				is_xfbox_down = false;
			}			
		});		
		setTimeout(function ()
		{
			if(!is_scroll){
				$(window).scroll();
				console.log("11");
			}
		}, 100);
		});	
	
	$(a1).hover(function(e){
			$(this).css("color", "#447fe0");	
			},function(e){
				$(this).css("color", "#585858");
	});
	
	$(a2).hover(function(e){
			$(this).css("color", "#447fe0");	
			},function(e){
				$(this).css("color", "#585858");
	});
	
	$(a3).hover(function(e){
			$(this).css("color", "#447fe0");	
			},function(e){
				$(this).css("color", "#429acc");
	});
	
	$(a4).hover(function(e){
			$(this).css("color", "#447fe0");	
			},function(e){
				$(this).css("color", "#585858");
	});
}

//创建对象函数
function $C(father_node, css, tag){
	//当tag为空或不存在，则默认生成div
	var node = document.createElement(tag || 'div');
	if(father_node){
		$A(father_node, node);
	}
	if(css){
		$S(node, css);
	}
	return node;
}
function $A(father_node, child_node){
	father_node.appendChild(child_node);
}
function $S(node, css){
	for(var i in css){
		if(	   i == 'src' 
			|| i == 'title' 
			|| i == 'id'
			|| i == 'name'
			|| i == 'type'
			|| i == 'value'
			|| i == 'className'
			|| i == 'href'
			|| i == 'filter'){
			node[i] = css[i];
			//node.src = css[i];
		}
		else if(i == 'i'){
			node.innerHTML = css[i];
		}
		else{
			node.style[i] = css[i];
		}
	}
}
function $I(node, str){
	node.innerHTML = str;
}

//判断访问设备是移动端或PC端
function is_pc(){ 
	var os = new Array("Android","iPhone","iPad","Windows Phone","iPod","BlackBerry","MeeGo","SymbianOS","nokia","sony","ericsson","mot","samsung","htc","sgh","lg","sharp","sie-","philips","panasonic","alcatel","lenovo","meizu","netfront","symbian","ucweb","windowsce","palm","operamini","operamobi","openwave","nexusone","cldc","midp","wap","mobile");  // 其他类型的移动操作系统类型，自行添加 
	var info = navigator.userAgent; 
	var len = os.length; 
	for (var i = 0; i < len; i++) { 
		if (info.indexOf(os[i]) > 0){ 
			return false;  
		} 
	} 
	return true; 
} 

//动态加载手机页面   fsvs.js中调用
function DynamicLoadingPage(currentSlideIndex){
			 //alert("function currentSlideIndex"+currentSlideIndex);
			 currentSI = currentSlideIndex;
			 if(currentSlideIndex==0) {$(main1).html(""); create_phone_div1();}
			 if(currentSlideIndex==1) {$(main2).html(""); create_phone_div2();}
		 }

//加载PC页面single_div1
function create_div1(){

	var div1_w = 1400;
	console.log(w);
	if(w < 1400 && w > 980){
		div1_w = w;
	}
	else if(w <=980){
		div1_w = 980;		
	}
	var bg_position = (div1_w - 1400)/2;
	
	var single_div1 = $C(main1,
							{
									id: 'single_div1',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div1_w + 'px', 
									height: '2500px', 
									overflow: 'hidden',
									backgroundImage:'url(images/join.png)',
									backgroundColor: 'white',
									backgroundPosition: bg_position +'px 90px',
									backgroundRepeat:'no-repeat',
									webkitFilter: 'blur(2px)',
									mozFilter: 'blur(2px)',
									oFilter: 'blur(2px)',
									msFilter: 'blur(2px)',	
									//opacity: 0.8,
									zIndex: 1
							},
							'div');
							
	var single_div2 = $C(main1,
							{
									id: 'single_div2',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div1_w + 'px', 
									height: '2700px', 
									overflow: 'hidden',
									//opacity: 0.8,
									zIndex: 3
							},
							'div');							

	var ll1_left = (div1_w - 240)/2;
	console.log(ll1_left);
					
	var ll1 = $C(single_div2,
					{
							position: 'absolute',						
							top: '210px',
							left: ll1_left + 'px',
							lineHeight: '50px',
							height: '50px',
							width: '240px',
							color: 'white',			
							zIndex: 10,							
							opacity: 1,
							textDecoration: 'none',
							//paddingLeft: '0px',
							//paddingTop: '0px',
							fontSize: '50px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'll1',
							i: '加入我们'
					},
					'label');				
					
	var ll2 = $C(single_div2,
					{
							position: 'absolute',
							top: '465px',
							left: '0px',
							opacity: 1,
							overflow: 'hidden',
							width: div1_w + 'px',
							height: '2200px',
							backgroundColor: 'white',
							id: 'll2'
					},
					'div');

	var l21_left = (div1_w - 880)/2;				
					
	var l21 = $C(ll2,
					{
							position: 'absolute',
							top: '0px',
							left: l21_left + 'px',
							lineHeight: '20px',
							height: '20px',
							width: '880px',
							color: '#fd9227',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l21',
							i: '高级文案策划'
					},
					'label');

	var l22 = $C(ll2,
					{
							position: 'absolute',
							top: '50px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l22',
							i: '岗位职责：'
					},
					'label');

	var l23 = $C(ll2,
					{
							position: 'absolute',
							top: '80px',
							left: l21_left + 'px',
							lineHeight: '36px',
							height: '36px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							id: 'l23',
							letterSpacing: '1px',
							i: '1、撰写各种促销及营销文案与实施方案；<br/>2、撰写宝贝描述文案、单品策划文案，广告文案，品牌宣传文案；<br/>3、负责微信、微博等自媒体平台文案；<br/>4、负责撰写有关品牌及产品形象的文字介绍和软文；<br/>5、配合设计人员，进行品牌宣传等软文撰写；<br/>6、知识面广泛，文笔佳，思路清晰，创意丰富，具有较高的语言提炼能力和艺术鉴赏能力善于在文字上引导客户；<br/>7、撰写各类宣传品中的商品卖点和活动内容进行文案描述；<br/>8、具备商业敏感性，能对各分类商品的特点以文字进行表现。'
					},
					'label');	

	var l24 = $C(ll2,
					{
							position: 'absolute',
							top: '410px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l24',
							i: '任职资格：'
					},
					'label');	

	var l25 = $C(ll2,
					{
							position: 'absolute',
							top: '450px',
							left: l21_left + 'px',
							lineHeight: '36px',
							height: '36px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l25',
							i: '1、擅长文字写作，善于沟通和表达，善于抓住沟通的关键点；<br/>2、新闻学、经济管理、市场营销、品牌策划相关专业，大专以上学历，具有较好的审美眼光； <br/>3、有市场策划及文案工作经验，擅长网络编辑或销售型文案写作，有较强的文字编辑能力，和策划能力；<br/>4、熟悉电商大环境。了解电子商务运营、发展。善于挖掘网络关键字；<br/>5、能够独立完成广告策划、品牌推广方案，并组织实施网站的推广；'
					},
					'label');

	var l26 = $C(ll2,
					{
							position: 'absolute',
							top: '660px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#fd9227',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l26',
							i: '简历投至邮箱：molly.mao@jonthons.com'
					},
					'label');

	var hr1 = $C(ll2,
					{
							position: 'absolute',
							top: '730px',
							left: l21_left + 'px',
							height: '1px',
							border: 'none',
							borderTop:'1px solid #d9d9d9',
							id: 'hr1',
							width: '930px'
					},
					'hr');
					
	var l27 = $C(ll2,
					{
							position: 'absolute',
							top: '800px',
							left: l21_left + 'px',
							lineHeight: '20px',
							height: '20px',
							width: '880px',
							color: '#fd9227',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l27',
							i: '水产质检主管'
					},
					'label');

	var l28 = $C(ll2,
					{
							position: 'absolute',
							top: '850px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l28',
							i: '岗位职责：'
					},
					'label');

	var l29 = $C(ll2,
					{
							position: 'absolute',
							top: '880px',
							left: l21_left + 'px',
							lineHeight: '36px',
							height: '36px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l29',
							i: '1、协助组织落实各项质量目标（产品质量、生产工艺、部门流程等）的完成，贯彻质量方针；<br/>2、现场巡检预防质量事故的发生，解决现场的质量问题，参与质量事故的调查并编制分析报告；<br/>3、参与产品缺陷及故障分析并进行跟踪处理；<br/>4、负责组织并实施对公司的员工质量管理体系知识的培训；<br/>5、协助公司相关部门制订公司的产品质量标准；<br/>6、负责加工现场生产数据的记录，产品质量的反馈；<br/>7、原料及加工成品的的验收与检验工作；<br/>8、购销合同起草；及合同执行跟踪；<br/>9、ERP录入及下推，并保证数据准确；<br/>10、协调本部与各部门工作接口。'
					},
					'label');	

	var l210 = $C(ll2,
					{
							position: 'absolute',
							top: '1280px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l210',
							i: '任职资格：'
					},
					'label');	

	var l211 = $C(ll2,
					{
							position: 'absolute',
							top: '1320px',
							left: l21_left + 'px',
							lineHeight: '36px',
							height: '36px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l211',
							i: '1、食品工程与科学相关专业，大专以上学历；<br/>2、具备水产品质量检验相关工作经验者优先考虑；<br/>3、良好的沟通能力，能承受较大的工作压力。'
					},
					'label');

	var l212 = $C(ll2,
					{
							position: 'absolute',
							top: '1460px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#fd9227',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l212',
							i: '简历投至邮箱：molly.mao@jonthons.com'
					},
					'label');

	var hr2 = $C(ll2,
					{
							position: 'absolute',
							top: '1530px',
							left: l21_left + 'px',
							height: '1px',
							border: 'none',
							borderTop:'1px solid #d9d9d9',
							id: 'hr2',
							width: '930px'
					},
					'hr');
					
	var l213 = $C(ll2,
					{
							position: 'absolute',
							top: '1600px',
							left: l21_left + 'px',
							lineHeight: '20px',
							height: '20px',
							width: '880px',
							color: '#fd9227',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l213',
							i: '销售经理'
					},
					'label');

	var l214 = $C(ll2,
					{
							position: 'absolute',
							top: '1650px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l214',
							i: '岗位职责：'
					},
					'label');

	var l215 = $C(ll2,
					{
							position: 'absolute',
							top: '1680px',
							left: l21_left + 'px',
							lineHeight: '36px',
							height: '36px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l215',
							i: '1、负责区域的市场开发、客户维护和销售工作；<br/>2、制定自己的销售计划，并按计划拜访客户和开发新客户；<br/>3、宣传推广公司产品、品牌，建立并维护客户关系；<br/>4、完成签单，完成销售的任务指标。'
					},
					'label');	

	var l216 = $C(ll2,
					{
							position: 'absolute',
							top: '1860px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l216',
							i: '任职资格：'
					},
					'label');	

	var l217 = $C(ll2,
					{
							position: 'absolute',
							top: '1900px',
							left: l21_left + 'px',
							lineHeight: '36px',
							height: '36px',
							width: '880px',
							color: '#000000',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l217',
							i: '1、普通话流利，具备良好的语言表达能力和沟通技巧；<br/>2、性格开朗、自信、富有工作激情和积极的工作心态；<br/>3、学习能力强，有吃苦耐劳、努力进取的精神，团队意识强；<br/>4、品行端正，有良好的职业道德；<br/>5、欢迎热爱销售的应届毕业生；<br/>6、对挑战高薪欲望强烈并有规划者优先考虑。'
					},
					'label');

	var l218 = $C(ll2,
					{
							position: 'absolute',
							top: '2150px',
							left: l21_left + 'px',
							lineHeight: '16px',
							height: '16px',
							width: '880px',
							color: '#fd9227',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							id: 'l218',
							i: '简历投至邮箱：molly.mao@jonthons.com'
					},
					'label');
}
