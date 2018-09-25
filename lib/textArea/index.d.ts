import * as React from 'react';
import { TextAreaProps } from 'antd/es/input/TextArea';
import 'antd/es/input/style';
export interface TextAreaPropsLB extends TextAreaProps {
}
declare class TextAreaWrapper extends React.Component<TextAreaProps, any> {
    shouldComponentUpdate(nextProps: TextAreaProps): boolean;
    render(): JSX.Element;
}
export default TextAreaWrapper;
