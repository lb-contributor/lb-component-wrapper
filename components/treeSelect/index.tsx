import * as React from 'react'
import TreeSelect, { TreeSelectProps } from 'antd/es/tree-select'
import 'antd/es/tree-select/style'

// export * from 'antd/es/tree-select'
export const TreeNode: React.SFC<TreeSelectProps> = (props) => (<TreeSelect.TreeNode {...props} />)
export default TreeSelect
