interface IAddOverload {
  add(value1: number, value2: number): number
  add(value1: string, value2: string): number
}

export const addOverload: IAddOverload = {
  add(value1: number | string, value2: number | string): number {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
      return value1 + value2
    } else if (typeof value1 === 'string' && typeof value2 === 'string') {
      return parseInt(value1) + parseInt(value2)
    }

    throw new Error('value1 or value2 must be number|string')
  },
}

interface ISumOverload {
  sum(value: number[]): number
  sum(...value: number[]): number
}

export const sumOverload: ISumOverload = {
  sum(arg: number | number[], ...args: number[]): number {
    return typeof arg === 'number'
      ? args.reduce((accu, element) => (accu += element), arg)
      : arg.reduce((accu, element) => (accu += element), 0)
  },
}
