import * as React from 'react'
import Tree, { AntTreeNodeProps, DirectoryTreeProps } from 'antd/es/tree'
import 'antd/es/tree/style'
export * from 'antd/es/tree'

export { AntTreeNodeProps }

// Tree only accept TreeNode as children, any wrapper will not work. so export Tree.TreeNode directly
export const TreeNode = Tree.TreeNode

export const DirectoryTree: React.SFC<DirectoryTreeProps> = (props) => (<Tree.DirectoryTree {...props} />)

export default Tree
