interface DifferProp {
  [propName: string]: any;
}
function shallowDiffers (a: DifferProp, b: DifferProp): boolean {
  for (let i in a) if (!(i in b)) return true
  for (let i in b) if (a[i] !== b[i]) return true
  return false
}

/**
 * return TRUE if curr is EQUAL with next
 */
export function shallowCompareObj(curr: object, next: object): boolean {
  if (curr === next) {
    return true
  }

  if (curr != null && next != null) {
    return !shallowDiffers(curr, next)
  }

  return true
}

export function shallowCompareArr(curr: any[], next: any[]): boolean {
  if (curr === next) {
    return true
  }

  if (curr != null && next != null) {
    if (curr.length !== next.length) {
      return false
    }

    return curr.every((c, i) => {
      if (typeof c === 'object' && typeof next[i] === 'object') {
        return !shallowDiffers(c, next[i])
      }

      return c === next[i]
    })
  }

  return curr == next
}

export function formBaseCompare(thisProps: any, nextProps: any): boolean {
  return (thisProps.disabled === nextProps.disabled) &&
    thisProps.read === nextProps.read &&
    thisProps.checked === nextProps.checked &&
    (Array.isArray(thisProps.value) && Array.isArray(nextProps.value) ? shallowCompareArr(thisProps.value, nextProps.value) : thisProps.value === nextProps.value)
}
