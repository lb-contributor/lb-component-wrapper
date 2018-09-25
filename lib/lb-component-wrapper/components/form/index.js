"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var form_1 = require("antd/es/form");
require("antd/es/form/style");
__export(require("antd/es/form/FormItem"));
var FIELD_META_PROP = 'data-__meta';
var FIELD_DATA_PROP = 'data-__field';
var VALUE = 'value';
var OPTIONS = 'options';
var CHECKED = 'checked';
var DISABLED = 'disabled';
var SimpleFormItem = /** @class */ (function (_super) {
    __extends(SimpleFormItem, _super);
    function SimpleFormItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newGetChildProps = function (props, prop) {
            var child = _this.getControls(props.children, false)[0];
            return child && child.props && child.props[prop];
        };
        _this.newGetMeta = function (props) { return _this.newGetChildProps(props, FIELD_META_PROP); };
        _this.newGetField = function (props) { return _this.newGetChildProps(props, FIELD_DATA_PROP); };
        return _this;
    }
    SimpleFormItem.prototype.shouldComponentUpdate = function (nextProps) {
        var _this = this;
        var currField = this.newGetField(this.props);
        var nextField = this.newGetField(nextProps);
        if (!currField || !nextField) {
            return true;
        }
        var willChange = nextProps.willChange || [];
        var changed = willChange.some(function (p) { return _this.newGetChildProps(_this.props, p) !== _this.newGetChildProps(nextProps, p); });
        var ret = changed ||
            this.helpShow !== this.lastHelpShow ||
            // removed following properties
            // this.props.read !== nextProps.read ||
            // this.props.authority !== nextProps.authority ||
            this.newGetChildProps(this.props, VALUE) !== this.newGetChildProps(nextProps, VALUE) ||
            this.newGetChildProps(this.props, OPTIONS) !== this.newGetChildProps(nextProps, OPTIONS) ||
            this.newGetChildProps(this.props, CHECKED) !== this.newGetChildProps(nextProps, CHECKED) ||
            this.newGetChildProps(this.props, DISABLED) !== this.newGetChildProps(nextProps, DISABLED) ||
            currField.validating !== nextField.validating ||
            currField.value !== nextField.value ||
            currField.errors !== nextField.errors ||
            currField.initialValue !== nextField.initialValue ||
            this.props.validateStatus !== nextProps.validateStatus ||
            this.props.help !== nextProps.help;
        // 我不知道为什么在这里this.state为null
        // 而且this.state.helpShow跑到了this里
        // 之前写的this.state.helpShow !== nextState.helpShow会抛空指针异常
        // 所以就有了现在这种写法
        this.lastHelpShow = this.helpShow === this.lastHelpShow ? this.helpShow : this.helpShow;
        return ret;
    };
    return SimpleFormItem;
}(form_1.default.Item));
exports.SimpleFormItem = SimpleFormItem;
exports.default = form_1.default;
