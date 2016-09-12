// // 如果是移动设备，加载手机页面 
if(!is_pc()){  
	
	$("head").append('<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">');
	$("head").append('<meta name="format-detection" content="telephone=no">');
	$("head").append('<meta name="format-detection" content="email=no">');
	$("head").append('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">');
	
	var topbox = $C(document.body,
					{
							width: '420px',
							position: 'fixed',
							top: '0px',
							height: '50px',
							background:'rgba(243,243,236,1)',	
							zIndex: 5
							
					},
					'div');	
	
	var imgtop = $C(topbox,
					{
							display: 'table',
							width: '400px',
							marginTop: '0px',
							marginLeft: 'auto',
							marginRight: 'auto',
							height: '50px'
					},
					'div');	
					
	var img = $C(imgtop,
					{
							display:'inline',
							float: 'left',
							marginLeft: '15px',
							paddingTop: '0px',
							paddingLeft:'0px',
							zIndex: 5,
							overflow: 'hidden',
							width: '26px',
							height: '50px',
							id: 'img'
					},
					'div');	
	
	var djp = $C(img,
					{
							marginTop: '8.5px',
							src:'images/logo.gif',
							height: '33px',
							width: '23.5px'
					},
					'img');	
	var aa1 = $C(imgtop,
					{
							width: '130px',
							height: '50px',
							display:'inline',
							float: 'right',
							paddingRight: '0px',
							paddingTop: '0px'
					},
					'div');					
	
	var a1 = $C(aa1,
					{
							display: 'inline-block',
							lineHeight: '16px',
							height: '16px',
							color: '#429acc',
							textDecoration: 'none',
							marginTop: '17px',
							fontSize: '16px',
							fontWeight: 'normal',
							i: '首页'
					},
					'a');	
	
	var a2 = $C(aa1,
					{
							display: 'inline-block',
							lineHeight: '16px',
							height: '16px',
							color: '#585858',
							textDecoration: 'none',
							marginTop: '17px',
							marginLeft: '17px',
							fontSize: '16px',
							fontWeight: 'normal',
							href: 'introduce.html',
							i: '联系我们'
					},
					'a');							
	
    var xfbox = $C(document.body,
					{
							fontFamily:'"Times New Roman", "WenQuanYi Micro Hei", "幼圆", Verdana, Arial',
							background: '#fafafa',
							id:'fsvs-body'
					},
					'div');	
					
	//第一页 
	var main1 = $C(xfbox,
					{	
					 // backgroundColor:'pink'
					},
					'div');					
	//第二页				
	var main2 = $C(xfbox,
					{	
					  // backgroundColor:'yellow'
					},
					'div');	
					
	
    //第三页				
	var main3 = $C(xfbox,
					{	
					   // backgroundColor:'green'
					},
					'div');
	//第四页				
	var main4 = $C(xfbox,
					{	
					  // backgroundColor:'yellow'
					},
					'div');	
					
	
    //第五页				
	var main5 = $C(xfbox,
					{	
					   // backgroundColor:'green'
					},
					'div');	
					
	
	var w = $(window).innerWidth();
	var h = $(window).innerHeight();
	var currentSI = 0;
	//alert("body_w = " + w);
	//alert("body_h = " + h);
	var is_div1_first = true;
	var is_div1_resize = false;
	var is_div2_resize = false;
	var is_div3_resize = false;
	var is_div4_resize = false;
	var is_div5_resize = false;	
	var pag_size = "";
	
	$(function(){	
				
				$(main1).addClass('slide');
				$(main2).addClass('slide');
				$(main3).addClass('slide');
				$(main4).addClass('slide');
				$(main5).addClass('slide');
				
				$('html.fsvs').css("position", "fixed");	
				$('html.fsvs').css("overflow", "hidden");
				$('html.fsvs').css("height", "100%");	
				$('html.fsvs').css("width", "100%");	
				$('html.fsvs').css("top", "0px");	
				$('html.fsvs').css("left", "0px");	
				//w = 375;
				//h = 559;
				//w = 360;
				//h = 513;
				//w = 320;
				//h = 460;
				//w = 320;
				//h = 420;
				//w = 1024;
				//h = 650;
				var w1 = w - 20;
				//alert(w);
				//alert(w + " + " + h);
				$(xfbox).css("width", w);
				$(main1).css("width", w);
				$(main2).css("width", w);
				$(main3).css("width", w);
				$(main4).css("width", w);
				$(main5).css("width", w);
				$(main5).css("height", h);				
				$(topbox).css("width", w);
				$(imgtop).css("width", w1);
				
				var xfbox_resize = function(){
					w = $(window).innerWidth();
					h = $(window).innerHeight();
					//alert(w);
					if(w > 700){
						w1 = w - 20;				
						$(xfbox).css("width", w);
						$(main1).css("width", w);
						$(main2).css("width", w);
						$(main3).css("width", w);
						$(main4).css("width", w);
						$(main5).css("width", w);
						$(main5).css("height", h);
						$(topbox).css("width", w);
						$(imgtop).css("width", w1);
						//$(main1).empty();
						//$(main2).empty();
						//$(main3).empty();		
						if(currentSI==0) {is_div1_resize = true;}
						if(currentSI==1) {is_div2_resize = true;}
						if(currentSI==2) {is_div3_resize = true;}
						if(currentSI==3) {is_div4_resize = true;}
						if(currentSI==4) {is_div5_resize = true;}
						
						DynamicLoadingPage(currentSI); 
					}
				}
				window.onresize = xfbox_resize;				
				
                create_phone_div1(); 				
			});		
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
							color: '#429acc',
							textDecoration: 'none',
							paddingTop: '35px',
							paddingLeft: '35px',
							fontSize: '20px',
							fontWeight: 'normal',
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
							href: '#main3',
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
							color: '#585858',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							href: 'join.html',
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
							height: '625px',
							background:'#f8f8f8'
					},
					'div');
	
	var main2 = $C(document.body,
				{
						position:'table',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '0px',
						fontFamily:'"微软雅黑", "Hiragino Sans GB", "WenQuanYi Micro Hei", Verdana, Arial',
						width: '1400px',
						height: '431px',
						background:'white'
				},
				'div');
				
	var main3 = $C(document.body,
			{
					position:'table',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '0px',
					fontFamily:'"微软雅黑", "Hiragino Sans GB", "WenQuanYi Micro Hei", Verdana, Arial',
					width: '1400px',
					height: '401px',
					id: 'main3',
					name: 'main3',
					background:'#f8f8f8'
			},
			'div');			

	var main4 = $C(document.body,
			{
					position:'table',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '0px',
					fontFamily:'"微软雅黑", "Hiragino Sans GB", "WenQuanYi Micro Hei", Verdana, Arial',
					width: '1400px',
					height: '446px',
					id: 'main4',
					name: 'main4',
					background:'white'
			},
			'div');	
			
	var main5 = $C(document.body,
			{
					position:'table',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '0px',
					fontFamily:'"Hiragino Sans GB", "WenQuanYi Micro Hei", "微软雅黑", Verdana, Arial',
					width: '1400px',
					height: '433px',
					background:'#f8f8f8'
			},
			'div');	
			
	//var a4 = $C(aa2,
	//				{
	//						display: 'block',
	//						lineHeight: '20px',
	//						height: '28px',
	//						width: '160px',
	//						color: '#2350b7',
	//						textDecoration: 'none',
	//						marginTop: '15px',
	//						paddingLeft: '40px',
	//						paddingTop: '8px',
	//						backgroundImage: 'url(images/pl-icon.png)',
	//						backgroundRepeat: 'no-repeat',
	//						backgroundPosition: '121px 7px',
	//						fontSize: '20px',
	//						fontWeight: 'normal',
	//						href: '#',
	//						i: '观看视频'
	//				},
	//				'a');		

	var footer = $C(document.body,
				{
						width: '1140px',
						position: 'absolute',
						marginLeft: '0px',
						marginRight: '0px',
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
						zIndex: 3
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
			w = document.body.clientWidth;
			h = document.body.clientHeight;			
			w1 = w - 50;
			img_pl = w*100/1400;
			a2_pl = w*85/1400;
			djp_pl = w*100/1400;
			djp_w = djp_pl + 39;	
			aa1_w = 500 + a2_pl*3 + djp_w;
			var single_div_w = 1400;
			var bg_position = (single_div_w - 1400)/2;	
			var ll1_l = (single_div_w - 571)/2;	
			var img1_l = (single_div_w - 593)/2;
			var ll2_l = (single_div_w - 160)/2;
			var jian_g = (single_div_w - 576)/6;
			var ll3_l = jian_g*1.5;	
			var ll4_l = 144 + jian_g*2.5;
			var ll5_l = 288 + jian_g*3.5;
			var ll6_l = 432 + jian_g*4.5;
			var ll7_l = (single_div_w - 128)/2;
			var jian_g2 = (single_div_w - 470)/5;
			var ll8_l = jian_g2*1.5;
			var jiantou_j = (jian_g2 - 53)/2; 				
			var img2_l = 150 + jiantou_j + jian_g2*1.5;
			var ll9_l = 150 + jian_g2*2.5;
			var img3_l = 300 + jiantou_j + jian_g2*2.5;
			var ll10_l = 300 + jian_g2*3.5;
			var ll11_l = (single_div_w - 97)/2;
			var img4_l = (single_div_w - 510)/2;
			var ll12_l = img4_l + 147;
			var img5_l = (single_div_w - 510)/2;
			var ll13_l = img5_l + 147;
			var img6_l = (single_div_w - 510)/2;
			var ll14_l = img4_l + 147;
			var jiant1_w = single_div_w - 200;	
			var jian_g3 = (single_div_w - 535)/6;
			var ll15_l = jian_g3*1.5;
			var ll16_l = 121 + jian_g3*2.5;			
			var ll17_l = 234 + jian_g3*3.75;
			var ll17_wid = 290 + jian_g3*0.75;
			var img171_l = jian_g3*0.75;
			var img171_wid = img171_l + 45;	
			var l172_l = jian_g3*0.75 + 55;
			var l172_wid = l172_l + 234;		
			var jian_g4 = (single_div_w - 390)/5;
			var ll18_l = jian_g4*1.5;	
			var ll19_l = 130 + jian_g4*2.5;
			var ll20_l = 260 + jian_g4*3.5;
			if(w < 1400 && w > 980){
				img_pl = w*100/1400;
				a2_pl = w*85/1400;
				djp_pl = w*100/1400;
				djp_w = djp_pl + 39;	
				aa1_w = 500 + a2_pl*3 + djp_w;
				single_div_w = w;
				bg_position = (single_div_w - 1400)/2;
				ll1_l = (single_div_w - 571)/2;
				img1_l = (single_div_w - 593)/2;
				ll2_l = (single_div_w - 160)/2;	
				jian_g = (single_div_w - 576)/6;
				ll3_l = jian_g*1.5;	
				ll4_l = 144 + jian_g*2.5;
				ll5_l = 288 + jian_g*3.5;
				ll6_l = 432 + jian_g*4.5;
				ll7_l = (single_div_w - 128)/2;
				jian_g2 = (single_div_w - 470)/5;
				ll8_l = jian_g2*1.5;
				jiantou_j = (jian_g2 - 53)/2; 			
				img2_l = 150 + jiantou_j + jian_g2*1.5;
				ll9_l = 150 + jian_g2*2.5;
				img3_l = 300 + jiantou_j + jian_g2*2.5;
				ll10_l = 300 + jian_g2*3.5;
				ll11_l = (single_div_w - 97)/2;
				img4_l = (single_div_w - 510)/2;
				ll12_l = img4_l + 147;
				img5_l = (single_div_w - 510)/2;
				ll13_l = img5_l + 147;
				img6_l = (single_div_w - 510)/2;
				ll14_l = img4_l + 147;
				jiant1_w = single_div_w - 200;	
				jian_g3 = (single_div_w - 535)/6;
				ll15_l = jian_g3*1.5;
				ll16_l = 121 + jian_g3*2.5;	
				ll17_l = 234 + jian_g3*3.75;
				ll17_wid = 290 + jian_g3*0.75;
				img171_l = jian_g3*0.75;
				console.log(img171_l);
				img171_wid = img171_l + 45;	
				l172_l = jian_g3*0.75 + 55;
				l172_wid = l172_l + 234;		
				jian_g4 = (single_div_w - 390)/5;
				ll18_l = jian_g4*1.5;	
				ll19_l = 130 + jian_g4*2.5;
				ll20_l = 260 + jian_g4*3.5;
				$(imgtop).css("width", w);	
				$(xfbox).css("width", w);
				$(main1).css("width", w);
				$(main2).css("width", w);
				$(main3).css("width", w);
				$(main4).css("width", w);
				$(main5).css("width", w);
				$(main1).css("marginLeft", "0px");
				$(main1).css("marginRight", "0px");
				$(main2).css("marginLeft", "0px");
				$(main2).css("marginRight", "0px");
				$(main3).css("marginLeft", "0px");
				$(main3).css("marginRight", "0px");		
				$(main4).css("marginLeft", "0px");
				$(main4).css("marginRight", "0px");
				$(main5).css("marginLeft", "0px");
				$(main5).css("marginRight", "0px");					
				$(footer).css("width", w);
				$(img).css("marginLeft", img_pl);			
				$(aa1).css("width", aa1_w);
				$(aa1).css("marginRight", img_pl);
				$(a2).css("paddingLeft", a2_pl);
				$(a3).css("paddingLeft", a2_pl);
				$(a4).css("paddingLeft", a2_pl);
				$(djptop1).css("paddingLeft", djp_pl);		
				$(djptop1).css("width", djp_w);	
				$("#single_div1").css("width", single_div_w);
				$("#single_div1").css("backgroundPosition", bg_position + "px 90px");
				$("#single_divbg").css("width", single_div_w);
				$("#ll1").css("left", ll1_l + "px");
				$("#img1").css("left",  img1_l + "px");				
				$("#single_div2").css("width", single_div_w);
				$("#ll2").css("left", ll2_l + "px");
				$("#ll3").css("left", ll3_l + "px");	
				$("#ll4").css("left", ll4_l + "px");
				$("#ll5").css("left", ll5_l + "px");
				$("#ll6").css("left", ll6_l + "px");
				$("#single_div3").css("width", single_div_w);
				$("#ll7").css("left", ll7_l + "px");
				$("#ll8").css("left", ll8_l + "px");	
				$("#img2").css("left", img2_l + "px");
				$("#ll9").css("left", ll9_l + "px");
				$("#img3").css("left", img3_l + "px");
				$("#ll10").css("left", ll10_l + "px");
				$("#single_div4").css("width", single_div_w);
				$("#ll11").css("left", ll11_l + "px");
				$("#div4_slides").css("width", single_div_w);
				$("#slides1").css("width", single_div_w);
				$("#slides_aa1").css("width", single_div_w);
				$("#img4").css("left", img4_l + "px");	
				$("#ll12").css("left", ll12_l + "px");
				$("#slides_aa2").css("width", single_div_w);
				$("#img5").css("left", img5_l + "px");
				$("#ll13").css("left", ll13_l + "px");
				$("#slides_aa3").css("width", single_div_w);
				$("#img6").css("left", img6_l + "px");
				$("#ll14").css("left", ll14_l + "px");
				$("#jiantou1").css("width", jiant1_w);				
				$("#single_div5").css("width", single_div_w);
				$("#ll15").css("left", ll15_l + "px");
				$("#ll16").css("left", ll16_l + "px");	
				$("#ll17").css("left", ll17_l + "px");
				$("#ll17").css("width", ll17_wid);
				$("#img171").css("paddingLeft", img171_l + "px");
				$("#img171").css("width", img171_wid);
				$("#l172").css("paddingLeft", l172_l + "px");	
				$("#l172").css("width", l172_wid);
				$("#ll18").css("left", ll18_l + "px");
				$("#ll19").css("left", ll19_l + "px");	
				$("#ll20").css("left", ll20_l + "px");					
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
				ll1_l = (single_div_w - 571)/2;
				img1_l = (single_div_w - 593)/2;
				ll2_l = (single_div_w - 160)/2;	
				jian_g = (single_div_w - 576)/6;
                ll3_l = jian_g*1.5;	
                ll4_l = 144 + jian_g*2.5;
                ll5_l = 288 + jian_g*3.5;
				ll6_l = 432 + jian_g*4.5;
				ll7_l = (single_div_w - 128)/2;
				jian_g2 = (single_div_w - 470)/5;
				ll8_l = jian_g2*1.5;
				jiantou_j = (jian_g2 - 53)/2; 			
				img2_l = 150 + jiantou_j + jian_g2*1.5;
				ll9_l = 150 + jian_g2*2.5;
				img3_l = 300 + jiantou_j + jian_g2*2.5;
				ll10_l = 300 + jian_g2*3.5;		
				ll11_l = (single_div_w - 97)/2;
				img4_l = (single_div_w - 510)/2;
				ll12_l = img4_l + 147;
				img5_l = (single_div_w - 510)/2;
				ll13_l = img5_l + 147;
				img6_l = (single_div_w - 510)/2;
				ll14_l = img4_l + 147;
				jiant1_w = single_div_w - 200;	
				jian_g3 = (single_div_w - 535)/6;
				ll15_l = jian_g3*1.5;
				ll16_l = 121 + jian_g3*2.5;	
				ll17_l = 234 + jian_g3*3.75;
				ll17_wid = 309 + jian_g3*0.75;
				img171_l = jian_g3*0.75;
				img171_wid = img171_l + 45;	
				l172_l = jian_g3*0.75 + 55;
				l172_wid = l172_l + 234;		
				jian_g4 = (single_div_w - 390)/5;
				ll18_l = jian_g4*1.5;	
				ll19_l = 130 + jian_g4*2.5;
				ll20_l = 260 + jian_g4*3.5;
				$(imgtop).css("width", "1400px");		
				$(xfbox).css("width", w);
				$(main1).css("width", "1400px");
				$(main2).css("width", "1400px");
				$(main3).css("width", "1400px");
				$(main4).css("width", "1400px");
				$(main5).css("width", "1400px");
				$(main1).css("marginLeft", marginL);
				$(main1).css("marginRight", marginL);
				$(main2).css("marginLeft", marginL);
				$(main2).css("marginRight", marginL);
				$(main3).css("marginLeft", marginL);
				$(main3).css("marginRight", marginL);
				$(main4).css("marginLeft", marginL);
				$(main4).css("marginRight", marginL);
				$(main5).css("marginLeft", marginL);
				$(main5).css("marginRight", marginL);				
				$(footer).css("width", w);		
				$("#single_div1").css("width", "1400px");
				$("#single_div1").css("backgroundPosition", bg_position + "px 90px");
				$("#single_divbg").css("width", single_div_w);
				$("#ll1").css("left", ll1_l + "px");
				$("#img1").css("left",  img1_l + "px");
				$("#single_div2").css("width", "1400px");
				$("#ll2").css("left", ll2_l + "px");
				$("#ll3").css("left", ll3_l + "px");	
				$("#ll4").css("left", ll4_l + "px");
				$("#ll5").css("left", ll5_l + "px");
				$("#ll6").css("left", ll6_l + "px");				
				$("#single_div3").css("width", "1400px");
				$("#ll7").css("left", ll7_l + "px");
				$("#ll8").css("left", ll8_l + "px");	
				$("#img2").css("left", img2_l + "px");
				$("#ll9").css("left", ll9_l + "px");
				$("#img3").css("left", img3_l + "px");
				$("#ll10").css("left", ll10_l + "px");
				$("#single_div4").css("width", single_div_w);
				$("#ll11").css("left", ll11_l + "px");
				$("#div4_slides").css("width", single_div_w);
				$("#slides1").css("width", single_div_w);
				$("#slides_aa1").css("width", single_div_w);
				$("#img4").css("left", img4_l + "px");	
				$("#ll12").css("left", ll12_l + "px");
				$("#slides_aa2").css("width", single_div_w);
				$("#img5").css("left", img5_l + "px");
				$("#ll13").css("left", ll13_l + "px");
				$("#slides_aa3").css("width", single_div_w);
				$("#img6").css("left", img6_l + "px");
				$("#ll14").css("left", ll14_l + "px");
				$("#jiantou1").css("width", jiant1_w);				
				$("#single_div5").css("width", single_div_w);
				$("#ll15").css("left", ll15_l + "px");
				$("#ll16").css("left", ll16_l + "px");	
				$("#ll17").css("left", ll17_l + "px");
				$("#ll17").css("width", ll17_wid);
				$("#img171").css("paddingLeft", img171_l + "px");
				$("#img171").css("width", img171_wid);
				$("#l172").css("paddingLeft", l172_l + "px");	
				$("#l172").css("width", l172_wid);
				$("#ll18").css("left", ll18_l + "px");
				$("#ll19").css("left", ll19_l + "px");	
				$("#ll20").css("left", ll20_l + "px");	
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
				ll1_l = (single_div_w - 571)/2;
				img1_l = (single_div_w - 593)/2;
				ll2_l = (single_div_w - 160)/2;	
				jian_g = (single_div_w - 576)/6;
				ll3_l = jian_g*1.5;	
				ll4_l = 144 + jian_g*2.5;
				ll5_l = 288 + jian_g*3.5;
				ll6_l = 432 + jian_g*4.5;
				ll7_l = (single_div_w - 128)/2;
				jian_g2 = (single_div_w - 470)/5;
				ll8_l = jian_g2*1.5;
				jiantou_j = (jian_g2 - 53)/2; 			
				img2_l = 150 + jiantou_j + jian_g2*1.5;
				ll9_l = 150 + jian_g2*2.5;
				img3_l = 300 + jiantou_j + jian_g2*2.5;
				ll10_l = 300 + jian_g2*3.5;		
				ll11_l = (single_div_w - 97)/2;
				img4_l = (single_div_w - 510)/2;
				ll12_l = img4_l + 147;
				img5_l = (single_div_w - 510)/2;
				ll13_l = img5_l + 147;
				img6_l = (single_div_w - 510)/2;
				ll14_l = img4_l + 147;
				jiant1_w = single_div_w - 200;	
				jian_g3 = (single_div_w - 535)/6;
				ll15_l = jian_g3*1.5;
				ll16_l = 121 + jian_g3*2.5;	
				ll17_l = 234 + jian_g3*3.75;
				ll17_wid = 290 + jian_g3*0.75;
				img171_l = jian_g3*0.75;
				img171_wid = img171_l + 45;	
				l172_l = jian_g3*0.75 + 55;
				l172_wid = l172_l + 234;		
				jian_g4 = (single_div_w - 390)/5;
				ll18_l = jian_g4*1.5;	
				ll19_l = 130 + jian_g4*2.5;
				ll20_l = 260 + jian_g4*3.5;			
				$(imgtop).css("width", "980px");
				$(main1).css("width", "980px");
				$(main2).css("width", "980px");
				$(main3).css("width", "980px");
				$(main4).css("width", "980px");
				$(main5).css("width", "980px");
				$(main1).css("marginLeft", "0px");
				$(main1).css("marginRight", "0px");
				$(main2).css("marginLeft", "0px");
				$(main2).css("marginRight", "0px");
				$(main3).css("marginLeft", "0px");
				$(main3).css("marginRight", "0px");		
				$(main4).css("marginLeft", "0px");
				$(main4).css("marginRight", "0px");
				$(main5).css("marginLeft", "0px");
				$(main5).css("marginRight", "0px");					
				$(xfbox).css("width", "980px");
				$(footer).css("width", "980px");				
				$("#single_div1").css("width", "980px");
				$("#single_div1").css("backgroundPosition", bg_position + "px 90px");	
				$("#single_divbg").css("width", single_div_w);
				$("#ll1").css("left", ll1_l + "px");
				$("#img1").css("left",  img1_l + "px");				
				$("#single_div2").css("width", "980px");
				$("#ll2").css("left", ll2_l + "px");
				$("#ll3").css("left", ll3_l + "px");	
				$("#ll4").css("left", ll4_l + "px");
				$("#ll5").css("left", ll5_l + "px");
				$("#ll6").css("left", ll6_l + "px");				
				$("#single_div3").css("width", "980px");
				$("#ll7").css("left", ll7_l + "px");
				$("#ll8").css("left", ll8_l + "px");	
				$("#img2").css("left", img2_l + "px");
				$("#ll9").css("left", ll9_l + "px");
				$("#img3").css("left", img3_l + "px");
				$("#ll10").css("left", ll10_l + "px");
				$("#single_div4").css("width", single_div_w);
				$("#ll11").css("left", ll11_l + "px");
				$("#div4_slides").css("width", single_div_w);
				$("#slides1").css("width", single_div_w);
				$("#slides_aa1").css("width", single_div_w);
				$("#img4").css("left", img4_l + "px");	
				$("#ll12").css("left", ll12_l + "px");
				$("#slides_aa2").css("width", single_div_w);
				$("#img5").css("left", img5_l + "px");
				$("#ll13").css("left", ll13_l + "px");
				$("#slides_aa3").css("width", single_div_w);
				$("#img6").css("left", img6_l + "px");
				$("#ll14").css("left", ll14_l + "px");
				$("#jiantou1").css("width", jiant1_w);				
				$("#single_div5").css("width", single_div_w);
				$("#ll15").css("left", ll15_l + "px");
				$("#ll16").css("left", ll16_l + "px");	
				$("#ll17").css("left", ll17_l + "px");
				$("#ll17").css("width", ll17_wid);
				$("#img171").css("paddingLeft", img171_l + "px");
				$("#img171").css("width", img171_wid);
				$("#l172").css("paddingLeft", l172_l + "px");	
				$("#l172").css("width", l172_wid);
				$("#ll18").css("left", ll18_l + "px");
				$("#ll19").css("left", ll19_l + "px");	
				$("#ll20").css("left", ll20_l + "px");				
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
		//single_div2是否加载
		var is_load_div2 = false;
		//single_div3是否加载
		var is_load_div3 = false;	
		//single_div4是否加载
		var is_load_div4 = false;		
		//single_div5是否加载
		var is_load_div5 = false;
		create_div1();
		create_div2();
		create_div3();
		create_div4();
		create_div5();
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
				$(this).css("color", "#429acc");
	});
	
	$(a2).hover(function(e){
			$(this).css("color", "#447fe0");	
			},function(e){
				$(this).css("color", "#585858");
	});
	
	$(a3).hover(function(e){
			$(this).css("color", "#447fe0");	
			},function(e){
				$(this).css("color", "#585858");
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

//动态加载手机页面   fsvs.js中调用
function DynamicLoadingPage(currentSlideIndex){
			 //alert("function currentSlideIndex"+currentSlideIndex);
			 currentSI = currentSlideIndex;
			 if(currentSlideIndex==0) {$(main1).html(""); create_phone_div1();}
			 if(currentSlideIndex==1) {$(main2).html(""); create_phone_div2();}
			 if(currentSlideIndex==2) {$(main3).html(""); create_phone_div3();}
			 if(currentSlideIndex==3) {$(main4).html(""); create_phone_div4();}
			 if(currentSlideIndex==4) {$(main5).html(""); create_phone_div5();}
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
	
	var single_divbg = $C(main1,
							{
									id: 'single_divbg',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div1_w + 'px', 
									height: '625px', 
									overflow: 'hidden',
									backgroundImage:'url(images/main1bg.gif)',
									backgroundPosition: bg_position +'px 90px',
									backgroundRepeat:'no-repeat',
									webkitFilter: 'blur(2px)',
									mozFilter: 'blur(2px)',
									oFilter: 'blur(2px)',
									msFilter: 'blur(2px)',	
									zIndex: 1
							},
							'div');
							
	var single_div1 = $C(main1,
							{
									id: 'single_div1',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div1_w + 'px', 
									height: '625px', 
									overflow: 'hidden',
									//opacity: 0.8,
									zIndex: 3
							},
							'div');								

	var ll1_left = (div1_w - 571)/2;
	console.log(ll1_left);
					
	var ll1 = $C(single_div1,
					{
							position: 'absolute',
							top: '153px',
							left: ll1_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '571px',
							height: '116px',
							id: 'll1',
							zIndex: 1
					},
					'div');	
	
	var l11 = $C(ll1,
					{
							position: 'absolute',
							top: '0px',
							left: '187.5px',
							lineHeight: '50px',
							height: '50px',
							width: '196px',
							color: 'white',
							textDecoration: 'none',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: '50px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '互联网+'
					},
					'label');
	
	var l12 = $C(ll1,
					{
							position: 'absolute',
							top: '82px',
							left: '0px',
							lineHeight: '32px',
							height: '32px',
							width: '571px',
							color: 'white',
							textDecoration: 'none',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: '32px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜，用互联网技术改造海鲜食材供应'
					},
					'label');	
	
	var img1_left = (div1_w - 593)/2;
	console.log(img1_left);	
	
	var img1 = $C(single_div1,
				{
						position: 'absolute',
						top: '300px',
						left: img1_left + 'px',
						opacity: 1,
						overflow: 'hidden',
						width: '593px',
						height: '305px',
						id: 'img1',
						zIndex: 1
				},
				'div');	
					
	var djp11 = $C(img1,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							src:'images/model1_1.png',
							height: '99px',
							width: '593px'
					},
					'img');	

	var djp12 = $C(img1,
				{
						position: 'absolute',
						top: '145px',
						left: '240px',
						src:'images/model1_2.gif',
						height: '160px',
						width: '113px'
				},
				'img');					
	
}
//加载PC页面single_div2
function create_div2(){

	var div2_w = 1400;
	console.log(w);
	if(w < 1400 && w > 980){
		div2_w = w;
	}
	else if(w <=980){
		div2_w = 980;				
	}

	var single_div2 = $C(main2,
							{
									id: 'single_div2',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div2_w + 'px', 
									height: '431px', 
									overflow: 'hidden',
									backgroundColor:'white',
									zIndex: 1
							},
							'div');

	var ll2_left = (div2_w - 128)/2;
	console.log(ll2_left);
							
	var ll2 = $C(single_div2,
					{
							position: 'absolute',
							top: '45px',
							left: ll2_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '128px',
							height: '30px',
							id: 'll2'
					},
					'div');	
	
	var l21 = $C(ll2,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							lineHeight: '30px',
							height: '30px',
							width: '128px',
							color: '#4f4f4f',
							textDecoration: 'none',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: '30px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜模式'
					},
					'label');	

	var jian_ge = (div2_w - 576)/6;
	console.log(jian_ge);
	var ll3_left = jian_ge*1.5;
				
	var ll3 = $C(single_div2,
					{
							position: 'absolute',
							top: '131px',
							left: ll3_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '144px',
							height: '240px',
							id: 'll3',
							backgroundImage: 'url(images/model2_1.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var l31 = $C(ll3,
					{
							display: 'block',
							paddingTop: '162px',
							paddingLeft:'20px',
							lineHeight: '20px',
							height: '182px',
							width: '144px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '缩短供应链'
					},
					'label');	

	var l32 = $C(ll3,
					{
							display: 'block',
							paddingTop: '18px',
							paddingLeft:'27px',
							lineHeight: '14px',
							height: '32px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '一级市场资源'
					},
					'label');
					
	var l33 = $C(ll3,
					{
							display: 'block',
							paddingTop: '10px',
							paddingLeft:'12px',
							lineHeight: '14px',
							height: '24px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '减少环节降低成本'
					},
					'label');					

	var ll4_left = 144 + jian_ge*2.5;
				
	var ll4 = $C(single_div2,
					{
							position: 'absolute',
							top: '131px',
							left: ll4_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '144px',
							height: '240px',
							id: 'll4',
							backgroundImage: 'url(images/model2_2.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var l41 = $C(ll4,
					{
							display: 'block',
							paddingTop: '162px',
							paddingLeft:'10px',
							lineHeight: '20px',
							height: '182px',
							width: '144px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '提供标品食材'
					},
					'label');	

	var l42 = $C(ll4,
					{
							display: 'block',
							paddingTop: '18px',
							paddingLeft:'35px',
							lineHeight: '14px',
							height: '32px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '标准化食材'
					},
					'label');
					
	var l43 = $C(ll4,
					{
							display: 'block',
							paddingTop: '10px',
							paddingLeft:'12px',
							lineHeight: '14px',
							height: '24px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '帮你减少人力成本'
					},
					'label');	

	var ll5_left = 288 + jian_ge*3.5;
				
	var ll5 = $C(single_div2,
					{
							position: 'absolute',
							top: '131px',
							left: ll5_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '144px',
							height: '240px',
							id: 'll5',
							backgroundImage: 'url(images/model2_3.png)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var l51 = $C(ll5,
					{
							display: 'block',
							paddingTop: '162px',
							paddingLeft:'30px',
							lineHeight: '20px',
							height: '182px',
							width: '144px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '专业检测'
					},
					'label');	

	var l52 = $C(ll5,
					{
							display: 'block',
							paddingTop: '18px',
							paddingLeft:'42px',
							lineHeight: '14px',
							height: '32px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '专业检测'
					},
					'label');
					
	var l53 = $C(ll5,
					{
							display: 'block',
							paddingTop: '10px',
							paddingLeft:'19px',
							lineHeight: '14px',
							height: '24px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '保证品质与安全'
					},
					'label');

	var ll6_left = 432 + jian_ge*4.5;
				
	var ll6 = $C(single_div2,
					{
							position: 'absolute',
							top: '131px',
							left: ll6_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '144px',
							height: '240px',
							id: 'll6',
							backgroundImage: 'url(images/model2_4.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var l61 = $C(ll6,
					{
							display: 'block',
							paddingTop: '162px',
							paddingLeft:'10px',
							lineHeight: '20px',
							height: '182px',
							width: '144px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '高效物流配送'
					},
					'label');	

	var l62 = $C(ll6,
					{
							display: 'block',
							paddingTop: '18px',
							paddingLeft:'42px',
							lineHeight: '14px',
							height: '32px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '当日采购'
					},
					'label');
					
	var l63 = $C(ll6,
					{
							display: 'block',
							paddingTop: '10px',
							paddingLeft:'26px',
							lineHeight: '14px',
							height: '24px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '次日准时送达'
					},
					'label');						
	
}
//加载PC页面single_div3
function create_div3(){

	var div3_w = 1400;
	console.log(w);
	if(w < 1400 && w > 980){
		div3_w = w;
	}
	else if(w <=980){
		div3_w = 980;
	}
    
	var single_div3 = $C(main3,
							{
									id: 'single_div3',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div3_w + 'px', 
									height: '401px', 
									overflow: 'hidden',
									backgroundColor:'#f8f8f8',
									zIndex: 1
							},
							'div');
    
	var ll7_left = (div3_w - 128)/2;
	console.log(ll7_left);
							
	var ll7 = $C(single_div3,
					{
							position: 'absolute',
							top: '45px',
							left: ll7_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '130px',
							height: '30px',
							id: 'll7'
					},
					'div');	
	
	var l71 = $C(ll7,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							lineHeight: '30px',
							height: '30px',
							width: '130px',
							color: '#4f4f4f',
							textDecoration: 'none',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: '30px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '下单流程'
					},
					'label');	
    
	var jian_ge2 = (div3_w - 470)/5;
	console.log(jian_ge2);
	var ll8_left = jian_ge2*1.5;
				
	var ll8 = $C(single_div3,
					{
							position: 'absolute',
							top: '131px',
							left: ll8_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '150px',
							height: '188px',
							id: 'll8',
							backgroundImage: 'url(images/model3_1.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '2px 0px'
					},
					'div');	
	
	var l81 = $C(ll8,
					{
							display: 'block',
							paddingTop: '166px',
							paddingLeft:'2px',
							lineHeight: '20px',
							height: '188px',
							width: '150px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '关注微信公众号'
					},
					'label');

	var jiantou_jg = (jian_ge2 - 53)/2; 				
	var img2_left = 150 + jiantou_jg + jian_ge2*1.5;
	
	var img2 = $C(single_div3,
				{
						position: 'absolute',
						top: '195px',
						left: img2_left + 'px',
						opacity: 1,
						overflow: 'hidden',
						width: '53px',
						height: '36px',
						id: 'img2',
						zIndex: 1
				},
				'div');	
					
	var djp2 = $C(img2,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							src:'images/model3_4.gif',
							height: '36px',
							width: '53px'
					},
					'img');
					
	var ll9_left = 150 + jian_ge2*2.5;
				
	var ll9 = $C(single_div3,
					{
							position: 'absolute',
							top: '131px',
							left: ll9_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '150px',
							height: '188px',
							id: 'll9',
							backgroundImage: 'url(images/model3_2.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '2px 0px'
					},
					'div');	
	
	var l91 = $C(ll9,
					{
							display: 'block',
							paddingTop: '166px',
							paddingLeft:'12px',
							lineHeight: '20px',
							height: '188px',
							width: '150px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '进入商城下单'
					},
					'label');

	var img3_left = 300 + jiantou_jg + jian_ge2*2.5;
	
	var img3 = $C(single_div3,
				{
						position: 'absolute',
						top: '195px',
						left: img3_left + 'px',
						opacity: 1,
						overflow: 'hidden',
						width: '53px',
						height: '36px',
						id: 'img3',
						zIndex: 1
				},
				'div');	
					
	var djp3 = $C(img3,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							src:'images/model3_4.gif',
							height: '36px',
							width: '53px'
					},
					'img');
	
	var ll10_left = 300 + jian_ge2*3.5;
				
	var ll10 = $C(single_div3,
					{
							position: 'absolute',
							top: '131px',
							left: ll10_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '170px',
							height: '188px',
							id: 'll10',
							backgroundImage: 'url(images/model3_3.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '12px 0px'
					},
					'div');	
	
	var l101 = $C(ll10,
					{
							display: 'block',
							paddingTop: '166px',
							paddingLeft:'2px',
							lineHeight: '20px',
							height: '188px',
							width: '170px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '次日按时送货上门'
					},
					'label');
	
}
//加载PC页面single_div4
function create_div4(){
	
	var div4_w = 1400;
	console.log(w);
	if(w < 1400 && w > 980){
		div4_w = w;
	}
	else if(w <=980){
		div4_w = 980;			
	}
	
	var single_div4 = $C(main4,
							{
									id: 'single_div4',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div4_w + 'px', 
									height: '446px', 
									overflow: 'hidden',
									backgroundColor:'white',
									zIndex: 1
							},
							'div');
							
	var ll11_left = (div4_w - 97)/2;
	console.log(ll11_left);
							
	var ll11 = $C(single_div4,
					{
							position: 'absolute',
							top: '45px',
							left: ll11_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '97px',
							height: '30px',
							id: 'll11'
					},
					'div');	
	
	var l111 = $C(ll11,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							lineHeight: '30px',
							height: '30px',
							width: '97px',
							color: '#4f4f4f',
							textDecoration: 'none',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: '30px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							zIndex: 5,
							i: '客户说'
					},
					'label');	
	
	var div4_slides = $C(single_div4,
					{
							id: 'div4_slides',
							top: '0px',
							left: '0px',
							width: div4_w + 'px',
							className: 'slides'
							//backgroundColor:'yellow'
					},
					'div');
	
	var slides1 = $C(div4_slides,
					{
							id: 'slides1',
							width: div4_w + 'px',
							className: 'slideInner'
							//backgroundColor:'yellow'
					},
					'div');
	
	var slides_aa1 = $C(slides1,
					{
							href: "#",
							top: '0px',
							left:'0px',
							right: '0px',
							bottom: '0px',
							width: div4_w + 'px',
							id: 'slides_aa1'
							//backgroundColor:'yellow'
					},
					'a');
					
	var img4_left = (div4_w - 510)/2;
	
	var img4 = $C(slides_aa1,
				{
						position: 'absolute',
						top: '156px',
						left: img4_left + 'px',
						opacity: 1,
						overflow: 'hidden',
						width: '104px',
						height: '104px',
						id: 'img4',
						zIndex: 1
				},
				'div');	
					
	var djp4 = $C(img4,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							src:'images/model4_1.gif',
							height: '104px',
							width: '104px'
					},
					'img');	
		
	var ll12_left = img4_left + 147;
		
	var ll12 = $C(slides_aa1,
					{
							position: 'absolute',
							top: '175px',
							left: ll12_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '370px',
							height: '100px',
							id: 'll12'
					},
					'div');	
	
	var l121 = $C(ll12,
					{
							display: 'absolute',
							top: '0px',
							left:'0px',
							lineHeight: '20px',
							height: '20px',
							width: '170px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '曦牛海鲜餐厅'
					},
					'label');

	var l122 = $C(ll12,
					{
							display: 'block',
							paddingTop: '34px',
							paddingLeft:'0px',
							marginLeft: '-10px',
							lineHeight: '16px',
							height: '50px',
							width: '370px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '“在匠鲜采购的海鲜品质很棒！服务也很好。”'
					},
					'label');					

	var slides_aa2 = $C(slides1,
					{
							href: "#",
							width: div4_w + 'px',
							id: 'slides_aa2'
					},
					'a');

	var img5_left = (div4_w - 510)/2;
	
	var img5 = $C(slides_aa2,
				{
						position: 'absolute',
						top: '156px',
						left: img5_left + 'px',
						opacity: 1,
						overflow: 'hidden',
						width: '104px',
						height: '104px',
						id: 'img5',
						zIndex: 1
				},
				'div');	
					
	var djp5 = $C(img5,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							src:'images/model4_2.png',
							height: '104px',
							width: '104px'
					},
					'img');	
		
	var ll13_left = img5_left + 147;
		
	var ll13 = $C(slides_aa2,
					{
							position: 'absolute',
							top: '175px',
							left: ll13_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '370px',
							height: '100px',
							id: 'll13'
					},
					'div');	
	
	var l131 = $C(ll13,
					{
							display: 'absolute',
							top: '0px',
							left:'0px',
							lineHeight: '20px',
							height: '20px',
							width: '170px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '盒马鲜生'
					},
					'label');

	var l132 = $C(ll13,
					{
							display: 'block',
							paddingTop: '34px',
							paddingLeft:'0px',
							marginLeft: '-10px',
							lineHeight: '16px',
							height: '50px',
							width: '370px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '“匠鲜是我们的食材供应商，匠鲜提供的食材<br/>&nbsp;品质、服务都能堪称一流！”'
					},
					'label');														
					
	var jiantou1_w = div4_w - 200;				
					
	var jiantou1 = $C(div4_slides,
					{
							id: 'jiantou1',
							width: jiantou1_w + 'px',
							position: 'absolute',
							left:'100px',
							top: '100px',							
							className: 'nav'
							//backgroundColor:'yellow'
					},
					'div');

	var jiantou1_prev = $C(jiantou1,
					{
							href: "javascript:;",
							className: 'prev'							
							//backgroundColor:'yellow'
					},
					'a');	

	var jiantou1_next = $C(jiantou1,
					{
							href: "javascript:;",
							className: 'next'							
							//backgroundColor:'yellow'
					},
					'a');					
	
	$(".slideInner").slide({
		slideContainer: $('.slideInner a'),
		effect: 'easeOutCirc',
		autoRunTime: 2000,
		slideSpeed: 1000,
		nav: true,
		autoRun: true,
		prevBtn: $('.prev'),
		nextBtn: $('.next')
	});	
}
//加载PC页面single_div5
function create_div5(){
	
	var div5_w = 1400;
	console.log(w);
	if(w < 1400 && w > 980){
		div5_w = w;
	}
	else if(w <=980){
		div5_w = 980;			
	}
    
	var single_div5 = $C(main5,
							{
									id: 'single_div5',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div5_w + 'px', 
									height: '433px', 
									overflow: 'hidden',
									backgroundColor:'#f8f8f8',
									zIndex: 1
							},
							'div');	
							
	var jian_ge3 = (div5_w - 535)/6;
	console.log(jian_ge3);
	var ll15_left = jian_ge3*1.5;
				
	var ll15 = $C(single_div5,
					{
							position: 'absolute',
							top: '53px',
							left: ll15_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '121px',
							height: '145px',
							id: 'll15',
							backgroundImage: 'url(images/model5_1.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '4px 0px'
					},
					'div');	
	
	var l151 = $C(ll15,
					{
							display: 'block',
							paddingTop: '125px',
							paddingLeft:'0px',
							lineHeight: '16px',
							height: '145px',
							width: '121px',
							color: '#989898',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜微信公众号'
					},
					'label');

	var ll16_left = 121 + jian_ge3*2.5;
				
	var ll16 = $C(single_div5,
					{
							position: 'absolute',
							top: '53px',
							left: ll16_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '113px',
							height: '145px',
							id: 'll16',
							backgroundImage: 'url(images/model5_2.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var l161 = $C(ll16,
					{
							display: 'block',
							paddingTop: '125px',
							paddingLeft:'24.5px',
							lineHeight: '16px',
							height: '145px',
							width: '113px',
							color: '#989898',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜微博'
					},
					'label');	

	var ll17_left = 234 + jian_ge3*3.75;
	var ll17_w = 290 + jian_ge3*0.75;
	var img171_left = (jian_ge3*0.75);
	var img171_w = img171_left + 45;	
	var l172_left = jian_ge3*0.75 + 55;
	var l172_w = l172_left + 234;
				
	var ll17 = $C(single_div5,
					{
							position: 'absolute',
							top: '43px',
							left: ll17_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: ll17_w + 'px',
							height: '151px',
							id: 'll17',
							backgroundImage: 'url(images/model5_6.png)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var img171 = $C(ll17,
					{
							display: 'inline-block',
							paddingTop: '31px',
							paddingLeft: img171_left + 'px',
							marginBottom:'-5px',
							src:'images/phone.gif',
							height: '70px',
							id: 'img171',
							width: img171_w + 'px'
					},
					'img');
	
	var l171 = $C(ll17,
					{
							display: 'inline-block',
							paddingTop: '0px',
							paddingLeft: '10px',	
							lineHeight: '30px',
							height: '30px',
							width: '244px',
							color: '#2e90c8',
							id: 'l171',
							textDecoration: 'none',
							fontSize: '30px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '400-661-2061'
					},
					'label');

	var l172 = $C(ll17,
					{
							display: 'block',
							paddingTop: '30px',
							paddingLeft: l172_left + 'px',	
							lineHeight: '16px',
							height: '16px',
							width: l172_w + 'px',
							color: '#989898',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '周一至周日8点-20点'
					},
					'label');

	var jian_ge4 = (div5_w - 390)/5;
	console.log(jian_ge4);
	var ll18_left = jian_ge4*1.5;
				
	var ll18 = $C(single_div5,
					{
							position: 'absolute',
							top: '265px',
							left: ll18_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '130px',
							height: '100px',
							id: 'll18',
							backgroundImage: 'url(images/model5_3.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '32px 0px'
					},
					'div');	
	
	var l181 = $C(ll18,
					{
							display: 'block',
							paddingTop: '77px',
							paddingLeft:'10px',
							lineHeight: '18px',
							height: '100px',
							width: '130px',
							color: '#429acc',
							textDecoration: 'none',
							fontSize: '18px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '全天金牌服务'
					},
					'label');	

	var ll19_left = 130 + jian_ge4*2.5;
				
	var ll19 = $C(single_div5,
					{
							position: 'absolute',
							top: '265px',
							left: ll19_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '130px',
							height: '100px',
							id: 'll19',
							backgroundImage: 'url(images/model5_4.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '32px 0px'
					},
					'div');	
	
	var l191 = $C(ll19,
					{
							display: 'block',
							paddingTop: '77px',
							paddingLeft:'0px',
							lineHeight: '18px',
							height: '100px',
							width: '130px',
							color: '#429acc',
							textDecoration: 'none',
							fontSize: '18px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '100%优质资源'
					},
					'label');

	var ll20_left = 260 + jian_ge4*3.5;
				
	var ll20 = $C(single_div5,
					{
							position: 'absolute',
							top: '265px',
							left: ll20_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '130px',
							height: '100px',
							id: 'll20',
							backgroundImage: 'url(images/model5_5.png)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '32px 0px'
					},
					'div');	
	
	var l201 = $C(ll20,
					{
							display: 'block',
							paddingTop: '77px',
							paddingLeft:'10px',
							lineHeight: '18px',
							height: '100px',
							width: '130px',
							color: '#429acc',
							textDecoration: 'none',
							fontSize: '18px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '高效物流配送'
					},
					'label');					
}

function create_phone_div1(){
	
	var div1_w = w;
	var div1_h = h;
	console.log(w);
	
	if(w < 321){
	}							
	if(w >= 600 && w <= 920){		
	}
	//iPad横着
	if(w > 920){		
	}	
	
	var single_div1 = $C(main1,
							{
									id: 'single_div1',
									position: 'relative', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div1_w + 'px', 
									height: div1_h + 'px', 
									overflow: 'hidden',
									backgroundImage:'url(images/P_m1_1.png)',
									backgroundPosition: '-130px 50px',
									backgroundSize: 'cover',
									backgroundRepeat:'no-repeat',
									zIndex: 1
							},
							'div');

	var ll1_left = (div1_w - 230)/2;
	console.log(ll1_left);
					
	var ll1 = $C(single_div1,
					{
							position: 'absolute',
							top: '80px',
							left: ll1_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '230px',
							height: '146px',
							id: 'll1',
							zIndex: 1
					},
					'div');	
	
	var l11 = $C(ll1,
					{
							position: 'absolute',
							top: '0px',
							left: '17px',
							lineHeight: '50px',
							height: '50px',
							width: '196px',
							color: 'white',
							textDecoration: 'none',
							textAlign: 'center',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: '30px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '互联网+'
					},
					'label');
	
	var l12 = $C(ll1,
					{
							position: 'absolute',
							top: '62px',
							left: '0px',
							lineHeight: '30px',
							height: '60px',
							width: '230px',
							color: 'white',
							textDecoration: 'none',
							textAlign: 'center',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: '20px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜，用互联网技术<br/> 改造海鲜食材供应 '
					},
					'label');	
	
	var img1_left = (div1_w - 320)/2;
	console.log(img1_left);	
	
	var img1 = $C(single_div1,
				{
						position: 'absolute',
						top: '220px',
						left: img1_left + 'px',
						opacity: 1,
						overflow: 'hidden',
						width: '320px',
						height: '305px',
						id: 'img1',
						zIndex: 1
				},
				'div');	
					
	var djp11 = $C(img1,
					{
							position: 'absolute',
							top: '0px',
							left: '0px',
							src:'images/P_m1_2.png',
							height: '76px',
							width: '320px'
					},
					'img');	

	var djp12 = $C(img1,
				{
						position: 'absolute',
						top: '100px',
						left: '103px',
						src:'images/model1_2.gif',
						height: '160px',
						width: '113px'
				},
				'img');					
		
}

function create_phone_div2(){

	 //alert(pag_size);
	 var slides_h = h;
	 //alert(slides_h);
	 	 
	var img_slides_w = 290;
	//alert(img_slides_w);
	var img_slides_h = 120; 
	//alert(img_slides_h);
	var img_slides_top1 = 60;
	var img_slides_top2 = 90;
	var img_slides_left = (w - 290)/2;
	var mai2_l1_top = 60;
	var img1_marginT = 210;
	if(w < 374){
		//alert(img_slides_h);
		var img_slides_top1 = 60;
		var img_slides_top2 = 80;
	}
	if (h < 530){
		mai2_l1_top = 40;
		img1_marginT = 160;
	}
	
	var img_slides1 = $C(main2,
					{
							position: 'absolute',
							top: img_slides_top1 + 'px',
							left: img_slides_left + 'px',
							overflow: 'hidden',
							opacity: 1,
							width: img_slides_w + 'px',
							height: img_slides_h + 'px',
							id: 'img_slides1',
							zIndex: 5,
							//backgroundColor:'yellow'
					},
					'div');	
							
	var mai2_l1 = $C(img_slides1,
					{
							display: 'block',
							lineHeight: '38px',
							height: '120px',
							width: '290px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							paddingLeft: '0px',
							paddingTop: mai2_l1_top + 'px',
							fontSize: '30px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '2px',
							i: '匠鲜模式'
					},
					'label');						
		 
	 var flex1 = $C(main2,
							{	
								id: 'flex1',
								position: 'absolute',
								left: '0px', 
								top: '0px',								
								width: w + 'px', 
								height: slides_h + 'px', 
								zIndex: 1,
							    className: 'flexslider'		 
							},
							'div');
	var slides1 = $C(flex1,
							{	
								width: w + 'px', 
								height: slides_h + 'px', 
								className: 'sliders'
							},
							'ul');	
    var two_li1 = $C(slides1,
							{		
								width: w + 'px', 
								height: slides_h + 'px', 
								backgroundColor: 'white'
							},
							'li');
	 var two_li2 = $C(slides1,
								{	
									width: w + 'px', 
									height: slides_h + 'px', 								
									backgroundColor: 'white'								
								},
								'li');	
	 var two_li3 = $C(slides1,
								{		
									width: w + 'px', 
									height: slides_h + 'px',
									backgroundColor: 'white'								    
								},
								'li');	
	 var two_li4 = $C(slides1,
								{	
									width: w + 'px', 
									height: slides_h + 'px',						
									backgroundColor: 'white'
								},
								'li');
								
	var img_left = (w - 144)/2;
	var ll_left = (w - 145)/2;
								
    var _img1 = $C(two_li1,
								{	
									display: 'table',
									marginLeft: img_left + 'px', 									
									marginTop: img1_marginT + 'px',
									width: '144px',
									height: '144px', 
									src:'images/model2_1.gif'
								},
								'img');
	var l31 = $C(two_li1,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '144px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '缩短供应链'
					},
					'label');	

	var l32 = $C(two_li1,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '20px',
							lineHeight: '20px',
							height: '40px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '一级市场资源<br/>减少环节降低成本'
					},
					'label');

    var _img2 = $C(two_li2,
								{	
									display: 'table',
									marginLeft: img_left + 'px',									
									marginTop: img1_marginT + 'px',
									width: '144px',
									height: '144px', 
									src:'images/model2_2.gif'
								},
								'img');
	var l41 = $C(two_li2,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '144px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '提供标品食材'
					},
					'label');	

	var l42 = $C(two_li2,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '20px',
							lineHeight: '20px',
							height: '40px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '标准化食材<br/>帮你减少人力成本'
					},
					'label');

    var _img3 = $C(two_li3,
								{	
									display: 'table',
									marginLeft: img_left + 'px', 									
									marginTop: img1_marginT + 'px',
									width: '144px',
									height: '144px', 
									src:'images/model2_3.png'
								},
								'img');
	var l51 = $C(two_li3,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '144px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '专业检测'
					},
					'label');	

	var l52 = $C(two_li3,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '20px',
							lineHeight: '20px',
							height: '40px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '专业检测<br/>保证品质与安全'
					},
					'label');

    var _img4 = $C(two_li4,
								{	
									display: 'table',
									marginLeft: img_left + 'px', 									
									marginTop: img1_marginT + 'px',
									width: '144px',
									height: '144px', 
									src:'images/model2_4.gif'
								},
								'img');
	var l61 = $C(two_li4,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '144px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '高效物流配送'
					},
					'label');	

	var l62 = $C(two_li4,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '20px',
							lineHeight: '20px',
							height: '40px',
							width: '144px',
							color: '#787878',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '当日采购<br/>次日准时送达'
					},
					'label');					

	$('.flexslider').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing"
	});			
				
}

