
$(function() {
	//游戏界面
	var imageUrl = "";
	//获取画布对象
	var c = $("#game-box").get(0);
	//创建画布
	var cxt = c.getContext("2d");
	var c_width=document.body.clientWidth;
	var c_height=document.body.clientHeight;
	var changpin = false;
	if(c_height/c_width<1.575){
		tongY = c_height*0.665;
	}else if(c_height/c_width>1.7){
		tongY = c_height*0.69;
		changpin = true;
	}else{
		tongY = c_height*0.64;
	}
	
	//画布清晰
	var getPixelRatio = function(context) {
		var backingStore = context.backingStorePixelRatio ||
		context.webkitBackingStorePixelRatio ||
		context.mozBackingStorePixelRatio ||
		context.msBackingStorePixelRatio ||
		context.oBackingStorePixelRatio ||
		context.backingStorePixelRatio || 1;
		return (window.devicePixelRatio || 1) / backingStore;
	};
	//调用
	var ratio = getPixelRatio(cxt); 
	console.log(ratio);
	
	//图片资源, 存放图片对象
	var sources = [];

	//新建图片方法
	function creatImg(src) {
		if (typeof sources[src] != "undefined") {
			return sources[src];
		}

		sources[src] = new Image();
		sources[src].src = src;
		return sources[src];
	}
	
	//图片预加载方法
	function loadImages(images, callback) {
		var loadedImages = 0;
		var numImages = images.length;
		for (var i in images) {
			sources[images[i]] = new Image();
			sources[images[i]].onload = function () {
				loadedImages++;
				if (loadedImages >= numImages) {
					callback();
				}
			};
			sources[images[i]].src = imageUrl + images[i];
		}
	}
	var gameBg = $('.gameBg img').attr('src');
	var _tong = $('.tong img').attr('src');
	var _xuxian = ['s',$('.xuxian1 img').attr('src'),$('.xuxian2 img').attr('src'),$('.xuxian3 img').attr('src'),$('.xuxian4 img').attr('src'),$('.xuxian5 img').attr('src')];
	var _ice = ['s',$('.ice1 img').attr('src'),$('.ice2 img').attr('src'),$('.ice3 img').attr('src'),$('.ice4 img').attr('src')];
	//页面开始执行方法
	(function () {
		var images = [gameBg];
		loadImages(images, loading);
	})();
	//等待动画
	function loading() {
		var images = [
			gameBg,
			_tong,
			_xuxian[1],
			_xuxian[2],
			_xuxian[3],
			_xuxian[4],
			_xuxian[5],
			_ice[1],
			_ice[2],
			_ice[3],
			_ice[4]
		];
		//游戏开始方法
		loadImages(images, function () {
			main();
		});
	}
	
	//游戏方法
	function main() {
		var xianNum1 = parseInt(Math.random()*5+1),
			xianNum2 = parseInt(Math.random()*5+1),
			xianNum3 = parseInt(Math.random()*5+1);
		var xianArr = [xianNum1,xianNum2,xianNum3];
		
		var game = {};
		game.refreshInterval = 8; //每隔多少秒画一次
		game.BtnH = 0;  //按钮的高度
		game.iceBrick = 1; //冰淇淋口味
		game.iceNum = [0,0,0];
		game.iceNum2 = [0,0,0];
		game.passTimes = 0; //通关数
		game.animate = 0;
		game.end = false;
		game.win = true;
		game.refresh = function(){
			game.background();
			game.xuWei();
			game.icePaint();
			game.ctrlaiNum++;
		};
		//背景
		game.background = function(){
			var bg_img = creatImg(gameBg);
			cxt.drawImage(bg_img, 0, 0, c_width*ratio, c_height*ratio);
			//冰淇淋桶
			var tong_img = creatImg(_tong);
			var tongH = c_width / tong_img.width * tong_img.height;
			cxt.drawImage(tong_img, 0,tongY*ratio, c_width*ratio, tongH*ratio);

			
		};
		
		//虚位
		game.xuWei = function(){
			var xuxian_img1 = creatImg(_xuxian[xianArr[0]]);
			var xuxian_img2 = creatImg(_xuxian[xianArr[1]]);
			var xuxian_img3 = creatImg(_xuxian[xianArr[2]]);
			var xuxianW = c_width*0.32;
			var xuxianH = xuxianW / xuxian_img1.width * xuxian_img1.height;
			var xuxianX1 = c_width*0.014;
			var xuxianX2 = c_width*0.34;
			var xuxianX3 = c_width*0.67;
			var xuxianY = c_height*0.16;
			if(changpin){
				xuxianY = c_height*0.26;
			}
			
			
			cxt.drawImage(xuxian_img1, xuxianX1*ratio, xuxianY*ratio, xuxianW*ratio, xuxianH*ratio);
			cxt.drawImage(xuxian_img2, xuxianX2*ratio, xuxianY*ratio, xuxianW*ratio, xuxianH*ratio);
			cxt.drawImage(xuxian_img3, xuxianX3*ratio, xuxianY*ratio, xuxianW*ratio, xuxianH*ratio);

		};
		//冰淇淋
		game.iceX = [c_width*0.015,c_width*0.34,c_width*0.67];
		//game.iceY = [c_height*0.535,c_height*0.462,c_height*0.385,c_height*0.3,c_height*0.22,c_height*0.17];
		game.iceY = c_height*0.53;
		if(changpin){
			game.iceY = c_height*0.59;
		}
		game.iceArr = [];
		game.icePaint = function(){
			for(var peoIndex=0;peoIndex<game.iceArr.length;peoIndex++) {
				var iceC = game.iceArr[peoIndex];

				iceC.show();	
			}	
		};
		game.iceCream = function(){
			game.iceBrick = parseInt(Math.random()*4+1); 
			switch (game.iceBrick) {
				case 1:
					game.iceArr.push(new iceCream(1));
					break;
				case 2:
					game.iceArr.push(new iceCream(2));
					break;
				case 3:
					game.iceArr.push(new iceCream(3));
					break;
				case 4:
					game.iceArr.push(new iceCream(4));
					break;
			}
		};
		
		function iceCream(type){
			this.type = type;
			this.ice_img = creatImg(_ice[this.type]);
			this.width = c_width*0.32;
			this.height = this.width / this.ice_img.width * this.ice_img.height;
			this.position = game.position;
			this.num = game.iceNum[this.position];
			if(this.animate==undefined) this.animate=0;
			this.x = game.iceX[this.position];
			this.y = -this.height;
			if(this.daodi==undefined) this.daodi=true;
			this.draw = true;
			this.seed = 0;
			this.show = function(){
				this.seed = this.seed+0.45;
				// if(!changpin){
					// this.seed = this.seed+0.45;
				// }else{
					// this.seed = this.seed+0.9;
				// }
				this.y = this.y+this.seed;
				if(game.iceNum[this.position]>xianArr[this.position]){
					$('.dang').show();
					game.win = false;
				}
				var jianju = c_height*0.094;
				if(changpin){
					jianju = c_height*0.084;
				}
				if(this.y>=game.iceY-((this.num-1)*jianju)){
					this.y = game.iceY-((this.num-1)*jianju);
					this.animate++;
					//console.log(this.animate);
					
					if(this.daodi){
						this.daodi = false;
						game.iceNum2[this.position]++;
						if(game.iceNum2[this.position]>xianArr[this.position]){
							this.draw = false;
						}
						if(!this.draw){
							//this.draw = false;
							game.end = true;
							document.getElementById('fail').play();
							setTimeout(function(){
								game.over();
							},1000);
	
						}else{
							if(game.iceNum2[0]==xianArr[0] && game.iceNum2[1]==xianArr[1] && game.iceNum2[2]==xianArr[2]&&game.win){
								game.passTimes++;
								if(game.passTimes>=5&&!game.end){
									clearInterval(timeInt);
									document.getElementById('pass').play();
									$('.pass_zhe').show();
									$('.ok_ico').addClass('tanchu');
									setTimeout(function(){
										$('.okBox').addClass('suozou');
										$('.ok_ico').removeClass('tanchu');
										setTimeout(function(){
											$('.okBox').removeClass('suozou');
											$('.pass_zhe').hide();
											game.over();
										},600);
									},600);
								}else{
									clearInterval(timeInt);
									document.getElementById('pass').play();
									$('.pass_zhe').show();
									$('.ok_ico').addClass('tanchu');
									setTimeout(function(){
										$('.okBox').addClass('suozou');
										$('.ok_ico').removeClass('tanchu');
										setTimeout(function(){
											$('.okBox').removeClass('suozou');
											$('.pass_zhe').hide();
											game.init();
											timeInt = setInterval('gameTime()',20);
										},600);
									},600);
								}
							}
						}
	
					}
				}	
				if(this.draw){
					cxt.drawImage(this.ice_img, this.x*ratio, this.y*ratio, this.width*ratio, this.height*ratio);
				}else{
					if(parseInt(this.animate/20)%2==0){
						cxt.drawImage(this.ice_img, this.x*ratio, this.y*ratio, this.width*ratio, this.height*ratio);
					}
				}
			};
		}
		
		game.start = function(){
			game.clock = setInterval(function () {
				game.refresh();
			}, game.refreshInterval);
		};
		//游戏初始化
		game.init = function(){
			console.log(6);
			xianNum1 = parseInt(Math.random()*5+1),
			xianNum2 = parseInt(Math.random()*5+1),
			xianNum3 = parseInt(Math.random()*5+1);
			xianArr = [xianNum1,xianNum2,xianNum3];
			game.iceArr = [];
			game.iceNum = [0,0,0];
			game.iceNum2 = [0,0,0];
			$('.dang').hide();
		}
		//游戏结束
		game.over = function(){
			clearInterval(game.clock);
			clearInterval(timeInt);
			if(!game.end){
				var level ='F级';
				var score = 0;
				if(timea<=10){
					level ='S级';
					score = 6;
				}else if(timea<=13){
					level ='A级';
					score = 5;
				}else if(timea<=15){
					level ='B级';
					score = 4;
				}else if(timea<=17){
					level ='C级';
					score = 3;
				}else if(timea<=19){
					level ='D级';
					score = 2;
				}else if(timea<=21){
					level ='E级';
					score = 1;
				}else{
					level ='F级';
					score = 0;
				}
				$('.gameover_txt2').show();
				$('.gameover_txt2 span').html(level);
				$('#sendAwardWay').val(1);
				
			}else{
				level ='G级';
				score = 0;
				$('.gameover_txt2 span').html(level);
				$('.gameover_txt2').hide();
				$('#sendAwardWay').val(0);
			}
			$('.game_over').show();
			
			resultPlay();
			
		}
		game.start();
		game.background();
		game.xuWei();
		
		//点击
		$('.click_btn1').get(0).addEventListener('touchstart', function (ev) {
			//最左边按钮
			document.getElementById('drop').play();
			game.position = 0;
			game.iceNum[0]++;
			game.iceCream();

		}, false);
		$('.click_btn2').get(0).addEventListener('touchstart', function (ev) {
			//中间按钮
			document.getElementById('drop').play();
			game.position = 1;
			game.iceNum[1]++;
			game.iceCream();
		}, false);
		$('.click_btn3').get(0).addEventListener('touchstart', function (ev) {
			//最右边按钮
			document.getElementById('drop').play();
			game.position = 2;
			game.iceNum[2]++;
			game.iceCream();
		}, false);
		//再玩一次
		$('.again_btn').click(function(){
			$('.game_over,.win_wap,.fail_wap').hide();
			timea=0;
			timeb=0;
			game.passTimes=0;
			game.end = false;
			game.win = true;
			$('.playTime .haomiao').html('00');
			$('.playTime .miao').html('0');
			game.init();
			game.start();
			initDh();
			$('.ready').show();
			setTimeout(function(){
				$('.ready').hide();
				timeInt = setInterval('gameTime()',20);
			},1000);
		});
		//返回首页
		$('.backIndex_btn').click(function(){
			$('.game_over,.win_wap,.fail_wap').hide();
			$('.index,.indexBox').show();
			timea=0;
			timeb=0;
			game.passTimes=0;
			game.end = false;
			game.win = true;
			$('.playTime .haomiao').html('00');
			$('.playTime .miao').html('0');
			game.init();
			game.start();
			initDh();
		});
		
		//开始游戏
		$('.start_btn').click(function(){
			if (!dealIndexBeginBtn()) {
				return false;
			}
			canTouchMove=1;
			$('.index,.indexBox').hide();
			$('.game_rule').show();
			$('.tc_box').addClass('fangda');
			setTimeout(function(){
				$('.kaishi').show();
				$('.kaishi').addClass('btnDh');
			},200); 
		});
		$('.kaishi').click(function(){
			canTouchMove = 0;
			$('.game_rule').hide();
			$('.ready').show();
			setTimeout(function(){
				$('.ready').hide();
				timeInt = setInterval('gameTime()',20);
			},1000);
		});

	}
	
});
var timeInt;
var timea=0,timeb=0;
function gameTime(){
	if(timeb<10){
		$('.playTime .haomiao').html('0'+timeb);
	}else{
		$('.playTime .haomiao').html(timeb);
	}
	$('.playTime .miao').html(timea);
	timeb++;
	if(timeb>=50){
		timea++;
		timeb=0;
	}
}

function indexPlay() {
    $(".loading").hide();
    $(".start_btn").addClass('titledh');
    //$(".indexBox,.page_adv").hide();
	
}
var tongY;
function Screen() {
    var iheight = window.screen.height;
    if (iheight == 667 || iheight == 736) {} else if (iheight == 480) {}
}