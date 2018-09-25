import * as React from 'react';
import { CascaderProps } from 'antd/es/cascader';
import 'antd/es/cascader/style';
export interface CascaderPropsLB extends CascaderProps {
}
declare class LBCascader extends React.Component<CascaderPropsLB, any> {
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export default LBCascader;
