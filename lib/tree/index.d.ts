import * as React from 'react';
import Tree, { AntTreeNodeProps, DirectoryTreeProps } from 'antd/es/tree';
import 'antd/es/tree/style';
export * from 'antd/es/tree';
export { AntTreeNodeProps };
export declare const TreeNode: React.ComponentClass<AntTreeNodeProps, any>;
export declare const DirectoryTree: React.SFC<DirectoryTreeProps>;
export default Tree;
