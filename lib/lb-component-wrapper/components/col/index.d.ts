import * as React from 'react';
import { ColProps } from 'antd/es/col';
import 'antd/es/col/style';
export interface ColPropsLB extends ColProps {
}
declare const LBCol: React.SFC<ColPropsLB>;
export { ColSize } from 'antd/es/col';
export default LBCol;
