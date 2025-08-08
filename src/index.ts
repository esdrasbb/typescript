//Union and Literal type

let productPrice:  10 | 20 | 30
let productType:  'S' | 'M' | 'L'

function combineInputs (input1 : number | string, input2 : number | string) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number')
    result = input1 + input2
  else
    result = `${input1}${input2}`
  return result
}

productPrice = 20
productType = 'S'
console.log(combineInputs(10, productPrice))
console.log(combineInputs('Apple', productType))