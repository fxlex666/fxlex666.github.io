var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},__extends=function(t,e){function n(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;r>n;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},__rest=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},__decorate=function(t,e,n,r){var i,o=arguments.length,a=3>o?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var h=t.length-1;h>=0;h--)(i=t[h])&&(a=(3>o?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},__param=function(t,e){return function(n,r){e(n,r,t)}},__metadata=function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},__awaiter=function(t,e,n,r){function i(t){return t instanceof n?t:new n(function(e){e(t)})}return new(n||(n=Promise))(function(n,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function h(t){try{s(r["throw"](t))}catch(e){o(e)}}function s(t){t.done?n(t.value):i(t.value).then(a,h)}s((r=r.apply(t,e||[])).next())})},__generator=function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&n[0]?o["return"]:n[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,h,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return h={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h},__exportStar=function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||__createBinding(e,t,n)},__createBinding=Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]},__values=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-->0)&&!(r=o.next()).done;)a.push(r.value)}catch(h){i={error:h}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t},__spreadArrays=function(){for(var t=0,e=0,n=arguments.length;n>e;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;n>e;e++)for(var o=arguments[e],a=0,h=o.length;h>a;a++,i++)r[i]=o[a];return r},__await=function(t){return this instanceof __await?(this.v=t,this):new __await(t)},__asyncGenerator=function(t,e,n){function r(t){d[t]&&(c[t]=function(e){return new Promise(function(n,r){l.push([t,e,n,r])>1||i(t,e)})})}function i(t,e){try{o(d[t](e))}catch(n){s(l[0][3],n)}}function o(t){t.value instanceof __await?Promise.resolve(t.value.v).then(a,h):s(l[0][2],t)}function a(t){i("next",t)}function h(t){i("throw",t)}function s(t,e){t(e),l.shift(),l.length&&i(l[0][0],l[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c,d=n.apply(t,e||[]),l=[];return c={},r("next"),r("throw"),r("return"),c[Symbol.asyncIterator]=function(){return this},c},__asyncDelegator=function(t){function e(e,i){n[e]=t[e]?function(n){return(r=!r)?{value:__await(t[e](n)),done:"return"===e}:i?i(n):n}:i}var n,r;return n={},e("next"),e("throw",function(t){throw t}),e("return"),n[Symbol.iterator]=function(){return this},n},__asyncValues=function(t){function e(e){r[e]=t[e]&&function(r){return new Promise(function(i,o){r=t[e](r),n(i,o,r.done,r.value)})}}function n(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=t[Symbol.asyncIterator];return i?i.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),r={},e("next"),e("throw"),e("return"),r[Symbol.asyncIterator]=function(){return this},r)},__makeTemplateObject=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t["default"]=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&__createBinding(e,t,n);return __setModuleDefault(e,t),e},__importDefault=function(t){return t&&t.__esModule?t:{"default":t}},__classPrivateFieldGet=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)},__classPrivateFieldSet=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},__reflect=function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n};!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(e){return t[e]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),n(2),n(0),n(3),n(4),n(5),n(6),n(7);var r=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=n.sent(),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return e=n.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return n.sent(),this.stage.removeChild(t),[3,4];case 3:return e=n.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=Game.createBitmapByName("indexbg_png");this.stage.addChild(t);var e=Game.createBitmapByName("index_btn_png");this.stage.addChild(e),e.x=800,e.y=400,e.touchEnabled=!0,e.addEventListener(egret.TouchEvent.TOUCH_TAP,this.drawPage,this);var n=Game.createBitmapByName("index_btn_png");this.stage.addChild(n),n.x=400,n.y=400,n.touchEnabled=!0,n.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Coloring,this)},e.prototype.Coloring=function(){this.choosepage=new Game.choosepage,this.stage.addChild(this.choosepage),this.choosepage.addEventListener(choosefn.DATE,this.choosething,this)},e.prototype.choosething=function(t){console.log(t),this.colorpage=new Game.colorpage,this.stage.removeChild(this.choosepage),this.stage.addChild(this.colorpage),this.colorpage.startGame(t.data,t.num),this.colorpage.addEventListener(gohomefn.DATE,this.colorbackIndex,this)},e.prototype.drawPage=function(){this.drawpage=new Game.drawpage,this.stage.addChild(this.drawpage),this.drawpage.addEventListener(gohomefn.DATE,this.backIndex,this)},e.prototype.backIndex=function(){this.stage.removeChild(this.drawpage)},e.prototype.colorbackIndex=function(){this.stage.removeChild(this.colorpage)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.startAnimation=function(t){var e=this,n=new egret.HtmlTextParser,r=t.map(function(t){return n.parse(t)}),i=this.textfield,o=-1,a=function(){o++,o>=r.length&&(o=0);var t=r[o];i.textFlow=t;var n=egret.Tween.get(i);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(a,e)};a()},e}(egret.DisplayObjectContainer);window.Main=r,__reflect(r.prototype,"Main",[])},function(t,e){var n,n=window.Game;!function(t){function e(t){var e=t.$bitmapHeight*t.width/t.$bitmapWidth;return e}function n(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e}function r(e,n,r){var i=t.createBitmapByName(e);return i.anchorOffsetX=i.width/2,i.anchorOffsetY=i.height/2,i.x=n,i.y=r,i}function i(e,n,r){var i=t.createBitmapByName(e);return i.x=n,i.y=r,i}function o(t,e,n){t.touchEnabled=!0,t.addEventListener(egret.TouchEvent.TOUCH_TAP,e,n)}function a(t){var e=0;return e=window.innerHeight/window.innerWidth>1450/750?t:(1450-750/window.innerWidth*window.innerHeight)/2+t}function h(t){var e=0;return e=window.innerHeight/window.innerWidth<1450/750?t:(750-1450/window.innerHeight*window.innerWidth)/2+t}function s(t){var e=egret.Tween.get(t,{loop:!1});e.to({scaleX:0,scaleY:0},0),e.to({scaleX:1,scaleY:1},500,egret.Ease.backOut)}function c(t,e,n){var r=egret.Tween.get(t,{loop:!1});r.to({scaleX:.5,scaleY:.5,alpha:0},400,egret.Ease.backIn).call(function(){console.log(typeof n),e.removeChild(t),"function"==typeof n&&n&&n()})}function d(e,n,r){r.removeChild(e),t.boxIn(n)}function l(t){var e=egret.Tween.get(t,{loop:!0});e.to({scaleX:1.03,scaleY:1.03},250),e.to({scaleX:.97,scaleY:.97},500),e.to({scaleX:1,scaleY:1},250)}function u(e,n,r){var i=t.addZhedottap();r.addChild(i);var o=egret.Tween.get(e,{loop:!1});o.to({x:-750},500,egret.Ease.sineOut).call(function(t){r.removeChild(e),r.removeChild(i)});var a=egret.Tween.get(n,{loop:!1});a.to({x:750},0),a.to({x:0},500,egret.Ease.sineOut)}function g(e,n,r){var i=t.addZhedottap();r.addChild(i);var o=egret.Tween.get(e,{loop:!1});o.to({x:750},500,egret.Ease.sineIn).call(function(t){r.removeChild(e),r.removeChild(i)});var a=egret.Tween.get(n,{loop:!1});a.to({x:-750},0),a.to({x:0},500,egret.Ease.sineIn)}function p(){var t=new egret.Sprite;return t.anchorOffsetX=t.width/2,t.anchorOffsetY=t.height/2,t.x=375,t.y=725,t}function f(){var t=new egret.Shape;return t.graphics.beginFill(0),t.graphics.drawRect(0,0,750,1450),t.graphics.endFill(),t.alpha=0,t.touchEnabled=!0,t}function v(t){var e=new egret.Shape;e.graphics.beginFill(0),e.graphics.drawRect(-375,-725,750,1450),e.graphics.endFill(),e.alpha=0,e.touchEnabled=!0,t.addChild(e)}function w(t){var e="",n=Math.floor(t/60)<10?"0"+String(Math.floor(t/60)):String(Math.floor(t/60)),r=Math.floor(t%60)<10?"0"+String(Math.floor(t%60)):String(Math.floor(t%60)),i=1e3*Number((t-Math.floor(t)).toFixed(3)),o="";return o=10>i?"00"+String(i):100>i?"0"+String(i):String(i),e=n+":"+r+":"+o}function y(e,n){var r=this;return new Promise(function(i,o){var a=t.config.istest?t.config.apiurl+t.config.urlPath+e:t.config.urlPath+e,h=new egret.URLLoader;h.dataFormat=egret.URLLoaderDataFormat.TEXT,h.addEventListener(egret.Event.COMPLETE,function(t){var e=t.target,n=e.data;if(n){var r=JSON.parse(String(n));i(r)}},r);var s=new egret.URLRequest(a),c=new egret.URLRequestHeader("openid","o8snajuSxNHS0Ehxnp25TCKC9puk");t.config.istest&&s.requestHeaders.push(c),s.method=egret.URLRequestMethod.POST,s.data=new egret.URLVariables(n),h.load(s)})}var _=function(){function t(){}return t.apiurl="https://h5test.xingkech5.com/car_racing/",t.urlPath="ajax/",t.drawList={f_fruit:[{str:"apple",num:3},{str:"boluo",num:3}],f_fish:[],f_shucai:[],f_car:[],f_other:[]},t.istest=!1,t.colorlist=[16777215,16245849,16368957,16231730,15634012,16018213,14366519,16535145,13708875,10472683,3375050,4368816,7224429,4351780,7119913,10533427,8104815,6175517,2563106,12303532],t}();t.config=_,__reflect(_.prototype,"Game.config",[]);var m=function(){function t(){}return t.hitTest=function(t,e){var n=t.getBounds(),r=e.getBounds();return n.x=t.x,n.y=t.y,r.x=e.x-60,r.y=e.y,n.intersects(r)},t.hitTestporn=function(t,e,n){var r,i=n.getBounds();return r.x=t,r.y=e,i.x=n.x-60,i.y=n.y,r.intersects(i)},t}();t.GameUtil=m,__reflect(m.prototype,"Game.GameUtil",[]),t.autoHeight=e,t.createBitmapByName=n,t.addChildFastCen=r,t.addChildFast=i,t.touchTap=o,t.autoY=a,t.autoX=h,t.boxIn=s,t.boxOut=c,t.boxOutIn=d,t.btnpluse=l,t.pagego=u,t.pageback=g,t.creatTanchuan=p,t.addZhedottap=f,t.addZhe=v,t.timeToString=w,t.urlRequest=y}(n||(n={})),window.Game=n},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);window.LoadingUI=n,__reflect(n.prototype,"LoadingUI",["RES.PromiseTaskReporter"])},function(t,e){var n=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();window.DebugPlatform=n,__reflect(n.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new n)},function(t,e){var n,n=window.Game;!function(t){var e=function(e){function n(){var t=e.call(this)||this;return t.prevtap=0,t.nowtype="f_fruit",t.list=[{str:"apple",num:3},{str:"boluo",num:3}],t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(n,e),n.prototype.onAddToStage=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.stageW=this.stage.width,this.stageH=this.stage.height,this.gamebg()},n.prototype.gamebg=function(){var e=t.createBitmapByName("choose_bg_png");this.addChild(e),e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,e.x=this.stageW/2,e.y=this.stageH/2,this.drawTap(e),this.drawlist()},n.prototype.drawTap=function(e){this.tapbgList2=new egret.Sprite,this.tapbgList=new egret.Sprite,this.tapList=new egret.Sprite,this.addChild(this.tapbgList2),this.addChild(this.tapbgList),this.addChild(this.tapList),this.setChildIndex(this.tapbgList2,0),this.setChildIndex(this.tapbgList,1);for(var n=["f_fruit","f_fish","f_shucai","f_car","f_other"],r=0;5>r;r++){var i=this.stageH/2-e.height/2+5;console.log(i);var o=this.stageW/2+e.width/2-50-65,a=110*r+i,h=90,s=t.createBitmapByName("choose_tapbg2_png");s.anchorOffsetY=s.height/2,s.x=o,s.y=a+s.height/2,this.tapbgList2.addChild(s),s.id=r;var c=t.createBitmapByName("choose_tapbg_png");c.anchorOffsetY=c.height/2,c.x=o,c.y=a+c.height/2,this.tapbgList.addChild(c),c.id=r,c.type=n[r],c.touchEnabled=!0,c.addEventListener(egret.TouchEvent.TOUCH_TAP,this.choosetap,this);var d=t.createBitmapByName(n[r]+"_png");d.anchorOffsetX=d.width/2,d.anchorOffsetY=d.height/2,this.tapList.addChild(d),d.x=o+15+h/2+50,d.y=a+h/2,d.scaleX=.7,d.scaleY=.7,0==r&&(c.scaleX=s.scaleX=1.15,c.scaleY=s.scaleY=1.05,c.alpha=0,d.x=d.x+10)}},n.prototype.choosetap=function(t){var e=t.currentTarget,n=e.id,r=this.tapbgList.$children,i=this.tapbgList2.$children;if(n!=this.prevtap){if(this.prevtap<10){var o=r[this.prevtap],a=egret.Tween.get(o,{loop:!1});a.to({scaleX:1,scaleY:1,alpha:1},300,egret.Ease.sineIn);var h=i[this.prevtap],s=egret.Tween.get(h,{loop:!1});s.to({scaleX:1,scaleY:1},300,egret.Ease.sineIn);var c=this.tapList.$children[this.prevtap],d=egret.Tween.get(c,{loop:!1});d.to({x:c.x-13},300,egret.Ease.sineOut)}var l=egret.Tween.get(e,{loop:!1});l.to({scaleX:1.15,scaleY:1.05,alpha:0},300,egret.Ease.sineOut);var u=egret.Tween.get(i[n],{loop:!1});u.to({scaleX:1.15,scaleY:1.05},300,egret.Ease.sineOut);var c=this.tapList.$children[n],g=egret.Tween.get(c,{loop:!1});g.to({x:c.x+13},300,egret.Ease.sineOut),this.prevtap=n,this.nowtype=e.type,this.drawlists()}},n.prototype.drawlist=function(){this.content=new egret.Sprite;var t=new egret.ScrollView;t.setContent(this.content),t.width=1135,t.height=530,t.x=(this.stageW-t.width)/2,t.y=(this.stageH-t.height)/2-22,t.bounces=!1,t.verticalScrollPolicy="on",this.myscrollView=t,this.addChild(this.myscrollView),this.drawlists()},n.prototype.drawlists=function(){this.content.removeChildren();for(var e=t.config.drawList[this.nowtype],n=0;n<e.length;n++){var r=t.createBitmapByName("chooseli_bg_png");r.y=274*Math.floor(n/4)+10,r.x=n%4*282,this.content.addChild(r),r.touchEnabled=!0,r.str=e[n].str,r.num=e[n].num,r.addEventListener(egret.TouchEvent.TOUCH_TAP,this.choosething,this);var i=t.createBitmapByName(e[n].str+"_line1_png");this.content.addChild(i),i.width=130,i.height=t.autoHeight(i),i.anchorOffsetX=i.width/2,i.anchorOffsetY=i.height/2,i.x=r.x+r.width/2,i.y=r.y+r.height/2+10}},n.prototype.choosething=function(t){var e=new choosefn(choosefn.DATE);e.data=t.currentTarget.str,e.num=t.currentTarget.num,this.dispatchEvent(e)},n}(egret.DisplayObjectContainer);t.choosepage=e,__reflect(e.prototype,"Game.choosepage",[])}(n||(n={})),window.Game=n},function(t,e){var n,n=window.Game;!function(t){var e=function(e){function n(){var t=e.call(this)||this;return t.color=0,t.drawthings=[],t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(n,e),n.prototype.onAddToStage=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.stageW=this.stage.width,this.stageH=this.stage.height,this.gamebg()},n.prototype.gamebg=function(){var e=t.createBitmapByName("indexbg_png");e.touchEnabled=!0,this.addChild(e),this.drawboxfn()},n.prototype.startGame=function(t,e){this.drawInit(t,e)},n.prototype.drawboxfn=function(){this.drawbox=new egret.Shape,this.drawbox.graphics.beginFill(16777215),this.drawbox.graphics.drawRect(100,50,1360,600),this.drawbox.graphics.endFill(),this.addChild(this.drawbox);var e=t.createBitmapByName("hua_zhe_png");this.addChild(e),this.penListfn();var n=30,r=t.createBitmapByName("save_btn_png");this.addChild(r),r.width=.54*r.width,r.height=t.autoHeight(r),r.x=this.stageW-r.width-n,r.y=50,r.touchEnabled=!0;var i=t.createBitmapByName("delete_btn_png");this.addChild(i),i.width=.54*i.width,i.height=t.autoHeight(i),i.x=r.x,i.y=r.y+r.height+20,i.touchEnabled=!0,i.addEventListener(egret.TouchEvent.TOUCH_TAP,this.cleanAll,this);var o=t.createBitmapByName("home_btn_png");this.addChild(o),o.width=.54*o.width,o.height=t.autoHeight(o),o.x=r.x,o.y=i.y+i.height+20,o.touchEnabled=!0,o.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gohome,this)},n.prototype.gohome=function(){console.log("返回");var t=new gohomefn(gohomefn.DATE);this.dispatchEvent(t)},n.prototype.cleanAll=function(){for(var t=0;t<this.drawthings.length;t++){var e=this.drawthings[t][1];e.removeChildren()}},n.prototype.penListfn=function(){this.penList=new egret.Sprite,this.addChild(this.penList);for(var e=(this.stage.width-1300)/2,n=0;20>n;n++){var r=n+1,i=t.createBitmapByName("pen"+r+"_png");this.penList.addChild(i),i.touchEnabled=!0,i.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chooseColor,this),i.width=62,i.height=t.autoHeight(i),i.anchorOffsetY=i.height,i.x=n*(i.width+3)+e,i.y=780,i.color=t.config.colorlist[n]}},n.prototype.chooseColor=function(t){this.color=t.currentTarget.color,this.penList.$children.forEach(function(t){t.y=780}),t.currentTarget.y=760},n.prototype.chooseimg=function(t){var e=t.currentTarget.id,n=t.currentTarget.graphics.minY-4,r=egret.Tween.get(this.choosekuang,{loop:!1});r.to({y:n},300,egret.Ease.backOut);for(var i in this.drawthings){var o=this.drawthings[i][0];o.touchEnabled=!1,o.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this),o.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchbegin,this),o.removeEventListener(egret.TouchEvent.TOUCH_END,this.onEnd,this),o.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onEnd,this)}for(var a=this.referline.$children,h=0;h<a.length;h++){var s=h+1;if(1==e||s==e-1){var c=a[h],d=egret.Tween.get(c,{loop:!1});d.to({alpha:.3},200,egret.Ease.backIn).to({alpha:1},200,egret.Ease.backIn).to({alpha:.3},200,egret.Ease.backIn).to({alpha:1},200,egret.Ease.backIn)}else{var c=a[h];c.alpha=.7}}var l=this.drawthings[e-1][0];this.drawthings[e-1][1];1==e?this.setChildIndex(this.drawthings[0][1],20):this.setChildIndex(this.drawthings[0][1],0),l.touchEnabled=!0,l.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchbegin,this),l.addEventListener(egret.TouchEvent.TOUCH_END,this.onEnd,this),l.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onEnd,this)},n.prototype.touchbegin=function(t){var e=t.currentTarget;this.lastPoint=new egret.Point(t.localX+e.x,t.localY+e.y),e.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this)},n.prototype.drawInit=function(e,n){var r=new egret.Shape;r.graphics.beginFill(16777215),r.graphics.drawRoundRect(0,0,220,this.stageH,60),r.graphics.endFill(),r.alpha=.6,r.x=-60,this.addChild(r);var i=new egret.Sprite,o=new egret.ScrollView;o.setContent(i),o.width=160,o.height=600,o.x=0,o.y=75,o.bounces=!1,o.verticalScrollPolicy="on",this.myscrollView=o,this.addChild(this.myscrollView);var a=t.createBitmapByName("run_jt_png");this.addChild(a),a.anchorOffsetX=a.width/2,a.x=80,a.y=30;var h=t.createBitmapByName("run_jt_png");this.addChild(h),h.anchorOffsetX=h.width/2,h.anchorOffsetY=0,h.rotation=180,h.x=80,h.y=this.stageH-30,4>=n&&(a.alpha=h.alpha=.4);for(var s=1;n>=s;s++){var c=15,d=150*(s-1)+4,l=130,u=new egret.Shape;u.graphics.beginFill(16774892),u.graphics.drawRoundRect(c,d,l,l,60),u.graphics.endFill(),i.addChild(u),u.id=s,u.touchEnabled=!0,u.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chooseimg,this);var g=t.createBitmapByName(e+"_c"+s+"_png");if(i.addChild(g),g.anchorOffsetX=g.width/2,g.anchorOffsetY=g.height/2,g.x=c+l/2,g.y=d+l/2,n>4&&s==n){var p=new egret.Shape;p.graphics.beginFill(39168),p.graphics.drawRect(0,d+l,130,20),p.graphics.endFill(),p.alpha=0,i.addChild(p)}var f=t.createBitmapByName(e+"_zhe"+s+"_png");f.name="area"+s,f.id=s,f.x=this.stageW/2-f.width/2,f.y=this.stageH/2-f.height/2-40,f.touchEnabled=!1,f.alpha=0,this.addChild(f);var v=t.createBitmapByName(e+"_zhe"+s+"_png");v.x=f.x,v.y=f.y,this.addChild(v);var w=new egret.Sprite;this.addChild(w),w.mask=v;var y=[f,w];this.drawthings.push(y),1==s&&(f.touchEnabled=!0,f.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchbegin,this),f.addEventListener(egret.TouchEvent.TOUCH_END,this.onEnd,this),f.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onEnd,this),this.setChildIndex(w,20))}this.referline=new egret.Sprite,this.addChild(this.referline);for(var _=1;n>=_;_++)if(1!=_){var m=t.createBitmapByName(e+"_line"+_+"_png");this.referline.addChild(m),m.x=this.stageW/2-m.width/2,m.y=this.stageH/2-m.height/2-40}this.choosekuang=new egret.Shape,this.choosekuang.graphics.lineStyle(3,39168),this.choosekuang.graphics.drawRoundRect(15,4,130,130,60),this.choosekuang.graphics.endFill(),i.addChild(this.choosekuang),this.drawGroup=new egret.Sprite,this.addChild(this.drawGroup)},n.prototype.getdrawline=function(t){var e=new egret.Shape;return e.graphics.lineStyle(30,this.color),e.graphics.moveTo(this.lastPoint.x,this.lastPoint.y),e.graphics.lineTo(t.localX+t.currentTarget.x,t.localY+t.currentTarget.y),e},n.prototype.onMove=function(t){var e=t.currentTarget.id;if(1==e){for(var n=this.drawthings,r=0;r<n.length;r++)if(0!=r){var i=n[r][1],o=this.getdrawline(t);i.addChild(o)}}else{var o=this.getdrawline(t),a=this.drawthings[e-1][1];a.addChild(o)}this.lastPoint.x=t.localX+t.currentTarget.x,this.lastPoint.y=t.localY+t.currentTarget.y},n.prototype.onEnd=function(t){this.lastPoint=null,t.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);var e=t.currentTarget.id,n=this.drawthings[e-1][1];this.repaint(n,e)},n.prototype.getGraph=function(t,e){t.graphics.lineStyle(2,0),t.graphics.beginFill(Number(0)),e.forEach(function(e){switch(e.type){case"moveTo":t.graphics.moveTo(e.props.x,e.props.y);break;case"lineTo":t.graphics.lineTo(e.props.x,e.props.y);break;case"curveTo":t.graphics.curveTo(e.props.x2,e.props.y2,e.props.x,e.props.y)}})},n.prototype.repaint=function(t,e){if(1==e){for(var n=this.drawthings,r=0;r<n.length;r++)if(0!=r){var i=n[r][1],o=new egret.RenderTexture;o.drawToTexture(i);var a=new egret.Bitmap(o);i.removeChildren(),i.addChild(a)}return void console.log(n)}var o=new egret.RenderTexture;o.drawToTexture(t);var a=new egret.Bitmap(o);t.removeChildren(),t.addChild(a)},n}(egret.DisplayObjectContainer);t.colorpage=e,__reflect(e.prototype,"Game.colorpage",[])}(n||(n={})),window.Game=n},function(t,e){var n,n=window.Game;!function(t){var e=function(e){function n(){var t=e.call(this)||this;return t.strokes=[],t._currentStroke={color:0,size:0,lines:[]},t.color=0,t.pensize=5,t._sketching=!1,t.drawLog=[],t._cursorPosition=function(t){return{x:t.localX,y:t.localY}},t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(n,e),n.prototype.onAddToStage=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.gamebg()},n.prototype.gamebg=function(){this.drawbg=t.createBitmapByName("indexbg_png"),this.drawbg.touchEnabled=!0,this.addChild(this.drawbg),this.drawbg.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouchstart,this),this.drawbg.addEventListener(egret.TouchEvent.TOUCH_END,this.ontouchEnd,this),this.drawbg.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.ontouchEnd,this),this.drawbg.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.ontouchEnd,this),this.drawbg.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE,this.ontouchEnd,this),this.drawboxfn()},n.prototype.drawboxfn=function(){this.drawbox=new egret.Shape,this.drawbox.graphics.beginFill(16777215),this.drawbox.graphics.drawRect(100,50,1360,600),this.drawbox.graphics.endFill(),this.addChild(this.drawbox),this.drawlineGroup=new egret.Sprite,this.addChild(this.drawlineGroup);var e=t.createBitmapByName("hua_zhe_png");this.addChild(e),this.penListfn();var n=30,r=t.createBitmapByName("save_btn_png");this.addChild(r),r.width=.54*r.width,r.height=t.autoHeight(r),r.x=this.stage.width-r.width-n,r.y=50,r.touchEnabled=!0;var i=t.createBitmapByName("back_btn_png");this.addChild(i),i.width=.54*i.width,i.height=t.autoHeight(i),i.x=r.x,i.y=r.y+r.height+20,i.touchEnabled=!0,i.addEventListener(egret.TouchEvent.TOUCH_TAP,this.drawback,this);var o=t.createBitmapByName("delete_btn_png");this.addChild(o),o.width=.54*o.width,o.height=t.autoHeight(o),o.x=r.x,o.y=i.y+i.height+20,o.touchEnabled=!0,o.addEventListener(egret.TouchEvent.TOUCH_TAP,this.cleanAll,this);var a=t.createBitmapByName("pen_btn_png");this.addChild(a),a.width=.54*a.width,a.height=t.autoHeight(a),a.x=this.stage.width-a.width-25-n,a.y=o.y+o.height+40,a.touchEnabled=!0,a.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bichufn,this),this.bichuGroup=new egret.Sprite,this.addChild(this.bichuGroup),this.bichuGroup.visible=!1;var h=t.createBitmapByName("bichu_png");this.bichuGroup.addChild(h),h.$anchorOffsetX=h.width,h.x=a.x-10,h.y=120,h.touchEnabled=!0,h.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bisizeChoose,this),this.bichuk=t.createBitmapByName("bichuk_png"),this.bichuGroup.addChild(this.bichuk),this.bichuk.anchorOffsetX=this.bichuk.width,this.bichuk.x=h.x-30,this.bichuk.y=140;var s=t.createBitmapByName("home_btn_png");this.addChild(s),s.width=.54*s.width,s.height=t.autoHeight(s),s.x=r.x,s.y=h.y+h.height+20,s.touchEnabled=!0,s.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gohome,this)},n.prototype.gohome=function(){var t=new gohomefn(gohomefn.DATE);this.dispatchEvent(t)},n.prototype.bisizeChoose=function(t){for(var e=0,n=7;n>=0;n--){var r=53.5*n+14;if(t.localY>=r){e=n;break}}var i=53.5*e+14+126,o=egret.Tween.get(this.bichuk,{loop:!1});o.to({y:i},300,egret.Ease.backOut),this.pensize=3+5*e,console.log(this.pensize)},n.prototype.bichufn=function(){this.bichuGroup.visible=!this.bichuGroup.visible},n.prototype.penListfn=function(){this.penList=new egret.Sprite,this.addChild(this.penList);for(var e=(this.stage.width-1300)/2,n=0;20>n;n++){var r=n+1,i=t.createBitmapByName("pen"+r+"_png");this.penList.addChild(i),i.touchEnabled=!0,i.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chooseColor,this),i.width=62,i.height=t.autoHeight(i),i.anchorOffsetY=i.height,i.x=n*(i.width+3)+e,i.y=780,i.color=t.config.colorlist[n]}},n.prototype.chooseColor=function(t){this.color=t.currentTarget.color,this.penList.$children.forEach(function(t){t.y=780}),t.currentTarget.y=760},n.prototype.xiangpifn=function(){this.color=16777215,this.penList.$children.forEach(function(t){t.y=780})},n.prototype.ontouchstart=function(t){this._sketching||(this._sketching=!0,this.lastPoint=this._cursorPosition(t),this.drawbg.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouchmove,this))},n.prototype.drawfn=function(t,e,n,r){var i=new egret.Shape;i.graphics.lineStyle(n,r),i.graphics.moveTo(t.x,t.y),i.graphics.lineTo(e.x,e.y),i.name="Line"+this.strokes.length,this.drawlineGroup.addChild(i)},n.prototype.ontouchmove=function(t){var e=this._cursorPosition(t);this.drawfn(this.lastPoint,e,this.pensize,this.color),this.lastPoint.x=t.localX,this.lastPoint.y=t.localY},n.prototype.ontouchEnd=function(){this._sketching&&(this.strokes.push(this._currentStroke),this._sketching=!1),this.drawbg.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouchmove,this),this.repaint(this.drawlineGroup)},n.prototype.drawback=function(){this.drawLog.pop(),this.drawlineGroup.removeChildren(),this.drawLog.length>0&&this.drawlineGroup.addChild(this.drawLog[this.drawLog.length-1])},n.prototype.cleanAll=function(){this.drawlineGroup.removeChildren(),this.drawLog=[]},n.prototype.repaint=function(t){var e=new egret.RenderTexture;e.drawToTexture(t);var n=new egret.Bitmap(e);this.drawLog.push(n),t.removeChildren(),t.addChild(n)},n}(egret.DisplayObjectContainer);t.drawpage=e,__reflect(e.prototype,"Game.drawpage",[])}(n||(n={})),window.Game=n},function(t,e){var n=function(t){function e(e,n,r){void 0===n&&(n=!1),void 0===r&&(r=!1);var i=t.call(this,e,n,r)||this;return i.num=0,i.data="",i
}return __extends(e,t),e.DATE="选择物品",e}(egret.Event);window.choosefn=n,__reflect(n.prototype,"choosefn",[]);var r=function(t){function e(e,n,r){void 0===n&&(n=!1),void 0===r&&(r=!1);var i=t.call(this,e,n,r)||this;return i.num=0,i.data="",i}return __extends(e,t),e.DATE="返回首页",e}(egret.Event);window.gohomefn=r,__reflect(r.prototype,"gohomefn",[])}]);