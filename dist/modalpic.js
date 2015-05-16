System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, bindable, customElement, ModalPic;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
    }],
    execute: function () {
      ModalPic = (function () {
        var _instanceInitializers = {};

        function ModalPic(element) {
          _classCallCheck(this, _ModalPic);

          _defineDecoratedPropertyDescriptor(this, 'source', _instanceInitializers);

          this.element = element;
        }

        var _ModalPic = ModalPic;

        _createDecoratedClass(_ModalPic, [{
          key: 'source',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'attached',
          value: function attached() {
            var _this = this;

            this._aElem = this.element.getElementsByTagName('a')[0];
            this._aElem.addEventListener('click', function (ev) {

              var _aElem = _this._aElem;

              var modalId = _aElem.attributes['data-reveal-id'];
              console.log('modalId is ' + modalId.value);
              $('#' + modalId.value).foundation('reveal', 'open');
            });
          }
        }, {
          key: 'activate',
          value: function activate() {
            console.log('ModalPic activate!!!');
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            console.log('ModalPic deactivate');
          }
        }], null, _instanceInitializers);

        ModalPic = inject(Element)(ModalPic) || ModalPic;
        ModalPic = customElement('modal-pic')(ModalPic) || ModalPic;
        return ModalPic;
      })();

      _export('ModalPic', ModalPic);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscGljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1Q0FLYSxRQUFROzs7Ozs7Ozs7O2lDQUxiLE1BQU07bUNBQUUsUUFBUTt3Q0FBRSxhQUFhOzs7QUFLMUIsY0FBUTs7O0FBR1IsaUJBSEEsUUFBUSxDQUdQLE9BQU8sRUFBRTs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3dCQUxVLFFBQVE7Ozs7dUJBQ2xCLFFBQVE7Ozs7O2lCQU1ELG9CQUFHOzs7QUFFVCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEVBQUUsRUFBSzs7QUFHNUMsa0JBQUksTUFBTSxHQUFHLE1BQUssTUFBTSxDQUFDOztBQUV6QixrQkFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xELHFCQUFPLENBQUMsR0FBRyxpQkFBZSxPQUFPLENBQUMsS0FBSyxDQUFHLENBQUM7QUFDM0MsZUFBQyxPQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3JELENBQUMsQ0FBQztXQUNKOzs7aUJBRU8sb0JBQUc7QUFDVCxtQkFBTyxDQUFDLEdBQUcsd0JBQXdCLENBQUM7V0FDckM7OztpQkFFUyxzQkFBRztBQUNYLG1CQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7V0FDcEM7OztBQTNCVSxnQkFBUSxHQURwQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQUZwQixhQUFhLENBQUMsV0FBVyxDQUFDLENBRWQsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJtb2RhbHBpYy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=