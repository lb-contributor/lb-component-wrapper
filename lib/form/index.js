'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleFormItem = exports.Item = undefined;

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/form/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = _form2.default.Item;
exports.Item = Item;


var FIELD_META_PROP = 'data-__meta';
var FIELD_DATA_PROP = 'data-__field';
var VALUE = 'value';
var OPTIONS = 'options';
var CHECKED = 'checked';

var SimpleFormItem = exports.SimpleFormItem = function (_Form$Item) {
  _inherits(SimpleFormItem, _Form$Item);

  function SimpleFormItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SimpleFormItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleFormItem.__proto__ || Object.getPrototypeOf(SimpleFormItem)).call.apply(_ref, [this].concat(args))), _this), _this.newGetChildProps = function (props, prop) {
      var child = _this.getControls(props.children, false)[0];
      return child && child.props && child.props[prop];
    }, _this.newGetMeta = function (props) {
      return _this.newGetChildProps(props, FIELD_META_PROP);
    }, _this.newGetField = function (props) {
      return _this.newGetChildProps(props, FIELD_DATA_PROP);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SimpleFormItem, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var currField = this.newGetField(this.props);
      var nextField = this.newGetField(nextProps);

      if (!currField || !nextField) {
        return true;
      }

      var willChange = nextProps.willChange || [];
      var changed = willChange.some(function (p) {
        return _this2.newGetChildProps(_this2.props, p) !== _this2.newGetChildProps(nextProps, p);
      });

      return changed || this.newGetChildProps(this.props, VALUE) !== this.newGetChildProps(nextProps, VALUE) || this.newGetChildProps(this.props, OPTIONS) !== this.newGetChildProps(nextProps, OPTIONS) || this.newGetChildProps(this.props, CHECKED) !== this.newGetChildProps(nextProps, CHECKED) || currField.validating !== nextField.validating || currField.value !== nextField.value || currField.error !== nextField.error || currField.initialValue !== nextField.initialValue;
    }
  }]);

  return SimpleFormItem;
}(_form2.default.Item);

exports.default = _form2.default;