import {http} from './config'

export default {
    logar:(user)=>{
      console.log(user.password)
      return  http.post('users/login',{email:user.email, password:user.password })}
}