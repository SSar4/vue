import {http} from './config'

export default {
    logar:(user)=>{
      console.log(user.password)
      return  http.post('users/login',{email:user.email, password:user.password })
    },
    cadastra:(user)=>{
      return  http.post('users',{email:user.email, password:user.password,name:user.name })
    },
    listar:()=>{
      
      const x = JSON.parse(localStorage.getItem('token'))

      return http({
        method:'post',
        url:'listar',
        params: {
          ID: 12345
        },
        data:{
          email:x.email
        },
       
      })
    },
    deletar:()=>{
      const x = JSON.parse(localStorage.getItem('token'))
      console.log(x.email)
      return http.delete('/deletar/'+x.email)
    },

    update:(usuario)=>{
      const x = JSON.parse(localStorage.getItem('token'))
      console.log(x.id)
      return http.post('/users/'+x.id,{name:usuario.name,password:usuario.password})
    }
    
}