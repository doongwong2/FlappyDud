System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioClip, AudioSource, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BirdAudio;

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
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bff87JknpH1KpckLPXxpax", "BirdAudio", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioClip', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BirdAudio", BirdAudio = (_dec = ccclass('BirdAudio'), _dec2 = property({
        type: [AudioClip]
      }), _dec3 = property({
        type: AudioSource
      }), _dec(_class = (_class2 = class BirdAudio extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "clips", _descriptor, this);

          _initializerDefineProperty(this, "audioSource", _descriptor2, this);
        }

        onAudioQueue(index) {
          var clip = this.clips[index];
          this.audioSource.playOneShot(clip);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b53df8cc78f4664085b6c6d00eaab0522f20f26.js.map