import Form, { FormItemProps } from 'antd/es/form';
import 'antd/es/form/style';
export { FormProps, FormComponentProps, FormCreateOption, ValidateCallback, ValidationRule, FormItemProps } from 'antd/es/form';
export declare const Item: typeof import("antd/es/form/FormItem").default;
export declare class SimpleFormItem extends Form.Item {
    lastHelpShow: boolean;
    shouldComponentUpdate(nextProps: FormItemProps & {
        willChange: any[];
    }): boolean;
    newGetChildProps: (props: any, prop: string) => any;
    newGetMeta: (props: any) => any;
    newGetField: (props: any) => any;
}
export default Form;
