System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var computedFrom, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
        }

        _createClass(Welcome, [{
          key: 'fullName',
          get: function () {
            return '' + this.firstName + ' ' + this.lastName;
          }
        }, {
          key: 'welcome',
          value: function welcome() {
            alert('Welcome, ' + this.fullName + '!');
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVhLE9BQU8sRUFrQlAsbUJBQW1COzs7Ozs7Ozt1Q0FwQnhCLFlBQVk7OztBQUVQLGFBQU87aUJBQVAsT0FBTztnQ0FBUCxPQUFPOztlQUNsQixPQUFPLEdBQUcsd0NBQXdDO2VBQ2xELFNBQVMsR0FBRyxNQUFNO2VBQ2xCLFFBQVEsR0FBRyxLQUFLOzs7cUJBSEwsT0FBTzs7ZUFTTixZQUFFO0FBQ1osd0JBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO1dBQzdDOzs7aUJBRU0sbUJBQUU7QUFDUCxpQkFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQztXQUNyQzs7O2VBZlUsT0FBTzs7O3lCQUFQLE9BQU87O0FBa0JQLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1COztpQkFDeEIsZ0JBQUMsS0FBSyxFQUFDO0FBQ1gsbUJBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUNyQzs7O2VBSFUsbUJBQW1COzs7cUNBQW5CLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==