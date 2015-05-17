System.register(['aurelia-framework', 'aurelia-http-client', 'lodash'], function (_export) {
  'use strict';

  var inject, bindable, customElement, HttpClient, _, ModalPic;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_lodash) {
      _ = _lodash['default'];
    }],
    execute: function () {
      ModalPic = (function () {
        var _instanceInitializers = {};

        function ModalPic(element, http) {
          _classCallCheck(this, _ModalPic);

          _defineDecoratedPropertyDescriptor(this, 'source', _instanceInitializers);

          this._apiGetSizes = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=1181f9b401dc890d90276ec6cf880ed7&photo_id=####&format=json';

          this.element = element;
          this.http = http;
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

            var self = this;
            this._aElem = this.element.getElementsByTagName('a')[0];
            this._aElem.addEventListener('click', function (ev) {

              var modalId = _this._aElem.attributes['data-reveal-id'];
              var picId = modalId.value.substring(3);
              var url = _this._apiGetSizes.replace('####', picId);
              _this.http.jsonp(url).then(function (response) {
                var picObj = _.filter(response.content.sizes.size, function (item) {
                  return item.label == 'Large';
                });
                self.pic = picObj[0].source;
                $('#' + modalId.value).foundation('reveal', 'open');
              });
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

        ModalPic = inject(Element, HttpClient)(ModalPic) || ModalPic;
        ModalPic = customElement('modal-pic')(ModalPic) || ModalPic;
        return ModalPic;
      })();

      _export('ModalPic', ModalPic);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscGljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztzREFPYSxRQUFROzs7Ozs7Ozs7O2lDQVBiLE1BQU07bUNBQUUsUUFBUTt3Q0FBRSxhQUFhOztzQ0FFL0IsVUFBVTs7Ozs7QUFLTCxjQUFROzs7QUFJUixpQkFKQSxRQUFRLENBSVAsT0FBTyxFQUFFLElBQUksRUFBRTs7Ozs7ZUFEM0IsWUFBWSxHQUFHLHdJQUF3STs7QUFFckosY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3dCQVBVLFFBQVE7Ozs7dUJBQ2xCLFFBQVE7Ozs7O2lCQVFELG9CQUFHOzs7QUFDVCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsRUFBRSxFQUFLOztBQUU1QyxrQkFBSSxPQUFPLEdBQUcsTUFBSyxNQUFNLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkQsa0JBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLGtCQUFJLEdBQUcsR0FBRyxNQUFLLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25ELG9CQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ3BDLG9CQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFBLElBQUksRUFBSTtBQUN6RCx5QkFBTyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztpQkFDOUIsQ0FBQyxDQUFDO0FBQ0gsb0JBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM1QixpQkFBQyxPQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2VBQ3JELENBQUMsQ0FBQzthQUVKLENBQUMsQ0FBQztXQUNKOzs7aUJBRU8sb0JBQUc7QUFDVCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1dBQ3JDOzs7aUJBRVMsc0JBQUc7QUFDWCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1dBQ3BDOzs7QUFsQ1UsZ0JBQVEsR0FEcEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FDZixRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBRnBCLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FFZCxRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVE7OzswQkFBUixRQUFRIiwiZmlsZSI6Im1vZGFscGljLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==