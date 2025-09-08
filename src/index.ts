//Intersection

type User = {
  idUser: number
  name: string
  age: number
}

type JobRole = {
  idJobRole: number
  role: 'Admin' | 'View'
}

type Employee = User & JobRole

const firstEmployee: Employee = {
  idUser: 1,
  name: 'Foo',
  age: 30,
  idJobRole: 1,
  role: 'Admin'
}

console.log(firstEmployee)