<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>淘宝网顶部导航菜单代码特效</title>
<style>
body,h1,h2,h3,h4,h5,h6,p,ul,ol,li,form,img,dl,dt,dd,table,th,td,blockquote,fieldset,div,strong,label,em{margin:0;padding:0;border:0;}
ul,ol,li{list-style:none;}
input,button{margin:0;font-size:12px;vertical-align:middle;}
body{font-size:12px;font-family:Arial, Helvetica, sans-serif;  text-align:center; margin:0 auto;}
table{border-collapse:collapse;border-spacing:0;}
p{line-height:24px}
.clearfloat{height:0;font-size:1px;clear:both;line-height:0;}
#container{  width:1003px; text-align:left; margin:0 auto; }
a{color:#333;text-decoration:none;}
a:hover{color:#ef9b11; text-decoration:underline;}
BODY {BACKGROUND:url(/jscss/demoimg/201402/mbg.png) no-repeat }
BODY {BACKGROUND-POSITION: 0px -44px; BACKGROUND-REPEAT: repeat-x}
#site-nav .quick-menu LI {BACKGROUND:url(/jscss/demoimg/201402/mbg.png) no-repeat}
#site-nav .search .menu-hd S {BACKGROUND:url(/jscss/demoimg/201402/mbg.png) no-repeat}
#site-nav .quick-menu .cart S {BACKGROUND:url(/jscss/demoimg/201402/mbg.png) no-repeat 999em 0px}
#site-nav .search .menu-bd BUTTON {BACKGROUND:url(/jscss/demoimg/201402/mbg.png) no-repeat 999em 0px}
#header {PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; PADDING-TOP: 0px}
#page {MARGIN-LEFT: auto; WIDTH: 950px; MARGIN-RIGHT: auto}
#site-nav-bg {Z-INDEX: 9999; BACKGROUND: #f7f7f7; LEFT: 0px; WIDTH: 100%; BORDER-BOTTOM: #d2d2d2 1px solid; POSITION: absolute; TOP: 0px; HEIGHT: 25px}
#site-nav {Z-INDEX: 10000; MARGIN: 2px auto; COLOR: #000; LINE-HEIGHT: 19px; POSITION: relative; HEIGHT: 22px}
#site-nav A {COLOR: #666}
#site-nav A:hover {COLOR: #f50}
#site-nav .login-info {FLOAT: left; PADDING-TOP: 1px}
#site-nav .login-info A {MARGIN-RIGHT: 8px}
#site-nav .login-info A.user-nick {MARGIN-RIGHT: 0px}
#site-nav .quick-menu {RIGHT: 0px; POSITION: absolute; TOP: 0px}
#site-nav .quick-menu LI {PADDING-RIGHT: 10px; BACKGROUND-POSITION: right 6px; PADDING-LEFT: 10px; FLOAT: left; PADDING-BOTTOM: 0px; MARGIN-LEFT: -1px; PADDING-TOP: 2px}
#site-nav .quick-menu LI.last {BACKGROUND: none transparent scroll repeat 0% 0%}
#site-nav .quick-menu LI.menu-item {PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; POSITION: relative}
#site-nav .quick-menu .cart {PADDING-TOP: 1px; POSITION: relative; _padding-top: 2px}
#site-nav .quick-menu .cart A {PADDING-LEFT: 16px}
#site-nav .quick-menu .cart S {BACKGROUND-POSITION: -83px -21px; LEFT: 8px; WIDTH: 14px; POSITION: absolute; TOP: 6px; HEIGHT: 11px}
#site-nav .menu-hd {PADDING-RIGHT: 22px; DISPLAY: block; PADDING-LEFT: 10px; Z-INDEX: 10002; PADDING-BOTTOM: 0px; MARGIN: 1px 1px 0px; CURSOR: pointer; PADDING-TOP: 0px; POSITION: relative; HEIGHT: 20px}
#site-nav .mytaobao .menu-hd {WIDTH: 48px; PADDING-TOP: 1px; _padding-top: 1px}
#site-nav .search .menu-hd {WIDTH: 24px; PADDING-TOP: 1px; _padding-top: 1px}
#site-nav .services .menu-hd {WIDTH: 48px; PADDING-TOP: 1px; _padding-top: 1px}
#site-nav .menu-hd B {BORDER-RIGHT: #eee 4px solid; BORDER-TOP: #666 4px solid; FONT-SIZE: 0px; RIGHT: 10px; BORDER-LEFT: #eee 4px solid; WIDTH: 0px; LINE-HEIGHT: 0; BORDER-BOTTOM: #eee 4px solid; POSITION: absolute; TOP: 7px; HEIGHT: 0px; -webkit-transition: -webkit-transform .2s ease-in; -moz-transition: -webkit-transform .2s ease-in; -o-transition: -webkit-transform .2s ease-in; transition: -webkit-transform .2s ease-in}
#site-nav .search .menu-hd {PADDING-LEFT: 25px; COLOR: #666}
#site-nav .search .menu-hd S {BACKGROUND-POSITION: -67px -20px; LEFT: 9px; WIDTH: 14px; POSITION: absolute; TOP: 4px; HEIGHT: 13px}
#site-nav .menu-bd {BORDER-RIGHT: #bfbfbf 1px solid; BORDER-TOP: #bfbfbf 1px solid; DISPLAY: none; Z-INDEX: 10001; RIGHT: 0px; BACKGROUND: #fff; BORDER-LEFT: #bfbfbf 1px solid; BORDER-BOTTOM: #bfbfbf 1px solid; POSITION: absolute; TOP: 21px}
#site-nav .search .menu-bd {_right: -1px}
#site-nav IFRAME.menu-bd {BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; Z-INDEX: -1; BACKGROUND: none transparent scroll repeat 0% 0%; FILTER: alpha(opacity=0); FLOAT: left; BORDER-BOTTOM-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px}
#site-nav .menu-bd-panel {PADDING-RIGHT: 10px; PADDING-LEFT: 10px; PADDING-BOTTOM: 6px; PADDING-TOP: 10px}
#site-nav .menu-item-opp .menu-bd {LEFT: 0px}
#site-nav .menu-item-opp .menu-bd S.rt {LEFT: 0px}
#site-nav .menu-item-opp .menu-bd S.lt {BACKGROUND-POSITION: -87px -55px; RIGHT: -2px; LEFT: auto}
#site-nav .menu {POSITION: relative}
#site-nav .menu:hover .menu-hd {BORDER-RIGHT: #bfbfbf 1px solid; BORDER-TOP: #bfbfbf 1px solid; BACKGROUND: white; MARGIN: 0px; BORDER-LEFT: #bfbfbf 1px solid; BORDER-BOTTOM: #bfbfbf 1px}
#site-nav .hover .menu-hd {BORDER-RIGHT: #bfbfbf 1px solid; BORDER-TOP: #bfbfbf 1px solid; BACKGROUND: white; MARGIN: 0px; BORDER-LEFT: #bfbfbf 1px solid; BORDER-BOTTOM: #bfbfbf 1px}
#site-nav .menu:hover .menu-bd {DISPLAY: block}
#site-nav .hover .menu-bd {DISPLAY: block}
#site-nav .menu:hover .menu-hd B {BORDER-LEFT-COLOR: #fff; FILTER: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); BORDER-BOTTOM-COLOR: #fff; BORDER-TOP-COLOR: #666; TOP: 5px; BORDER-RIGHT-COLOR: #fff; -moz-transform: rotate(180deg); -moz-transform-origin: 50% 30%; -webkit-transform: rotate(180deg); -webkit-transform-origin: 50% 30%; -o-transform: rotate(180deg); -o-transform-origin: 50% 30%; transform: rotate(180deg); transform-origin: 50% 30%}
#site-nav .hover .menu-hd B {BORDER-LEFT-COLOR: #fff; FILTER: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); BORDER-BOTTOM-COLOR: #fff; BORDER-TOP-COLOR: #666; TOP: 5px; BORDER-RIGHT-COLOR: #fff; -moz-transform: rotate(180deg); -moz-transform-origin: 50% 30%; -webkit-transform: rotate(180deg); -webkit-transform-origin: 50% 30%; -o-transform: rotate(180deg); -o-transform-origin: 50% 30%; transform: rotate(180deg); transform-origin: 50% 30%}
#site-nav .mytaobao .menu-bd {WIDTH: 94px; LINE-HEIGHT: 1.7; TOP: 21px; HEIGHT: 57px}
#site-nav .mytaobao .menu-bd-panel {PADDING-RIGHT: 10px; PADDING-LEFT: 10px; PADDING-BOTTOM: 8px; PADDING-TOP: 8px}
#site-nav .search .menu-bd {WIDTH: 204px; TOP: 21px; HEIGHT: 66px}
#site-nav .search .menu-bd INPUT {BORDER-RIGHT: #b7b7b7 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: #878787 1px solid; PADDING-LEFT: 1px; FLOAT: left; MARGIN-BOTTOM: 5px; PADDING-BOTTOM: 2px; BORDER-LEFT: #878787 1px solid; WIDTH: 180px; LINE-HEIGHT: 13px; PADDING-TOP: 3px; BORDER-BOTTOM: #b7b7b7 1px solid}
#site-nav .search .menu-bd BUTTON {BORDER-TOP-WIDTH: 0px; BACKGROUND-POSITION: 0px -20px; BORDER-LEFT-WIDTH: 0px; FLOAT: left; BORDER-BOTTOM-WIDTH: 0px; WIDTH: 66px; CURSOR: pointer; COLOR: #fff; HEIGHT: 24px; BORDER-RIGHT-WIDTH: 0px}
#site-nav .services .menu-bd {WIDTH: 174px; TOP: 21px; HEIGHT: 218px}
#site-nav .services .menu-bd-panel {PADDING-RIGHT: 10px; PADDING-LEFT: 10px; PADDING-BOTTOM: 5px; PADDING-TOP: 5px}
#site-nav .services .menu-bd DL {PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 5px; PADDING-TOP: 5px; BORDER-BOTTOM: #e5e5e5 1px solid}
#site-nav .services .menu-bd .last {BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px}
#site-nav .services .menu-bd DT {FONT-WEIGHT: bold; COLOR: #8c8c8c; LINE-HEIGHT: 1.5; TEXT-ALIGN: left}
#site-nav .services .menu-bd DD {LINE-HEIGHT: 1.6; TEXT-ALIGN: left}
#site-nav .services .menu-bd DD A {MARGIN-RIGHT: 2px}
</style>
<SCRIPT src="/jscss/demoimg/201402/taobao.js"></SCRIPT>
</head>
<body style="text-align:center">
<div id=page>
	<div class="chl-poster simple" id=header>
		<div id=site-nav>
			<UL class=quick-menu>
			  <LI class=home><A href="#">淘宝网首页</A> </LI>
			  <LI><A href="#">我要买</A></LI>
			  <LI class="mytaobao menu-item">
				  <div class=menu>
					  <A class=menu-hd href="#" target=_top rel=nofollow>我的淘宝<B></B></A> 
					  <div class=menu-bd>
						  <div class=menu-bd-panel>
							  <div>
								  <A href="#" rel=nofollow>已买到的宝贝</A>
								  <A href="#" rel=nofollow>已卖出的宝贝</A> 
							  </div>
						  </div>
						  <S class=r></S><S class=rt></S><S class=lt></S><S class=b></S><S class="b b2"></S><S class=rb></S><S class=lb></S>
					  </div>
				  </div>
			  </LI>
			  <LI class=cart><A href="#" rel=nofollow><S></S>购物车 </A></LI>
			  <LI class=favorite><A href="#" rel=nofollow>收藏夹</A></LI>
			  <LI class="search menu-item">
				  <div class=menu><SPAN class=menu-hd><S></S>搜索<B></B></SPAN> 
					  <div class=menu-bd>
						  <div class=menu-bd-panel>
							  <FORM name=topSearch action=><INPUT 
							  maxLength=60 name=q><BUTTON type=submit>搜 索</BUTTON> <INPUT type=hidden 
							  value=newsearch name=shopf> </FORM>
						  </div>
					  <S class=r></S><S class=rt></S><S class=lt></S><S class=b></S><S class="b b2"></S><S class=rb></S><S class=lb></S>
					  </div>
				  </div>
			  </LI>
			  <LI class="services menu-item last">
				  <div class=menu>
					  <A class=menu-hd href="#" target=_top>网站导航<B></B></A> 
					  <div class=menu-bd style="WIDTH: 210px; HEIGHT: 262px; _width: 202px">
						  <div class=menu-bd-panel>
							  <DL>
								<DT><A href="#">购物</A>
								<DD>
										<A href="#">商城</A> 
										<A href="#">电器城</A> 
										<A href="#">嗨淘</A>
										<A href="#">全球购</A>
										<A href="#">跳蚤街</A> 
										<A href="#">礼物</A>
										<A href="#">促销</A>
										<A href="#">机票</A>
										<A href="#">彩票</A>
										<A href="#">创意</A> 
								</DD>
							</DL>
							  <DL>
								<DT><A href="#">门户</A> 
								<DD><A href="#">服饰</A> <A href="#">女人</A> <A href="#">美容</A> <A href="#">居家</A> <A href="#">男人</A> <A href="#">数码</A> <A href="#">亲子</A> <A href="#">时尚</A> <A href="#">试用</A> <A href="#">心得</A> <A href="#">帮派</A> <A href="#">画报</A> <A href="#">淘女郎</A> <A href="#">社区</A> <A href="#">宝贝传奇</A>
								</DD>
							</DL>
							  <DL>
								<DT><A href="#">淘江湖</A> &nbsp;<A href="#">手机淘宝</A> </DT></DL>
							  <DL>
								<DT><A href="#">帮助中心</A> 
								<DD><A href="#">交易安全</A> <A href="#">维权中心</A> </DD></DL>
							  <DL class=last>
								<DD><STRONG style="FONT-WEIGHT: bold"><A href="#">更多内容</A></STRONG></DD>
							  </DL>
						  </div>
						  <S class=r></S><S class=rt></S><S class=lt></S><S class=b style="WIDTH: 169px"></S><S class="b b2" style="WIDTH: 169px"></S><S class=rb></S><S class=lb></S>
					  </div>
				  </div>
			  </LI>
		    </UL>
		</div>
	</div>
</div>
<SCRIPT type=text/javascript>
	TB.Header.init();
</SCRIPT>
<p><p>整合了购物车，收藏夹，搜索，搜索，网站导航等功能的导航。</p></p>
<p></p>
</body>
</html>