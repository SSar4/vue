<template>
<div class="container">
<img alt="Pw2 logo" src="@/assets/like.png" class="img-responsive img-logo">
<header class="navbar">
  <section class="navbar-section">
    <a href="#" class="btn btn-link" v-on:click="login">Login</a>
    
  </section>
  <section class="navbar-center">
    <!-- centered logo or brand -->
  </section>
  <section class="navbar-section">
    <a href="#" class="btn btn-link">Twitter</a>
    <img src="@/assets/twitter.png">
    <a href="#" class="btn btn-link">GitHub</a>
    <img src="@/assets/git.png">
  </section>
</header>
<form id="login" @submit.prevent="logar">
<div class="input-group formLogin">
  <span class="input-group-addon addon-lg"><i class="icon icon-mail"></i></span>
  <input type="text" class="form-input input-lg" placeholder="Email" v-model="user.email">
</div>

<div class="input-group formLogin">
  <span class="input-group-addon addon-lg"><img alt="Pw2 logo" src="@/assets/padlock.png" class="img-responsive"></span>
  <input type="password" class="form-input input-lg" placeholder="Senha" v-model="user.password">
</div>
<input class="btn btn-primary col-12" type="submit" value="Logar">
</form>
{{user.password}}
<form id="cadastro">
<div class="text-center">Cadastro</div>
<div class="input-group formLogin">
  <span class="input-group-addon addon-lg"><img alt="Pw2 logo" src="@/assets/arroba.png" class="img-responsive"></span>
  <input type="text" class="form-input input-lg" placeholder="Nome de usuário" >
</div>

<div class="input-group formLogin">
  <span class="input-group-addon addon-lg"><i class="icon icon-mail"></i></span>
  <input type="email" class="form-input input-lg" placeholder="Email"/>
</div>

<div class="input-group formLogin">
  <span class="input-group-addon addon-lg"><img alt="Pw2 logo" src="@/assets/padlock.png" class="img-responsive"></span>
  <input type="password" class="form-input input-lg" placeholder="Senha">
</div>
<button class="btn btn-primary col-12" type="submit">Cadastrar</button>
</form>

<div class="col-12 bg-secondary criarConta text-clip">
<p style="font-size: 12px">ainda não tem uma conta?</p>
<button class="btn btn-primary col-6" v-on:click="cadastro" style="background-color:#00acee; margin-bottom: 10px; border:none">Criar conta</button>
</div>
</div>
</template>

<script>
import user from '../service/contatos'
export default {
name: "HelloWorld",
data: function () {
  return {
    user:{
      email: undefined,
      name:undefined,
      password:undefined
    },
  
  }
},
methods: {
login() {
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "block";
},
cadastro() {
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("login").style.display = "none";
},
async logar(){
  user.logar(this.user).then((res)=>{
    if(res.status==200){
      localStorage.setItem('token', JSON.stringify(res.data));
      return this.$router.push('/user');
    }else{
      alert('verifique seu email')
    }
  }).catch((e)=>{
    console.log(e)
    alert(e)
  })
  
  
}

},
};
</script>

<style scoped>
.img-logo {
max-width: 200px;
margin: 20px auto;
}
.container {
max-width: 30%;
}
.formLogin{
  margin: 20px auto;
  max-width: 100%;
}
.criarConta{
  margin: 20px auto;
  text-align: center;
  
}
#cadastro{
  display: none;
}
</style>
