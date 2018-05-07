'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = exports.ItemGroup = exports.SubMenu = exports.Item = undefined;

var _menu = require('antd/es/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuWrapper = function (_Component) {
  _inherits(MenuWrapper, _Component);

  function MenuWrapper() {
    _classCallCheck(this, MenuWrapper);

    return _possibleConstructorReturn(this, (MenuWrapper.__proto__ || Object.getPrototypeOf(MenuWrapper)).apply(this, arguments));
  }

  _createClass(MenuWrapper, [{
    key: 'shouldComponentUpdate',

    // FIXME 补充完整的刷新条件
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_menu2.default, this.props);
    }
  }]);

  return MenuWrapper;
}(_react.Component);

var Item = _menu2.default.Item,
    SubMenu = _menu2.default.SubMenu,
    ItemGroup = _menu2.default.ItemGroup,
    Divider = _menu2.default.Divider;
exports.Item = Item;
exports.SubMenu = SubMenu;
exports.ItemGroup = ItemGroup;
exports.Divider = Divider;
exports.default = MenuWrapper;