function create_phone_div3(){
	 //alert(pag_size);
	 var slides_h = h;
	 //alert(slides_h);
	 	 
	var img_slides_w = 290;
	//alert(img_slides_w);
	var img_slides_h = 120; 
	//alert(img_slides_h);
	var img_slides_top1 = 60;
	var img_slides_top2 = 90;
	var img_slides_left = (w - 290)/2;
	var mai2_l1_top = 80;
	var img1_marginT = 230;
	if(w < 374){
		//alert(img_slides_h);
		var img_slides_top1 = 60;
		var img_slides_top2 = 80;
	}
	if (h < 530){
		mai2_l1_top = 60;
		img1_marginT = 190;
	}
	
	var img_slides2 = $C(main3,
					{
							position: 'absolute',
							top: img_slides_top1 + 'px',
							left: img_slides_left + 'px',
							overflow: 'hidden',
							opacity: 1,
							width: img_slides_w + 'px',
							height: img_slides_h + 'px',
							id: 'img_slides2',
							zIndex: 5,
							//backgroundColor:'yellow'
					},
					'div');	
							
	var mai3_l1 = $C(img_slides2,
					{
							display: 'block',
							lineHeight: '38px',
							height: '120px',
							width: '290px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							paddingLeft: '0px',
							paddingTop: mai2_l1_top +'px',
							fontSize: '30px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '2px',
							i: '下单流程'
					},
					'label');						
		 
	 var flex2 = $C(main3,
							{	
								id: 'flex2',
								position: 'absolute',
								left: '0px', 
								top: '0px',								
								width: w + 'px', 
								height: slides_h + 'px', 
								zIndex: 1,
							    className: 'flexslider'		 
							},
							'div');
	var slides2 = $C(flex2,
							{	
								width: w + 'px', 
								height: slides_h + 'px', 
								className: 'sliders'
							},
							'ul');	
    var three_li1 = $C(slides2,
							{		
								width: w + 'px', 
								height: slides_h + 'px', 
								backgroundColor: 'white'
							},
							'li');
	 var three_li2 = $C(slides2,
								{	
									width: w + 'px', 
									height: slides_h + 'px', 								
									backgroundColor: 'white'								
								},
								'li');	
	 var three_li3 = $C(slides2,
								{		
									width: w + 'px', 
									height: slides_h + 'px',
									backgroundColor: 'white'								    
								},
								'li');	
								
	var img_left = (w - 144)/2;
	var ll_left = (w - 170)/2;
								
    var _img1 = $C(three_li1,
								{	
									display: 'table',
									marginLeft: img_left + 'px', 									
									marginTop: img1_marginT + 'px',
									width: '144px',
									height: '144px', 
									src:'images/model3_1.gif'
								},
								'img');
	var l31 = $C(three_li1,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '170px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '关注微信公众号'
					},
					'label');	

    var _img2 = $C(three_li2,
								{	
									display: 'table',
									marginLeft: img_left + 'px', 									
									marginTop: img1_marginT + 'px',
									width: '144px',
									height: '144px', 
									src:'images/model3_2.gif'
								},
								'img');
	var l41 = $C(three_li2,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '170px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '进入商城下单'
					},
					'label');	

    var _img3 = $C(three_li3,
								{	
									display: 'table',
									marginLeft: img_left + 'px', 									
									marginTop: img1_marginT + 'px',
									width: '144px',
									height: '144px', 
									src:'images/model3_3.gif'
								},
								'img');
	var l51 = $C(three_li3,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '170px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '次日按时送货上门'
					},
					'label');	
					

	$('.flexslider').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing"
	});	
}

