<?php
error_reporting(0);
session_start();
$nowPath = substr(str_replace('\\', '/', dirname(__FILE__)), strlen($_SERVER['DOCUMENT_ROOT']));     // 当前文件相对站点根目录路径
$urlArr = explode('/', $nowPath);
$idArr = array_slice($urlArr, -2, 2);
if($_GET['from']){
	$_SESSION['from'] = $_GET['from'];
}
if (!is_numeric($idArr[0]) || !is_numeric($idArr[1])) {
    exit('非法访问!');
}
$configs = json_decode(file_get_contents('config.json'),true);
$configs['title'] = htmlspecialchars_decode($configs['title']);
if ($urlArr[1] == 'xingkegame') {
    $sitePath = '/xingkegame/';
} else {
    $sitePath = '/';
}
if(!empty($_GET['pid'])){
	$_SESSION['SHARE_PLAYER'] = $_GET['pid'];

}
if(!empty($_GET['pictureId'])){
	$_SESSION['PICTURE_ID'] = $_GET['pictureId'];
}

if (empty($_SESSION['PLAYER_INFO']) || $_SESSION['ACTIVITY_ID'] != $idArr[1]) {
    $_SESSION['ACTIVITY_ID'] = $idArr[1];

    $url = "{$sitePath}api/Wechat/webAuthor";
    header("Location:{$url}");
    exit;
}

$userInfo = $_SESSION['PLAYER_INFO'];
$statinfo = array('openid'=>$userInfo['wechat_openid'],'nickname'=>$userInfo['nickname'],'headimgurl'=>$userInfo['avatar'],'userIp'=>$userInfo['last_login_ip'],'uid'=>$userInfo['id'],'fid'=>$_SESSION['SHARE_PLAYER'],'from'=>$_SESSION['from']);