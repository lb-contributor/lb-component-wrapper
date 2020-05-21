import Form, { FormItemProps } from 'antd/es/form';
import { GetFieldDecoratorOptions } from 'antd/es/form/Form';
import Item from 'antd/es/form/FormItem';
import 'antd/es/form/style';
export { FormProps, FormComponentProps, FormCreateOption, ValidateCallback, ValidationRule, FormItemProps } from 'antd/es/form';
export { Item, GetFieldDecoratorOptions };
export { WrappedFormUtils } from 'antd/es/form/Form';
export declare class SimpleFormItem extends Form.Item {
    private lastHelpShow;
    shouldComponentUpdate(nextProps: FormItemProps & {
        willChange: any[];
    }): boolean;
    newGetChildProps: (props: any, prop: string) => any;
    newGetMeta: (props: any) => any;
    newGetField: (props: any) => any;
}
export default Form;
