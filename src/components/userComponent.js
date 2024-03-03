import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi.")

  let userService = new UserService()
// let user1 = new User(1, "emine", "aydınlı", "izmir")
// let user2 = new User(2, "alperen", "akal", "ankara")

// userService.add(user2)
// userService.add(user1)

// userService.getById()
// console.log(userService.list())

// let customer = { id: 1, firstName: "alpi" }
// customer.lastName = "Akal"        //prototyping
// console.log(customer.lastName)


console.log("--------------")
userService.load()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)