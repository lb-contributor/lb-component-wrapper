import * as React from 'react';
import { CascaderProps } from 'antd/es/cascader';
import 'antd/es/cascader/style';
declare class CascaderWrapper extends React.Component<CascaderProps, any> {
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export default CascaderWrapper;
