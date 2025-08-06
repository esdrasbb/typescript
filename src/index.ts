//array 
let values: number[] = [ 10, 20, 30, 40 ]

//tuple - fruit, price, isStock
let item: [string, number, boolean] = [ 'Apple', 3, true ]

//enum
enum role { admin = 1, read = 2, backup = 3}
const user = {
  firstName: 'Foo',
  age: 30,
  role: role.backup
}
console.log(user)


//return 
function add (num1: number, num2: number){
  return num1 + num2
}
console.log(add(1,2))

//function void
function result (price:number){
  console.log('the result is ' + price)
}
result(add(1,2))

//unknown
let itemInput: unknown
let itemName: string

itemInput = 10
itemInput = true
itemInput = 'foo'
if (itemInput === 'string')
  itemName = itemInput


//never
function generateError(message: string, code: number): never{
  throw { message: message, errorCode: code}
}
generateError('the application crashed', 502)
console.log(generateError('the application crashed', 502))