<?php
/* 项目根目录 */
$sitePath = substr(str_replace('\\', '/', realpath('../../')), strlen($_SERVER['DOCUMENT_ROOT'])) . '/';
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="apple-touch-fullscreen" content="YES" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;" name="viewport" />
<meta content="telephone=no" name="format-detection" />
<meta content="email=no" name="format-detection" />
<meta http-equiv="Expires" content="-1" />
<meta http-equiv="pragram" content="no-cache" />
<title>狂热冰淇淋</title>
<link type="text/css" rel="stylesheet" href="css/style.css?<?php echo rand(10000,99999);?>"/>
<script type="text/javascript" src="<?php echo $sitePath;?>public/js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="js/script.js?<?php echo rand(10000,99999);?>"></script>
<script type="text/javascript" src="js/hidpi-canvas.js"></script>
<script type="text/javascript" src="<?php echo $sitePath;?>public/js/demo.js?<?php echo rand(10000,99999);?>"></script>
<script type="text/javascript" src="<?php echo $sitePath;?>public/layer/layer.js"></script>
<link type="text/css" rel="stylesheet" href="<?php echo $sitePath;?>public/css/template.css"/>
<link type="text/css" rel="stylesheet" href="<?php echo $sitePath;?>public/layer/skin/layer.css"/>

</head>
<body>
<input type="hidden" id="sitePath" value="<?php echo $sitePath;?>">
<input type="hidden" id="remainDrawTime" value="0">
<input type="hidden" id="drawScoreLimit" value="0">
<input type="hidden" id="playScore" value="0">
<input type="hidden" id="isSubmitContactInfo" value="0">
<input type="hidden" id="submitContactsItems" value="">
<input type="hidden" id="submitContactsPosition" value="0">
<input type="hidden" id="isLimitPlayerNum" value="0">
<input type="hidden" id="limitPlayerNum" value="0">
<input type="hidden" id="enterActivityOrder" value="0">
<input type="hidden" id="isBlackList" value="0">
<input type="hidden" id="isCarouselAwardList" value="0">
<input type="hidden" id="sendAwardWay" value="1">

<!--游戏页-->
<div class="main">
	<canvas class="" width="480" height="800" id="game-box"></canvas>
	<!--游戏图片-->
	<div class="gameBg hide"><img src="images/game_bg.jpg"/></div>
	<div class="tong hide"><img src="images/tong.png"/></div>
	<div class="xuxian hide">
		<div class="xuxian1"><img src="images/xuxian1.png"/></div>
		<div class="xuxian2"><img src="images/xuxian2.png"/></div>
		<div class="xuxian3"><img src="images/xuxian3.png"/></div>
		<div class="xuxian4"><img src="images/xuxian4.png"/></div>
		<div class="xuxian5"><img src="images/xuxian5.png"/></div>
	</div>
	<div class="ice hide">
		<div class="ice1"><img src="images/ice1.png"/></div>
		<div class="ice2"><img src="images/ice2.png"/></div>
		<div class="ice3"><img src="images/ice3.png"/></div>
		<div class="ice4"><img src="images/ice4.png"/></div>
	</div>
	<div class="playTime"><span class="miao">0</span><span class="haomiao">00</span></div>
	<div class="click_btn">
		<img src="images/click_btn.png"/>
		<div class="click_btn_box">
			<div class="click_btn1"></div>
			<div class="click_btn2"></div>
			<div class="click_btn3"></div>
		</div>
	</div>
	<!--过关过渡-->
	<div class="pass_zhe hide">
		<div class="okBox">
			<div class="ok_quan"><img src="images/ok_quan.png"/></div>
			<div class="ok_ico"><img src="images/ok_ico.png"/></div>
		</div>
	</div>
</div>
<!--ready go-->
<div class="ready hide">
	<div class="gameTips"><img src="images/gameTips.png"/></div>
</div>

<!-- 首页 -->
<div class="index">
	<div class="page_bg"><img src="images/shouye_bg.jpg"/></div>
	<div class="index_title">
		<div><img src="images/index_title.png"/></div>
		<div class="title_han titledh"><img src="images/title_han.png"/></div>
	</div>
	<div class="start_btn"><img src="images/start_btn.png"/></div>
</div>
<!-- 游戏开始前说明 -->
<div class="game_rule gametip_wap hide">
    <div class="tc_box ">
		<div class="box_tit"><img src="<?php echo $sitePath;?>public/images/bg_tanchuang_top.png"/></div>
        <div class="boxBg">
            <div class="gametip_box">
                <font id="game-notes">点击屏幕下方按钮，每点击一次则掉落一块冰淇淋，用时越短，分数越高。你的手速还好吗？快？狠？准？不服来战</font>
            </div>
		</div>
		<div class="btnheight"><div class="kaishi" className="kaishi" name="开始按钮"><img src="<?php echo $sitePath;?>public/images/kaishi_btn.png"/></div></div>
		<div class="box_tit"><img src="<?php echo $sitePath;?>public/images/bg_tanchuang_bottom.png"/></div>
    </div>
</div>
<div class="dang hide"></div>
<div class="music"><img src="images/music.png"></div>

<audio src="images/bg.mp3" preload="auto" id="bgm" loop></audio>
<audio src="images/drop.wav" preload="auto" id="drop"></audio>
<audio src="images/fail.mp3" preload="auto" id="fail"></audio>
<audio src="images/pass.wav" preload="auto" id="pass"></audio>
<?php
/* 包含公共页 */
include_once '../../public/inc/template.php';
?>
</body>
<script>
var oc_music = 1;
var musicPlay=true;
$(".music").click(function(){
	if(oc_music%2==1){
		$('.music img').attr('src','images/music_no.png');
		document.getElementById('bgm').pause();
		musicPlay = false;
	}else{
		$('.music img').attr('src','images/music.png');
		document.getElementById('bgm').play();
		musicPlay = true;
	}
	oc_music++;
})

document.getElementById('bgm').play();
document.getElementById('drop').play();
document.getElementById('fail').play();
document.getElementById('pass').play();
setTimeout(function(){
	document.getElementById('drop').pause();
	document.getElementById('fail').pause();
	document.getElementById('pass').pause();
},50);

document.addEventListener("WeixinJSBridgeReady", function () {
	document.getElementById('bgm').play();
	document.getElementById('drop').play();
	document.getElementById('fail').play();
	document.getElementById('pass').play();
	setTimeout(function(){
		document.getElementById('drop').pause();
		document.getElementById('fail').pause();
		document.getElementById('pass').pause();
	},50);
}, false);	
</script>
</html>