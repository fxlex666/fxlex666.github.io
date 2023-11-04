"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/RectLineCollider.ts
  var { regClass, property } = Laya;
  var RectLineCollider = class extends Laya.ColliderBase {
    constructor() {
      super();
      this._lineWidth = 5;
      this._fixtures = [];
      this._shapes = [];
      RectLineCollider.instance = this;
    }
    lineWidth(val) {
      this._lineWidth = val;
    }
    setPoints(points, re = true, rb) {
      this._rigidbody = rb;
      const box2d = window.box2d;
      if (points == null || points.length < 4)
        return;
      var _x = 0;
      var _y = 0;
      var len = points.length;
      for (var i = 2; i < len - 1; i += 2) {
        var x1 = points[i - 2];
        var y1 = points[i - 1];
        var x2 = points[i];
        var y2 = points[i + 1];
        var cx = (x1 + x2) * 0.5;
        var cy = (y1 + y2) * 0.5;
        var dx = x1 - x2;
        var dy = y1 - y2;
        var linelen = Math.sqrt(dx * dx + dy * dy);
        var angle = Math.atan2(y2 - y1, x2 - x1) - Math.PI * 0.5;
        var s = new box2d.b2PolygonShape();
        s.SetAsBox(this._lineWidth / 2 / Laya.Physics.PIXEL_RATIO, linelen / 2 / Laya.Physics.PIXEL_RATIO, new box2d.b2Vec2(cx / Laya.Physics.PIXEL_RATIO, cy / Laya.Physics.PIXEL_RATIO), angle);
        this._shapes.push(s);
      }
      if (re)
        this.refresh();
    }
    refresh() {
      const box2d = window.box2d;
      if (this._rigidbody) {
        var body = this._rigidbody.body;
        if (this._fixtures.length > 0) {
          for (var j = 0; j < this._fixtures.length; ++j) {
            if (this._fixtures[j].GetBody() == body) {
              body.DestroyFixture(this._fixtures[j]);
            }
            this._fixtures[j].Destroy();
          }
          this._fixtures.length = 0;
        }
        for (var i = 0; i < this._shapes.length; ++i) {
          var def = new box2d.b2FixtureDef();
          def.density = 3;
          def.friction = 0;
          def.isSensor = false;
          def.restitution = 0.7;
          def.shape = this._shapes[i];
          def.filter.groupIndex = this._rigidbody.group;
          def.filter.categoryBits = this._rigidbody.category;
          def.filter.maskBits = this._rigidbody.mask;
          let fixture = this._rigidbody.body.CreateFixture(def);
          fixture.collider = this;
        }
      }
    }
    // refresh protected function _onDestroy():void {
    // 	if (rigidBody) {
    // 		if (_fixtures.length>0) {
    //             for(var i:int = 0 ;i<_fixtures.length;++i){
    //                 if (_fixtures[i].GetBody() == rigidBody.body) {
    //                     rigidBody.body.DestroyFixture(_fixtures[i]);
    //                 }
    //             }
    // 			_fixtures.length = 0;
    // 		}
    // 		rigidBody = null;
    // 		_shape = null;
    // 	}
    // }
  };
  RectLineCollider = __decorateClass([
    regClass("0lDxvu80QrGfzDOQxtrTSg")
  ], RectLineCollider);

  // src/Main.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var RigidBody = Laya.RigidBody;
  var BoxCollider = Laya.BoxCollider;
  var CircleCollider = Laya.CircleCollider;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
    onAwake() {
      Laya.Config.isAntialias = true;
      Laya.Physics.enable();
      Laya.PhysicsDebugDraw.enable();
      this.initbg();
    }
    initbg() {
      return __async(this, null, function* () {
        Laya.Physics.enable({ gravity: 5e5 });
        this.textBox = new Laya.Sprite();
        this.textBox.width = 750;
        this.textBox.height = 1334;
        this.owner.addChild(this.textBox);
        let bot = new Laya.Sprite();
        bot.graphics.drawRect(0, 1284, 750, 50, "#ffff00", "#ffff00", 5, false);
        this.owner.addChild(bot);
        let groundBody = new RigidBody();
        groundBody.type = "static";
        bot.addComponentInstance(groundBody);
        let chainCollider = bot.addComponent(BoxCollider);
        chainCollider.width = 750;
        chainCollider.height = 50;
        chainCollider.x = 0;
        chainCollider.y = 1284;
        const zhuan = new Laya.Sprite();
        this.owner.addChild(zhuan);
        const z_img = "resources/zhuan.png";
        zhuan.texture = Laya.Loader.getRes(z_img);
        zhuan.anchorX = 0.5;
        zhuan.anchorY = 0.5;
        zhuan.x = 750 / 2;
        zhuan.y = 400;
        zhuan.width = 200;
        zhuan.height = 100;
        let zroundBody = new RigidBody();
        zroundBody.type = "static";
        zhuan.addComponentInstance(zroundBody);
        const peng = zhuan.addComponent(BoxCollider);
        peng.x = 0;
        peng.y = 0;
        peng.width = zhuan.width;
        peng.height = zhuan.height;
        const yang = new Laya.Sprite();
        this.owner.addChild(yang);
        const y_img = "resources/yang.png";
        yang.texture = Laya.Loader.getRes(y_img);
        yang.anchorX = 0.5;
        yang.anchorY = 1;
        yang.x = 750 / 2;
        yang.y = 1284;
        yang.width = 150;
        yang.height = 139;
        const y_rb = new RigidBody();
        yang.addComponentInstance(y_rb);
        const yang_p = "-75.000,-16.500,-68.000,-23.500,-60.000,-23.500,-49.000,-14.500,-50.000,15.500,-62.000,9.500,-71.000,0.500,-75.000,-7.500,12.000,69.500,0.000,69.500,-8.000,64.500,52.000,11.500,56.000,30.500,48.000,39.500,20.000,63.500,-53.000,32.500,-53.000,22.500,-50.000,15.500,-39.000,45.500,-46.000,42.500,-15.000,69.500,-26.000,69.500,-39.000,45.500,-47.000,-10.500,-26.000,-64.500,47.000,-13.500,52.000,11.500,-8.000,64.500,75.000,-20.500,75.000,-10.500,72.000,-4.500,64.000,4.500,62.000,4.500,47.000,-13.500,67.000,-27.500,71.000,-25.500,-37.000,61.500,-40.000,52.500,-39.000,45.500,-26.000,69.500,-31.000,67.500,61.000,-27.500,67.000,-27.500,47.000,-13.500,55.000,-24.500,56.000,18.500,56.000,30.500,52.000,11.500,39.000,-52.500,46.000,-35.500,47.000,-13.500,-26.000,-64.500,-9.000,-69.500,9.000,-69.500,27.000,-63.500,49.000,50.500,46.000,57.500,41.000,62.500,34.000,65.500,26.000,65.500,20.000,63.500,48.000,39.500,-50.000,15.500,-49.000,-14.500,-47.000,-10.500,-39.000,45.500,-41.000,-50.500,-31.000,-61.500,-27.000,-62.500,-47.000,-10.500,-47.000,-35.500,54.000,34.500,48.000,39.500,56.000,30.500,60.000,7.500,52.000,11.500,47.000,-13.500,62.000,4.500,-27.000,-62.500,-26.000,-64.500,-47.000,-10.500";
        var col = yang.addComponent(CircleCollider);
        col.radius = 74;
        col.x = 0;
        this.addLine();
      });
    }
    /**加载并显示图片 */
    loadTexture(url, x = 0, y = 0) {
      Laya.loader.load(url).then((res) => {
        let img = new Laya.Image();
        img.texture = res;
        img.pos(x, y);
        this.owner.addChild(img);
      });
    }
    addLine() {
      let _this = this;
      var isDown = false;
      var prevX = 0;
      var prevY = 0;
      var line = null;
      var points = null;
      var color = "#ff0000";
      var lineSize = 10;
      this.textBox.on(Laya.Event.MOUSE_DOWN, this, function(e) {
        console.log("\u6309\u4E0B");
        if (isDown)
          return;
        isDown = true;
        prevX = Laya.stage.mouseX;
        prevY = Laya.stage.mouseY;
        if (points == null)
          points = [];
        points.push(prevX, prevY);
        line = new Laya.Sprite();
        line.mouseEnabled = false;
        _this.owner.addChild(line);
      });
      this.textBox.on(Laya.Event.MOUSE_MOVE, this, function(e) {
        if (isDown && line && _this.distance(Laya.stage.mouseX, Laya.stage.mouseY, prevX, prevY) > 10) {
          console.log("\u753B\u7EBF");
          var rayHit = new Object();
          if (!_this.rayCast(prevX, prevY, Laya.stage.mouseX, Laya.stage.mouseY, rayHit)) {
            console.log("\u753B\u7EBF22");
            line.graphics.drawLine(prevX, prevY, Laya.stage.mouseX, Laya.stage.mouseY, color, lineSize);
            prevX = Laya.stage.mouseX;
            prevY = Laya.stage.mouseY;
            points.push(prevX, prevY);
          }
        }
      });
      this.textBox.on(Laya.Event.MOUSE_UP, this, function(e) {
        if (isDown && points != null && points.length > 3) {
          var rb = line.addComponent(RigidBody);
          let rand = Math.floor(Math.random() * 15);
          rb.allowRotation = true;
          var col = line.addComponent(RectLineCollider);
          console.log(col, points);
          col.setPoints(points, true, rb);
          let pon = "";
          for (let key = 0; key < points.length; key++) {
            pon += points[key];
            if (key != points.length - 1) {
              pon += ",";
            }
          }
          console.log(pon);
          let sp = new Laya.Sprite();
          _this.owner.addChild(sp);
          sp.graphics.drawRect(0, 0, 50, 50, "#ffff00", "#ffff00", 5, false);
          sp.x = 200 + Math.random() * 100;
          sp.y = 0;
          let rig = sp.addComponent(RigidBody);
          let collider = sp.addComponent(BoxCollider);
          collider.width = 50;
          collider.height = 50;
        } else if (line != null) {
          line.destroy();
          line = null;
        }
        points = null;
        isDown = false;
      });
    }
    rayCast(startX, startY, endX, endY, outHitInfo) {
      var world = Laya.Physics.I.world;
      var result = 0;
      return result == 1 ? true : false;
    }
    distance(mouseX, mouseY, prevX, prevY) {
      let dx = mouseX - prevX;
      let dy = mouseY - prevY;
      let distance = Math.sqrt(dx * dx + dy * dy);
      return distance;
    }
  };
  Main = __decorateClass([
    regClass2("e60XQm7tTY2BwFAdxb8D1g")
  ], Main);

  // src/loading.generated.ts
  var loadingBase = class extends Laya.Scene {
  };

  // src/loading.ts
  var { regClass: regClass3 } = Laya;
  var Loader = Laya.Loader;
  var loading = class extends loadingBase {
    constructor() {
      super();
    }
    onAwake() {
      this.loadText = new Laya.Label();
      this.loadText.text = "0%";
      this.loadText.width = 750;
      this.loadText.x = 0;
      this.loadText.y = 700;
      this.loadText.fontSize = 50;
      this.loadText.color = "#fff";
      this.loadText.align = "center";
      this.addChild(this.loadText);
      var assets = [];
      assets.push({ "url": "resources/zhuan.png", "type": Loader.IMAGE });
      assets.push({ "url": "resources/layaAir.png", "type": Loader.IMAGE });
      assets.push({ "url": "resources/yang.png", "type": Loader.IMAGE });
      Laya.loader.load(assets, null, Laya.Handler.create(this, this.onLoading, null, false)).then(() => {
        this.onAssetsLoaded();
      });
    }
    onLoading(progress) {
      console.log("\u52A0\u8F7D\u8FDB\u5EA6: " + progress);
      this.loadText.text = progress * 100 + "%";
    }
    onAssetsLoaded() {
      console.log("\u52A0\u8F7D\u5B8C\u6210");
      Laya.Scene.open("Scene.ls");
    }
  };
  loading = __decorateClass([
    regClass3("euVr-2wOQCaQViIZZBsPgQ")
  ], loading);
})();
