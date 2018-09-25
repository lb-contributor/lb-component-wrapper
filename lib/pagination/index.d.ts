import * as React from 'react';
import { PaginationProps } from 'antd/es/pagination';
import 'antd/es/pagination/style';
export interface PaginationPropsLB extends PaginationProps {
}
export { PaginationConfig } from 'antd/es/pagination';
declare class PaginationWrapper extends React.Component<PaginationPropsLB, any> {
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export default PaginationWrapper;
