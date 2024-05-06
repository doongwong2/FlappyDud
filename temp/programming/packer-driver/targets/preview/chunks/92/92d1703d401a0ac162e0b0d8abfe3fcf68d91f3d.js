System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, CCInteger, input, Input, KeyCode, director, Ground, Results, Bird, PipePool, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, GameCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGround(extras) {
    _reporterNs.report("Ground", "./Ground", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResults(extras) {
    _reporterNs.report("Results", "./Results", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBird(extras) {
    _reporterNs.report("Bird", "./Bird", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPipePool(extras) {
    _reporterNs.report("PipePool", "./PipePool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCInteger = _cc.CCInteger;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      director = _cc.director;
    }, function (_unresolved_2) {
      Ground = _unresolved_2.Ground;
    }, function (_unresolved_3) {
      Results = _unresolved_3.Results;
    }, function (_unresolved_4) {
      Bird = _unresolved_4.Bird;
    }, function (_unresolved_5) {
      PipePool = _unresolved_5.PipePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42556xE6RFNDYCxYUE4wC/N", "GameCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCInteger', 'input', 'Input', 'EventKeyboard', 'KeyCode', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property({
        type: _crd && Ground === void 0 ? (_reportPossibleCrUseOfGround({
          error: Error()
        }), Ground) : Ground,
        tooltip: 'this is ground'
      }), _dec3 = property({
        type: _crd && Results === void 0 ? (_reportPossibleCrUseOfResults({
          error: Error()
        }), Results) : Results,
        tooltip: 'results here'
      }), _dec4 = property({
        type: _crd && Bird === void 0 ? (_reportPossibleCrUseOfBird({
          error: Error()
        }), Bird) : Bird,
        tooltip: 'bird here'
      }), _dec5 = property({
        type: _crd && PipePool === void 0 ? (_reportPossibleCrUseOfPipePool({
          error: Error()
        }), PipePool) : PipePool
      }), _dec6 = property({
        type: CCInteger
      }), _dec7 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = class GameCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ground", _descriptor, this);

          _initializerDefineProperty(this, "result", _descriptor2, this);

          _initializerDefineProperty(this, "bird", _descriptor3, this);

          _initializerDefineProperty(this, "pipeQueue", _descriptor4, this);

          _initializerDefineProperty(this, "speed", _descriptor5, this);

          _initializerDefineProperty(this, "pipeSpeed", _descriptor6, this);
        }

        onLoad() {
          this.initListener();
          this.result.resetScore();
          director.pause();
        }

        initListener() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          this.node.on(Node.EventType.TOUCH_START, () => {
            this.bird.fly();
          });
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.gameOver();
              break;

            case KeyCode.KEY_P:
              this.result.addScore();
              break;

            case KeyCode.KEY_Q:
              this.resetGame();
              this.bird.resetBird();
              break;
          }
        }

        startGame() {
          this.result.hideResults();
          director.resume();
        }

        gameOver() {
          this.result.showResults();
          director.pause();
        }

        resetGame() {
          this.result.resetScore();
          this.pipeQueue.reset();
          this.startGame();
        }

        passPipe() {
          this.result.addScore();
        }

        createPipe() {
          this.pipeQueue.addPool();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ground", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "result", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bird", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pipeQueue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pipeSpeed", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92d1703d401a0ac162e0b0d8abfe3fcf68d91f3d.js.map