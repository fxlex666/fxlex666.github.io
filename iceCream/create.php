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
<script type="text/javascript" src="<?php echo $sitePath;?>public/js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="<?php echo $sitePath;?>public/layer/layer.js"></script>
<link type="text/css" rel="stylesheet" href="css/style.css"/>
<link type="text/css" rel="stylesheet" href="<?php echo $sitePath;?>public/css/template.css"/>
<link type="text/css" rel="stylesheet" href="<?php echo $sitePath;?>public/layer/skin/layer.css"/>

</head>
<body>

<!--游戏页-->
<div class="main game">
	<!--游戏图片-->
	<div class="gameBg changeImg processBackground" name="背景图片" className="processBackground"><img src="<?php echo $sitePath;?>templates/iceCream/images/game_bg.jpg" default_src="<?php echo $sitePath;?>templates/iceCream/images/game_bg.jpg"/></div>
	<div class="tong"><img src="images/tong.png"/></div>
	<div class="iceXuxian">
		<div class="xuxian1"><img src="images/xuxian1.png"/></div>
		<div class="xuxian2"><img src="images/xuxian2.png"/></div>
		<div class="xuxian3"><img src="images/xuxian5.png"/></div>
	</div>
	<div class="ice changeImgs processIce" num="4" className="processIce">
		<div class="ice1 processIce1" name="冰淇淋颜色1"><img src="<?php echo $sitePath;?>templates/iceCream/images/ice1.png" default_src="<?php echo $sitePath;?>templates/iceCream/images/ice1.png"/></div>
		<div class="ice2 processIce2" name="冰淇淋颜色2"><img src="<?php echo $sitePath;?>templates/iceCream/images/ice2.png" default_src="<?php echo $sitePath;?>templates/iceCream/images/ice2.png"/></div>
		<div class="ice3 processIce3" name="冰淇淋颜色3"><img src="<?php echo $sitePath;?>templates/iceCream/images/ice3.png" default_src="<?php echo $sitePath;?>templates/iceCream/images/ice3.png"/></div>
		<div class="ice4 processIce4" name="冰淇淋颜色4"><img src="<?php echo $sitePath;?>templates/iceCream/images/ice4.png" default_src="<?php echo $sitePath;?>templates/iceCream/images/ice4.png"/></div>
	</div>
	<div class="playTime"><span class="miao">0</span><span class="haomiao">00</span></div>
	<div class="click_btn changeImg processBtn" style="height:92px;z-index:101;" name="冰淇淋按钮" className="processBtn">
		<img src="<?php echo $sitePath;?>templates/iceCream/images/click_btn.png" default_src="<?php echo $sitePath;?>templates/iceCream/images/click_btn.png"/>
	</div>
</div>
<!-- 首页 -->
<div class="index">
	<div class="page_bg changeImg indexBackground" name="背景图片" className="indexBackground"><img src="<?php echo $sitePath;?>templates/iceCream/images/shouye_bg.jpg" default_src="<?php echo $sitePath;?>templates/iceCream/images/shouye_bg.jpg"/></div>
	<div class="index_title changeImgs" style="height:140px;" num="2" className="index_title">
		<div class="index_title1"><img src="<?php echo $sitePath;?>templates/iceCream/images/index_title.png" default_src="<?php echo $sitePath;?>templates/iceCream/images/index_title.png"/></div>
		<div class="title_han index_title2"><img src="<?php echo $sitePath;?>templates/iceCream/images/title_han.png" default_src="<?php echo $sitePath;?>templates/iceCream/images/title_han.png"/></div>
	</div>
	<div class="start_btn changeImg" style="height:45px;" name="开始按钮" className="start_btn"><img src="<?php echo $sitePath;?>templates/iceCream/images/start_btn.png" default_src="<?php echo $sitePath;?>templates/iceCream/images/start_btn.png"/></div>
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
</body>
<?php
/* 包含公共页 */
include_once '../../public/inc/template.php';
?>
<script src="<?php echo $sitePath;?>public/js/template_cm.js"></script>

</html>