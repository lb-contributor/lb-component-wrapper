import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonProps } from 'antd/es/button';
import 'antd/es/button/style';
export { ButtonProps, ButtonShape, ButtonSize, ButtonType, ButtonGroupProps } from 'antd/es/button';
export declare type ButtonWrapperProps = ButtonProps & {
    disabled?: boolean;
};
declare class ButtonWrapper extends React.Component<ButtonWrapperProps, any> {
    static propTypes: {
        disabled: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    shouldComponentUpdate(nextProps: ButtonWrapperProps): boolean;
    render(): JSX.Element;
}
export default ButtonWrapper;
export declare const ButtonGroup: React.StatelessComponent<ButtonGroupProps>;
