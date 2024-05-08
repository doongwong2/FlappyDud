System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CCFloat, Vec3, Animation, tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Bird;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCFloat = _cc.CCFloat;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c65e0ZsqtdCEIDTCeomMOLx", "Bird", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCFloat', 'Vec3', 'Animation', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bird", Bird = (_dec = ccclass('Bird'), _dec2 = property({
        type: CCFloat,
        tooltip: 'how high can they fly'
      }), _dec3 = property({
        type: CCFloat,
        tooltip: 'how long can they fly'
      }), _dec(_class = (_class2 = class Bird extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "jumpHeight", _descriptor, this);

          _initializerDefineProperty(this, "jumpDuration", _descriptor2, this);

          this.birdAnimation = void 0;
          this.birdLocation = void 0;
          this.hitSomething = void 0;
        }

        onLoad() {
          this.resetBird();
          this.birdAnimation = this.getComponent(Animation);
        }

        resetBird() {
          this.birdLocation = new Vec3(0, 0, 0);
          this.node.setPosition(this.birdLocation);
          this.hitSomething = false;
        }

        fly() {
          this.birdAnimation.stop();
          tween(this.node.position).to(this.jumpDuration, new Vec3(this.node.position.x, this.node.position.y + this.jumpHeight, 0), {
            easing: "smooth",
            onUpdate: (target, ratio) => {
              this.node.position = target;
            }
          }).start();
          this.birdAnimation.play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "jumpHeight", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jumpDuration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=057501cea874a2a6941dbe4fa70aedb04bbd93da.js.map