function create_phone_div4(){
	 //alert(pag_size);
	 var slides_h = h;
	 //alert(slides_h);
	 	 
	var img_slides_w = 290;
	//alert(img_slides_w);
	var img_slides_h = 120; 
	//alert(img_slides_h);
	var img_slides_top1 = 60;
	var img_slides_top2 = 90;
	var img_slides_left = (w - 290)/2;
	var mai2_l1_top = 60;
	var img1_marginT = 210;
	if(w < 374){
		//alert(img_slides_h);
		var img_slides_top1 = 60;
		var img_slides_top2 = 80;
	}
	if (h < 530){
		mai2_l1_top = 40;
		img1_marginT = 160;
	}
	
	var img_slides3 = $C(main4,
					{
							position: 'absolute',
							top: img_slides_top1 + 'px',
							left: img_slides_left + 'px',
							overflow: 'hidden',
							opacity: 1,
							width: img_slides_w + 'px',
							height: img_slides_h + 'px',
							id: 'img_slides3',
							zIndex: 5,
							//backgroundColor:'yellow'
					},
					'div');	
							
	var mai4_l1 = $C(img_slides3,
					{
							display: 'block',
							lineHeight: '38px',
							height: '120px',
							width: '290px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							paddingLeft: '0px',
							paddingTop: mai2_l1_top + 'px',
							fontSize: '30px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '2px',
							i: '客户说'
					},
					'label');						
		 
	 var flex3 = $C(main4,
							{	
								id: 'flex2',
								position: 'absolute',
								left: '0px', 
								top: '0px',								
								width: w + 'px', 
								height: slides_h + 'px', 
								zIndex: 1,
							    className: 'flexslider'		 
							},
							'div');
	var slides3 = $C(flex3,
							{	
								width: w + 'px', 
								height: slides_h + 'px', 
								className: 'sliders'
							},
							'ul');	
    var four_li1 = $C(slides3,
							{		
								width: w + 'px', 
								height: slides_h + 'px', 
								backgroundColor: 'white'
							},
							'li');
	 var four_li2 = $C(slides3,
								{	
									width: w + 'px', 
									height: slides_h + 'px', 								
									backgroundColor: 'white'								
								},
								'li');		
								
	var img_left = (w - 103)/2;
	var ll_left = (w - 170)/2;
								
    var _img1 = $C(four_li1,
								{	
									display: 'table',
									marginLeft: img_left + 'px', 									
									marginTop: img1_marginT + 'px',
									width: '103px',
									height: '103px', 
									src:'images/model4_1.gif'
								},
								'img');
	var l31 = $C(four_li1,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '170px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '曦牛海鲜餐厅'
					},
					'label');	

	var l32 = $C(four_li1,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '20px',
							lineHeight: '20px',
							height: '40px',
							width: '170px',
							color: '#787878',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '“在匠鲜采购的海鲜品<br/>质很棒！服务也很好。”'
					},
					'label');

    var _img2 = $C(four_li2,
								{	
									display: 'table',
									marginLeft: img_left + 'px', 									
									marginTop: img1_marginT + 'px',
									width: '103px',
									height: '103px', 
									src:'images/model4_2.png'
								},
								'img');
	var l41 = $C(four_li2,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '30px',
							lineHeight: '32px',
							height: '32px',
							width: '170px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '盒马生鲜'
					},
					'label');	

	var l42 = $C(four_li2,
					{
							display: 'table',
							marginLeft: ll_left + 'px', 
							marginTop: '20px',
							lineHeight: '20px',
							height: '40px',
							width: '170px',
							color: '#787878',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '14px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '“匠鲜是我们的食材供应商，匠鲜提供的食材<br/>&nbsp;品质、服务都能堪称一流！”'
					},
					'label');
					

	$('.flexslider').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing"
	});	
}

