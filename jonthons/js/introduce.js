if(!is_pc()){ 
	//window.location.href = "html/test1.html";
	//margin(上右下左)
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
							color: '#585858',
							textDecoration: 'none',
							marginTop: '17px',
							fontSize: '16px',
							fontWeight: 'normal',
							href: 'index.html',
							i: '首页'
					},
					'a');	
	
	var a2 = $C(aa1,
					{
							display: 'inline-block',
							lineHeight: '16px',
							height: '16px',
							color: '#429acc',
							textDecoration: 'none',
							marginTop: '17px',
							marginLeft: '17px',
							fontSize: '16px',
							fontWeight: 'normal',						
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
	
	var w = $(window).innerWidth();
	var h = $(window).innerHeight();
	//var w = $(window).width();
	//var h = $(window).height();
	var currentSI = 0;
	//alert("body_w = " + w + ";body_h = " + h);
	//alert("body_h = " + h);
	var is_div1_first = true;
	var is_div1_resize = false;
	var is_div2_resize = false;
	var pag_size = "";
	var aa1_w = w - 50;
	
	$(function(){	
				
				$(main1).addClass('slide');
				$(main2).addClass('slide');
				
				$('html.fsvs').css("position", "fixed");	
				$('html.fsvs').css("overflow", "hidden");
				$('html.fsvs').css("height", "100%");	
				$('html.fsvs').css("width", "100%");	
				$('html.fsvs').css("top", "0px");	
				$('html.fsvs').css("left", "0px");	
				//$(aa1).css("width", aa1_w);
				//w = $(window).width();
				//h = $(window).height();
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
				$(main2).css("height", h);				
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
						$(main2).css("height", h);
						$(topbox).css("width", w);
						$(imgtop).css("width", w1);
						//$(main1).empty();
						//$(main2).empty();
						//$(main3).empty();		
						if(currentSI==0) {is_div1_resize = true;}
						if(currentSI==1) {is_div2_resize = true;}
						
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
							color: '#429acc',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
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
							height: '407px',
							background:'#f8f8f8'
					},
					'div');	
					
	var main2 = $C(document.body,
					{
							position:'table',
							margin: 'auto',
							fontFamily:'"微软雅黑", "Hiragino Sans GB", "WenQuanYi Micro Hei", Verdana, Arial',							
							width: '1400px',
							height: '576px',
							background:'white'
					},
					'div');	

	var main3 = $C(document.body,
					{
							position:'table',
							margin: 'auto',
							fontFamily:'"微软雅黑", "Hiragino Sans GB", "WenQuanYi Micro Hei", Verdana, Arial',							
							width: '1400px',
							height: '433px',
							background:'#f8f8f8'
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
			var ll1_l = (single_div_w - 571)/2;	
			var ll2_l = single_div_w*168/1400;
			var ll2_wid = single_div_w*1064/1400;
			var ll22_wid = ll2_wid - 43;
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
				single_div_w = w;
				console.log(single_div_w);
				bg_position = (single_div_w - 1400)/2;
				ll1_l = (single_div_w - 571)/2;
				ll2_l = single_div_w*168/1400;
				ll2_wid = single_div_w*1064/1400;
				ll22_wid = ll2_wid - 43;
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
				$(imgtop).css("width", single_div_w);	
				$(xfbox).css("width", single_div_w);
				$(main1).css("width", single_div_w);
				$(main2).css("width", single_div_w);
				$(main3).css("width", single_div_w);
				$(main1).css("marginLeft", "0px");
				$(main1).css("marginRight", "0px");
				$(main2).css("marginLeft", "0px");
				$(main2).css("marginRight", "0px");
				$(main3).css("marginLeft", "0px");
				$(main3).css("marginRight", "0px");					
				$(footer).css("width", single_div_w);
				//$(footer).css("marginLeft", "0px");
				//$(footer).css("marginRight", "0px");					
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
				$("#single_div2").css("width", single_div_w);
				$("#ll2").css("width", ll2_wid);
				$("#ll2").css("left", ll2_l + "px");
				$("#l22").css("width", ll22_wid);			//$("#l22").html("匠鲜，是一家基于互联网技术的环球海鲜解决方案供应商，精选全球精美海鲜，搭建从产地到消费者之间的直供平台，为了方便消费者，我们搭建方便快捷的电子购物平台以及电视购物、企业直供等多元供应渠道。因为热爱，所以专注，让海鲜爱好者用最省心的方式，品尝到高级品质的海鲜产品，是我们永恒追求的目标。");
				$("#ll3").css("width", ll2_wid);
				$("#ll3").css("left", ll2_l + "px");
				$("#l32").css("width", ll22_wid);					
				$("#single_div3").css("width", single_div_w);
				$("#ll15").css("left", ll15_l + "px");
				$("#ll16").css("left", ll16_l + "px");	
				$("#ll17").css("left", ll17_l + "px");
				$("#ll17").css("width", ll17_wid);
				$("#img171").css("paddingLeft", img171_l + "px");
				$("#img171").css("width", img171_wid);
				$("#l172").css("paddingLeft", l172_l + "px");	
				$("#l172").css("width", l172_wid);
				$("#l172").css("left", l172_l + "px");	
				$("#l172").css("left", l172_wid);
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
				ll2_l = single_div_w*168/1400;
				ll2_wid = single_div_w*1064/1400;
				ll22_wid = ll2_wid - 43;
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
				$(imgtop).css("width", "1400px");		
				$(xfbox).css("width", w);
				$(main1).css("width", "1400px");
				$(main2).css("width", "1400px");
				$(main3).css("width", "1400px");
				$(main1).css("marginLeft", marginL);
				$(main1).css("marginRight", marginL);
				$(main2).css("marginLeft", marginL);
				$(main2).css("marginRight", marginL);
				$(main3).css("marginLeft", marginL);
				$(main3).css("marginRight", marginL);				
				$(footer).css("width", w);		
				//$(footer).css("marginLeft", "0px");
				//$(footer).css("marginRight", "0px");
				$("#single_div1").css("width", "1400px");
				$("#single_div1").css("backgroundPosition", bg_position + "px 90px");
				$("#single_divbg").css("width", single_div_w);
				$("#ll1").css("left", ll1_l + "px");
				$("#single_div2").css("width", "1400px");
				$("#ll2").css("width", ll2_wid);
				$("#ll2").css("left", ll2_l + "px");
				$("#l22").css("width", ll22_wid);
				$("#ll3").css("width", ll2_wid);
				$("#ll3").css("left", ll2_l + "px");
				$("#l32").css("width", ll22_wid);				
				$("#single_div3").css("width", "1400px");
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
				ll2_l = single_div_w*168/1400;
				ll2_wid = single_div_w*1064/1400;
				ll22_wid = ll2_wid - 43;
				jian_g3 = (single_div_w - 535)/6;
				ll15_l = jian_g3*1.5;
				ll16_l = 121 + (jian_g3*2.5);		
				ll17_l = 234 + (jian_g3*3.75);
				ll17_wid = 290 + (jian_g3*0.75);
				img171_l = jian_g3*0.75;
				img171_wid = img171_l + 45;	
				l172_l = (jian_g3*0.75) + 55;
				l172_wid = l172_l + 234;		
				jian_g4 = (single_div_w - 390)/5;
				ll18_l = jian_g4*1.5;	
				ll19_l = 130 + jian_g4*2.5;
				ll20_l = 260 + jian_g4*3.5;
				$(imgtop).css("width", "980px");
				$(main1).css("width", "980px");
				$(main2).css("width", "980px");
				$(main3).css("width", "980px");
				$(main1).css("marginLeft", "0px");
				$(main1).css("marginRight", "0px");
				$(main2).css("marginLeft", "0px");
				$(main2).css("marginRight", "0px");
				$(main3).css("marginLeft", "0px");
				$(main3).css("marginRight", "0px");					
				$(xfbox).css("width", "980px");
				$(footer).css("width", "980px");
				//$(footer).css("marginLeft", "0px");
				//$(footer).css("marginRight", "0px");				
				$("#single_div1").css("width", "980px");
				$("#single_div1").css("backgroundPosition", bg_position + "px 90px");
				$("#single_divbg").css("width", single_div_w);				
				$("#ll1").css("left", ll1_l + "px");				
				$("#single_div2").css("width", "980px");
				$("#ll2").css("width", ll2_wid);
				$("#ll2").css("left", ll2_l + "px");
				$("#l22").css("width", ll22_wid);
				$("#ll3").css("width", ll2_wid);
				$("#ll3").css("left", ll2_l + "px");
				$("#l32").css("width", ll22_wid);					
				$("#single_div3").css("width", "980px");
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
		create_div1();
		create_div2();
		create_div3();
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
				$(this).css("color", "#585858");
	});
	
	$(a4).hover(function(e){
			$(this).css("color", "#447fe0");	
			},function(e){
				$(this).css("color", "#429acc");
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
	
	var single_divbg = $C(main1,
							{
									id: 'single_divbg',
									position: 'absolute', 
									marginLeft: 'auto', 
									marginRight: 'auto',
									marginTop: '0px',
									paddingTop: '0px', 
									width: div1_w + 'px', 
									height: '407px', 
									overflow: 'hidden',
									backgroundImage:'url(images/contact1.png)',
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
									height: '407px', 
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
							top: '160px',
							left: ll1_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: '571px',
							height: '136px',
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
							top: '90px',
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
									height: '574px', 
									overflow: 'hidden',
									backgroundColor:'white',
									zIndex: 1
							},
							'div');
							
	var ll2_left = div2_w*168/1400;
	var ll2_w = div2_w*1064/1400;
	var ll22_w = ll2_w - 43;
				
	var ll2 = $C(single_div2,
					{
							position: 'absolute',
							top: '30px',
							left: ll2_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: ll2_w + 'px',
							height: '230px',
							id: 'll2',
							backgroundImage: 'url(images/contact2.png)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var l21 = $C(ll2,
					{
							display: 'block',
							paddingTop: '10px',
							paddingLeft:'53px',
							lineHeight: '30px',
							height: '40px',
							width: '200px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '30px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '关于我们'
					},
					'label');	

	var l22 = $C(ll2,
					{
							display: 'block',
							paddingTop: '30px',
							paddingLeft:'53px',
							lineHeight: '33px',
							height: '200px',
							id: 'l22',
							width: ll22_w + 'px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '18px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜，是一家基于互联网技术的环球海鲜解决方案供应商，精选全球精美海鲜，搭建从产地到消费者之间的直供平台，为了方便消费者，我们搭建方便快捷的电子购物平台以及电视购物、企业直供等多元供应渠道。因为热爱，所以专注，让海鲜爱好者用最省心的方式，品尝到高级品质的海鲜产品，是我们永恒追求的目标。'
					},
					'label');

	var ll3 = $C(single_div2,
					{
							position: 'absolute',
							top: '290px',
							left: ll2_left + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: ll2_w + 'px',
							height: '215px',
							id: 'll3',
							backgroundImage: 'url(images/contact3.png)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0px 0px'
					},
					'div');	
	
	var l31 = $C(ll3,
					{
							display: 'block',
							paddingTop: '10px',
							paddingLeft:'53px',
							lineHeight: '30px',
							height: '40px',
							width: '200px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '30px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '联系我们'
					},
					'label');	

	var l32 = $C(ll3,
					{
							display: 'block',
							paddingTop: '15px',
							paddingLeft:'53px',
							lineHeight: '48px',
							height: '120px',
							id: 'l32',
							width: ll22_w + 'px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '18px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i:'电话：4006612061<br/>邮箱：bd@jonthons.com<br/>地址：上海市黄浦区西藏南路765号A栋1002室'
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
									height: '433px', 
									overflow: 'hidden',
									backgroundColor:'#f8f8f8',
									zIndex: 1
							},
							'div');	
							
	var jian_ge3 = (div3_w - 535)/6;
	console.log(jian_ge3);
	var ll15_left = jian_ge3*1.5;
				
	var ll15 = $C(single_div3,
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
				
	var ll16 = $C(single_div3,
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
				
	var ll17 = $C(single_div3,
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
							id: 'img171',
							src:'images/phone.gif',
							height: '70px',
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
							id: 'l172',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '周一至周日8点-20点'
					},
					'label');

	var jian_ge4 = (div3_w - 390)/5;
	console.log(jian_ge4);
	var ll18_left = jian_ge4*1.5;
				
	var ll18 = $C(single_div3,
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
				
	var ll19 = $C(single_div3,
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
				
	var ll20 = $C(single_div3,
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
	//alert(h);
	
	var single_div1_bg_p = 0 - 20;
	var ll1_top = 100;
	var ll2_top = 300;
	var ll3_top = 480;
	var l11_fontS = 50;
	var l12_top = 82;
	var l12_fontS = 24;
	var ll2_l = 20;
	var ll2_w = div1_w - 40;
	if(w < 350){
		single_div1_bg_p = 0 - 70;
		ll2_l = 10;
		ll2_w = div1_w - 20;
		ll1_top = 80;
		ll2_top = 250;
		ll3_top = 440;
	}							
	if(w >= 600 && w <= 920){		
	}
	//iPad横着
	if(w > 920){		
	}	
	if(h < 450){
		single_div1_bg_p = 0 - 180;
		ll1_top = 57;
		l11_fontS = 24;
		l12_top = 24;
		l12_fontS = 16;
		ll2_top = 133;
		ll3_top = 323;
	}	
	if(h < 470 && h >= 450){
		single_div1_bg_p = 0 - 180;
		ll1_top = 57;
		l11_fontS = 24;
		l12_top = 24;
		l12_fontS = 16;
		ll2_top = 143;
		ll3_top = 333;
	}
	if(h < 490 && h >= 470){
		single_div1_bg_p = 0 - 150;
		ll1_top = 60;
		l11_fontS = 30;
		l12_top = 42;
		l12_fontS = 20;
		ll2_top = 163;
		ll3_top = 353;
	}
	if(h < 505 && h >= 490){
		single_div1_bg_p = 0 - 130;
		ll1_top = 70;
		l11_fontS = 30;
		l12_top = 42;
		l12_fontS = 20;
		ll2_top = 193;
		ll3_top = 383;
	}
	if(h < 550 && h >= 505){
		single_div1_bg_p = 0 - 120;
		ll1_top = 80;
		l11_fontS = 30;
		l12_top = 42;
		l12_fontS = 20;
		ll2_top = 203;
		ll3_top = 393;
	}	
	if(h <= 585 && h >= 550){
		single_div1_bg_p = 0 - 100;
		ll1_top = 80;
		l11_fontS = 30;
		l12_top = 52;
		l12_fontS = 20;
		ll2_top = 223;
		ll3_top = 413;
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
									backgroundImage:'url(images/contact1.png)',
									backgroundPosition: '-160px ' + single_div1_bg_p + 'px',
									backgroundRepeat:'no-repeat',
									zIndex: 1
							},
							'div');

	var ll1_left = (div1_w - 230)/2;
	console.log(ll1_left);
					
	var ll1 = $C(single_div1,
					{
							position: 'absolute',
							top: ll1_top + 'px',
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
							lineHeight: l11_fontS + 'px',
							height: l11_fontS + 'px',
							width: '196px',
							color: 'white',
							textDecoration: 'none',
							textAlign: 'center',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: l11_fontS + 'px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '互联网+'
					},
					'label');
	
	var l12 = $C(ll1,
					{
							position: 'absolute',
							top: l12_top + 'px',
							left: '0px',
							lineHeight: '30px',
							height: '60px',
							width: '230px',
							color: 'white',
							textDecoration: 'none',
							textAlign: 'center',
							paddingLeft: '0px',
							paddingTop: '0px',
							fontSize: l12_fontS + 'px',
							fontWeight: 'bold',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜，用互联网技术<br/> 改造海鲜食材供应 '
					},
					'label');

	var ll22_w = ll2_w;
	var ll2_bg_w = 3700/ll2_w;
	var ll2_bg_h = 3700/230;
				
	var ll2 = $C(single_div1,
					{
							position: 'absolute',
							top: ll2_top + 'px',
							left: ll2_l + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: ll2_w + 'px',
							height: '230px',
							id: 'll2',
							backgroundImage: 'url(images/contact2.png)',
							backgroundRepeat: 'no-repeat',							
							backgroundSize: ll2_bg_w + '% ' + ll2_bg_h + '%',
							backgroundPosition: '0px 5px'
					},
					'div');	
	
	var l21 = $C(ll2,
					{
							display: 'block',
							paddingTop: '10px',
							paddingLeft:'3px',
							lineHeight: '30px',
							height: '30px',
							width: '160px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '关于我们'
					},
					'label');	

	var l22 = $C(ll2,
					{
							display: 'block',
							paddingTop: '20px',
							paddingLeft:'3px',
							lineHeight: '20px',
							height: '200px',
							id: 'l22',
							width: ll22_w + 'px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'justify',
							fontSize: '12px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '匠鲜，是一家基于互联网技术的环球海鲜解决方案供应商，精选全球精美海鲜，搭建从产地到消费者之间的直供平台，为了方便消费者，我们搭建方便快捷的电子购物平台以及电视购物、企业直供等多元供应渠道。因为热爱，所以专注，让海鲜爱好者用最省心的方式，品尝到高级品质的海鲜产品，是我们永恒追求的目标。'
					},
					'label');

	var ll3 = $C(single_div1,
					{
							position: 'absolute',
							top: ll3_top + 'px',
							left: ll2_l + 'px',
							opacity: 1,
							overflow: 'hidden',
							width: ll2_w + 'px',
							height: '215px',
							id: 'll3',
							backgroundImage: 'url(images/contact3.png)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: ll2_bg_w + '% ' + ll2_bg_h + '%',
							backgroundPosition: '0px 5px'
					},
					'div');	
	
	var l31 = $C(ll3,
					{
							display: 'block',
							paddingTop: '10px',
							paddingLeft:'3px',
							lineHeight: '30px',
							height: '30px',
							width: '160px',
							color: '#4f4f4f',
							textDecoration: 'none',
							fontSize: '20px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '联系我们'
					},
					'label');	

	var l32 = $C(ll3,
					{
							display: 'block',
							paddingTop: '15px',
							paddingLeft:'3px',
							lineHeight: '20px',
							height: '120px',
							id: 'l32',
							width: ll22_w + 'px',
							color: '#4f4f4f',
							textDecoration: 'none',
							textAlign: 'left',
							fontSize: '12px',
							fontWeight: 'normal',
							wordSpacing: '10px',
							letterSpacing: '1px',
							i: '电话：4006612061<br/>邮箱：bd@jonthons.com<br/>地址：上海市黄浦区西藏南路765号A栋1002室'
					},
					'label');							
}

function create_phone_div2(){
	
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
	
	var single_div5 = $C(main2,
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
	
	var footer_h = 30;
	var footer_i = "copyright©2016&nbsp;&nbsp;&nbsp;&nbsp;上海匠鲜网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备16003628";
	if(w < 390)
	{
		footer_h =50;
		footer_i ="copyright©2016&nbsp;&nbsp;&nbsp;&nbsp;上海匠鲜网络科技有限公司<br/>沪ICP备16003628";
	}
		
	var footer = $C(main2,
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
