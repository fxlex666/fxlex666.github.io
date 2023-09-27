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

  // src/loading.generated.ts
  var loadingBase = class extends Laya.Scene {
  };

  // src/loading.ts
  var { regClass } = Laya;
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
    regClass("euVr-2wOQCaQViIZZBsPgQ")
  ], loading);
})();