function create_phone_div5(){

	
	var div5_w = w;
	var div5_h = h - 70;
	console.log(w);
	
	if(w < 321){
	}							
	if(w >= 600 && w <= 920){		
	}
	//iPad横着
	if(w > 920){		
	}	
	
	var single_div5 = $C(main5,
							{
									id: 'single_div1',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									top: '40px',
									left: '0px',
									width: div5_w + 'px', 
									height: div5_h + 'px', 
									overflow: 'hidden',
									backgroundColor:'#fafafa',
									zIndex: 1
							},
							'div');

	var jian_ge3 = (div5_w - 317)/6;
	console.log(jian_ge3);
	var ll15_left = jian_ge3*1.5;
				
	var ll15 = $C(single_div5,
					{
							position: 'absolute',
							top: '93px',
							left: ll15_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '88px',
							height: '145px',
							id: 'll15',
							backgroundImage: 'url(images/model5_1.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
							backgroundPosition: '4px 0px'
					},
					'div');	
	
	var l151 = $C(ll15,
					{
							display: 'block',
							paddingTop: '100px',
							paddingLeft:'0px',
							lineHeight: '12px',
							height: '145px',
							width: '88px',
							color: '#989898',
							textDecoration: 'none',
							fontSize: '12px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '0px',
							i: '匠鲜微信公众号'
					},
					'label');

	var ll16_left = 88 + jian_ge3*2.5;
				
	var ll16 = $C(single_div5,
					{
							position: 'absolute',
							top: '93px',
							left: ll16_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '88px',
							height: '145px',
							id: 'll16',
							backgroundImage: 'url(images/model5_2.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var l161 = $C(ll16,
					{
							display: 'block',
							paddingTop: '100px',
							paddingLeft:'0px',
							lineHeight: '12px',
							height: '145px',
							width: '88px',
							color: '#989898',
							textDecoration: 'none',
							textAlign: 'center',
							fontSize: '12px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜微博'
					},
					'label');	

	var ll17_left = 170 + jian_ge3*3.75;
	var ll17_w = 147 + jian_ge3*0.75;
	var img171_left = (jian_ge3*0.75) + 5;
	var img171_w = img171_left + 32;	
	var l172_left = jian_ge3*0.75 + 18;
	var l172_w = l172_left + 127;
				
	var ll17 = $C(single_div5,
					{
							position: 'absolute',
							top: '83px',
							left: ll17_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: ll17_w + 'px',
							height: '151px',
							id: 'll17',
							backgroundImage: 'url(images/model5_6.png)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '-5px 0px'
					},
					'div');	
	
	var img171 = $C(ll17,
					{
							display: 'inline-block',
							paddingTop: '32.2px',
							marginLeft: img171_left + 'px',
							marginBottom:'-7px',
							src:'images/phone.gif',
							height: '60px',
							id: 'img171',
							width: '32px'
					},
					'img');
	
	var l171 = $C(ll17,
					{
							display: 'inline-block',
							paddingTop: '0px',
							paddingLeft: '0px',	
							lineHeight: '16px',
							height: '16px',
							width: '105px',
							color: '#2e90c8',
							id: 'l171',
							textDecoration: 'none',
							fontSize: '16px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							href:'tel://400-661-2061',
							letterSpacing: '1px',
							i: '400-661-2061'
					},
					'a');

	var l172 = $C(ll17,
					{
							display: 'block',
							paddingTop: '30px',
							paddingLeft: l172_left + 'px',	
							lineHeight: '12px',
							height: '12px',
							width: l172_w + 'px',
							color: '#989898',
							textDecoration: 'none',
							fontSize: '12px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '周一至周日8点-20点'
					},
					'label');

	var jian_ge4 = (div5_w - 255)/5;
	console.log(jian_ge4);
	var ll18_left = jian_ge4*1.5;
				
	var ll18 = $C(single_div5,
					{
							position: 'absolute',
							top: '240px',
							left: ll18_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '85px',
							height: '120px',
							id: 'll18',
							backgroundImage: 'url(images/model5_3.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: '70% 50%',
							backgroundPosition: '12.5px 20px'
					},
					'div');	
	
	var l181 = $C(ll18,
					{
							display: 'block',
							paddingTop: '92px',
							paddingLeft:'0px',
							lineHeight: '12px',
							height: '100px',
							width: '85px',
							color: '#429acc',
							textDecoration: 'none',
							fontSize: '12px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '全天金牌服务'
					},
					'label');	

	var ll19_left = 85 + jian_ge4*2.5;
				
	var ll19 = $C(single_div5,
					{
							position: 'absolute',
							top: '240px',
							left: ll19_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '85px',
							height: '120px',
							id: 'll19',
							backgroundImage: 'url(images/model5_4.gif)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: '70% 50%',
							backgroundPosition: '12.5px 20px'
					},
					'div');	
	
	var l191 = $C(ll19,
					{
							display: 'block',
							paddingTop: '92px',
							paddingLeft:'0px',
							lineHeight: '12px',
							height: '100px',
							width: '85px',
							color: '#429acc',
							textDecoration: 'none',
							fontSize: '12px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '100%优质资源'
					},
					'label');

	var ll20_left = 170 + jian_ge4*3.5;
				
	var ll20 = $C(single_div5,
					{
							position: 'absolute',
							top: '240px',
							left: ll20_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '85px',
							height: '120px',
							id: 'll20',
							backgroundImage: 'url(images/model5_5.png)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: '70% 50%',
							backgroundPosition: '12.5px 20px'
					},
					'div');	
	
	var l201 = $C(ll20,
					{
							display: 'block',
							paddingTop: '92px',
							paddingLeft:'0px',
							lineHeight: '12px',
							height: '100px',
							width: '85px',
							color: '#429acc',
							textDecoration: 'none',
							fontSize: '12px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '高效物流配送'
					},
					'label');
					
	//var aa10_left = (div5_w	- 215)/2;	
	//				
	//var aa10 = $C(single_div5,
	//				{
	//						position: 'absolute',
	//						top: '420px',
	//						left: aa10_left + 'px',							
	//						opacity: 1,
	//						overflow: 'hidden',
	//						width: '215px',
	//						height: '35px',
	//						id: 'aa10',
	//						backgroundImage: 'url(images/phone.gif)',
	//						backgroundRepeat: 'no-repeat',
	//						backgroundPosition: '0px 0px'
	//				},
	//				'div');	
	//
	//var a10 = $C(aa10,
	//				{
	//						display: 'block',
	//						lineHeight: '24px',
	//						height: '24px',
	//						width: '200px',
	//						color: '#1738c8',
	//						textDecoration: 'none',
	//						paddingTop: '5.5px',
	//						paddingLeft: '45px',
	//						fontSize: '24px',
	//						fontWeight: 'normal',
	//						zIndex: 5,
	//						href:'tel://400-800-8888',
	//						i: '400-800-8888'
	//				},
	//				'a');					
					
	var footer_h = 30;
	var footer_i = "copyright©2016&nbsp;&nbsp;&nbsp;&nbsp;上海匠鲜网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备16003628";
	if(w < 390)
	{
		footer_h =50;
		footer_i ="copyright©2016&nbsp;&nbsp;&nbsp;&nbsp;上海匠鲜网络科技有限公司<br/>沪ICP备16003628";
	}
		
	var footer = $C(main5,
				{
						width: w + 'px',
						position: 'absolute',
						bottom: '0px',
						height: footer_h + 'px',
						background: '#429acc',	
						lineHeight: '20px',
						color: '#e6e6e6',
						paddingTop: '5px',
						fontSize: '10px',
						fontWeight: 'normal',
						i: footer_i,
						textAlign: 'center',
						zIndex: 3
				},
				'div');	
}

