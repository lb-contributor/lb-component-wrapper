import { Form } from 'antd'

export const { Item } = Form

const FIELD_META_PROP = 'data-__meta'
const FIELD_DATA_PROP = 'data-__field'
const VALUE = 'value'
const OPTIONS = 'options'
const CHECKED = 'checked'
const DISABLED = 'disabled'


export class SimpleFormItem extends Form.Item {
  shouldComponentUpdate(nextProps, nextState) {
    const currField = this.newGetField(this.props)
    const nextField = this.newGetField(nextProps)

    if (!currField || !nextField) {
      return true
    }

    const willChange = nextProps.willChange || []
    const changed = willChange.some(p => this.newGetChildProps(this.props, p) !== this.newGetChildProps(nextProps, p))

    const ret = changed ||
      this.helpShow !== this.lastHelpShow ||
      this.props.read !== nextProps.read ||
      this.props.authority !== nextProps.authority ||
      this.newGetChildProps(this.props, VALUE) !== this.newGetChildProps(nextProps, VALUE) ||
      this.newGetChildProps(this.props, OPTIONS) !== this.newGetChildProps(nextProps, OPTIONS) ||
      this.newGetChildProps(this.props, CHECKED) !== this.newGetChildProps(nextProps, CHECKED) ||
      this.newGetChildProps(this.props, DISABLED) !== this.newGetChildProps(nextProps, DISABLED) ||
      currField.validating !== nextField.validating ||
      currField.value !== nextField.value ||
      currField.errors !== nextField.errors ||
      currField.initialValue !== nextField.initialValue ||
      this.props.validateStatus !== nextProps.validateStatus ||
      this.props.help !== nextProps.help
    // 我不知道为什么在这里this.state为null
    // 而且this.state.helpShow跑到了this里
    // 之前写的this.state.helpShow !== nextState.helpShow会抛空指针异常
    // 所以就有了现在这种写法
    this.lastHelpShow = this.helpShow === this.lastHelpShow ? this.helpShow : this.helpShow
    return ret
  }

  newGetChildProps = (props, prop) => {
    const child = this.getControls(props.children, false)[0]
    return child && child.props && child.props[prop]
  }

  newGetMeta = props => this.newGetChildProps(props, FIELD_META_PROP)

  newGetField = props => this.newGetChildProps(props, FIELD_DATA_PROP)
}

export default Form
