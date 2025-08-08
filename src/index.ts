
function combineInputs (input1 : number | string, input2 : number | string) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number')
    result = input1 + input2
  else
    result = `${input1}${input2}`
  return result
}

console.log(combineInputs(10, 20))
console.log(combineInputs('Apple', 'Orange'))