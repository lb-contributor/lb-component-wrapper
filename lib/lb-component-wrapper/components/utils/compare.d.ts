/**
 * return TRUE if curr is EQUAL with next
 */
export declare function shallowCompareObj(curr: object, next: object): boolean;
declare type commonProps = any[] | string | undefined;
export declare function shallowCompareArr(curr?: commonProps, next?: commonProps): boolean;
export declare function formBaseCompare(thisProps: any, nextProps: any): boolean;
export {};
