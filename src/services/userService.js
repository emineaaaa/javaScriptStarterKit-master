import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{
    constructor(){
        this.employees=[]
        this.customers=[]
        this.errors=[]
    }


    load(){
        for (const user of users) {
             switch (user.type) {
                case "customer":
                    if(!this.validateCustomer(user)){
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                        this.employees.push(user)
                        break;
                default:
                    this.errors.push(new DataError("Wrong user type",user))
                    break;
             }
        }
    }

    validateCustomer(user){
        let requiredFields="id firstName lastName age city".split(" ")                  //split ile ayrı ayrı köşeli parantez ayırdık.
        let hasErrors=false
        for (const field of requiredFields) {
            if (!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem ${field}`,user))
            }
            
        }

        if(Number.isNaN(Number.parseInt(+user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem ${user.age} is not a number`,user))
        }

        return hasErrors
    }




    add(user){
        this.users.push(user)
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=>u.id===id)
    }
}