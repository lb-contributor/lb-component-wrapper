import Collapse, { CollapseProps } from 'antd/es/collapse'
import CollapsePanel, { CollapsePanelPropsLB } from './collapse-panel'
import 'antd/es/collapse/style'

export interface CollapsePropsLB extends CollapseProps {
  // nothing
}

export { CollapsePanelPropsLB, CollapsePanel, CollapsePanel as Panel}
export default Collapse
