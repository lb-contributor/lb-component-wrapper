"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shallowDiffers(a, b) {
    for (var i in a)
        if (!(i in b))
            return true;
    for (var i in b)
        if (a[i] !== b[i])
            return true;
    return false;
}
/**
 * return TRUE if curr is EQUAL with next
 */
function shallowCompareObj(curr, next) {
    if (curr === next) {
        return true;
    }
    if (curr != null && next != null) {
        return !shallowDiffers(curr, next);
    }
    return true;
}
exports.shallowCompareObj = shallowCompareObj;
function shallowCompareArr(curr, next) {
    if (curr === void 0) { curr = []; }
    if (next === void 0) { next = []; }
    if (curr === next) {
        return true;
    }
    if (typeof curr === 'string' || typeof next === 'string') {
        return curr === next;
    }
    if (curr != null && next != null) {
        if (curr.length !== next.length) {
            return false;
        }
        return curr.every(function (c, i) {
            if (typeof c === 'object' && typeof next[i] === 'object') {
                return !shallowDiffers(c, next[i]);
            }
            return c === next[i];
        });
    }
    return curr == next;
}
exports.shallowCompareArr = shallowCompareArr;
function formBaseCompare(thisProps, nextProps) {
    return (thisProps.disabled === nextProps.disabled) &&
        thisProps.read === nextProps.read &&
        thisProps.checked === nextProps.checked &&
        (Array.isArray(thisProps.value) && Array.isArray(nextProps.value) ? shallowCompareArr(thisProps.value, nextProps.value) : thisProps.value === nextProps.value);
}
exports.formBaseCompare = formBaseCompare;
