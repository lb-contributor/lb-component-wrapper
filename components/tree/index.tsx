import * as React from 'react'
import Tree, { AntTreeNodeProps, DirectoryTreeProps } from 'antd/es/tree'
import 'antd/es/tree/style'
export * from 'antd/es/tree'

export const TreeNode: React.SFC<AntTreeNodeProps> = (props) => (<Tree.TreeNode {...props} />)

export const DirectoryTree: React.SFC<DirectoryTreeProps> = (props) => (<Tree.DirectoryTree {...props} />)

export default Tree
