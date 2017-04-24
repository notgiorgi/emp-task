// sort
export const integerComp = key => (a, b) => a[key] - b[key]

export const stringComp = key => (a, b) => {
  const aKey = a[key]
  const bKey = b[key]
  if (aKey > bKey) return 1
  if (aKey < bKey) return -1
  return 0
}

export const stringedDateComp = key => (a, b) => new Date(a[key]) - new Date(b[key])

export const reverseCompareFn = fn => (a, b) => fn(b, a)
