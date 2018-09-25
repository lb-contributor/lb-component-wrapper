import * as React from 'react';
import { CheckboxGroupProps } from 'antd/es/checkbox';
export { CheckboxChangeEvent, CheckboxOptionType } from 'antd/es/checkbox';
import 'antd/es/checkbox/style';
export interface CheckboxGroupPropsLB extends CheckboxGroupProps {
}
declare class CheckboxGroupWrapper extends React.Component<CheckboxGroupPropsLB, any> {
    shouldComponentUpdate(nextProps: CheckboxGroupPropsLB): boolean;
    render(): JSX.Element;
}
export default CheckboxGroupWrapper;
