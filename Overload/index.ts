import { addOverload, sumOverload } from './Overload'

console.log('add result = ', addOverload.add(1, 2))
console.log('add result = ', addOverload.add('10', '3'))

console.log('sum=', sumOverload.sum([1, 2, 3, 4, 5]))
console.log('sum=', sumOverload.sum(1, 2, 3))
