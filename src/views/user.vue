<template>
<div>
    <div class="panel container">
      <div class="panel-header">
        <figure class="avatar avatar-xl">
          <img src="../assets/like.png" alt="...">
          <i class="avatar-presence online"></i>
        </figure>
      </div>
      <div class="text-center"><h1 style="font-size:18px; letter-spacing: 3px;">{{usuario.email}}</h1></div>
      <div class="text-center">{{usuario.name}}</div>
      <header class="navbar">
  <section class="navbar-section" >
    <a href="#" class="btn btn-link" v-on:click="perfil">Perfil</a>
    
  </section>
  <section class="navbar-center">
    <!-- centered logo or brand -->
  </section>
  <section class="navbar-section">
    <a href="#" class="btn btn-link" v-on:click="contatos">Contatos</a>
    <a href="#" class="btn btn-link" v-on:click="deletar">Deletar</a>
  </section>
</header>
    </div>
    <div class="panel container2" id="perfil">
      <div class="panel-header">
        <form @submit.prevent="update">
        <div class="input-group formLogin">
  <span class="input-group-addon addon-lg"><img alt="Pw2 logo" src="@/assets/arroba.png" class="img-responsive"></span>
  <input type="text" class="form-input input-lg" placeholder="Nome de usuário" v-model="usuario.name">
</div>

        <div class="input-group formLogin">
        <span class="input-group-addon addon-lg"><img alt="Pw2 logo" src="@/assets/padlock.png" class="img-responsive"></span>
        <input type="password" class="form-input input-lg" placeholder="Senha" v-model="usuario.password">
      </div>

      <br/><br/>
      <input class="btn btn-primary col-12" type="submit" value="atualizar">
        </form>
    </div>
    </div>

 <div class=" container2 contatos" id="contatos">

    <tbody>
      <tr v-for="li of lis" :key="li.email">
        <td class="col-12">{{li.name}}</td>
        <td>{{li.email}}</td>
      </tr>
    </tbody>
 </div>

 <div class="panel container2 deletar" id="deletar">
      <div class="panel-header" style="display: flex; justify-content: space-around;">
        <h1 style="font-size: 17px;">Deletar</h1>
        <div class="bg-primary" style="padding:5px;" v-on:click="a">
          <i class="icon icon-cross"></i>
        </div>
    </div>
    
 </div>
 <button class="btn btn-primary sair" v-on:click="sair">Sair</button>
</div>   
</template>

<script>
import user from '../service/contatos'
var x = JSON.parse(localStorage.getItem('token'))
export default {

  name: 'user',
  data(){
    return{
      lis:[],
      
      usuario:{name:x.name,email:x.email}
    }
  },
  mounted(){
    return user.listar().then((res)=>{
      this.lis = res.data.user

    })
  },
  methods: {
    a(){
      user.deletar().then(()=>{
        localStorage.removeItem('token')
        return this.$router.push('/');
      }).catch((e)=>alert(e))
    },
    perfil(){
      document.getElementById("contatos").style.display = "none";
      document.getElementById("deletar").style.display = "none";
      document.getElementById("perfil").style.display = "block";
    },
    contatos(){
      document.getElementById("contatos").style.display = "block";
      document.getElementById("deletar").style.display = "none";
      document.getElementById("perfil").style.display = "none";
    },
    deletar(){
      document.getElementById("contatos").style.display = "none";
      document.getElementById("perfil").style.display = "none";
      document.getElementById("deletar").style.display = "block";
    },
    sair(){
      localStorage.removeItem('token')
      return this.$router.push('/');
    },
    update(){
      user.update(this.usuario).then((res)=>{
        localStorage.setItem('token', JSON.stringify(res.data));
        alert(res.data)
      }).catch((err)=>alert(err))
    }
  }
}
</script>

<style scoped>
.container{
  
   max-width: 500px;
   margin: 50px  auto;
   margin-bottom: 0px;
   align-items: center;
}
.container2{
   max-width: 500px;
   margin: auto;
   align-items: center;
}
.contatos{
  display: none;
}
.deletar{
  display: none;
}
.sair{
  padding: 5px;
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
