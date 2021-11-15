import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1=new ElasticLogger()
let userService=new UserService(logger1)
//let userService=new UserService()

let user1=new User(1,"Pakize","Dem","İzmir")
let user2=new User(2,"Baran","Kla","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))
userService.list()


let customer={id:1,fistName:"Engin"}

