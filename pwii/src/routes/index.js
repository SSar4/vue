import Vue from "vue";
import Router from 'vue-router'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

Vue.use(Router)
function isSignedIn () {
 const token = localStorage.getItem('token');
 if(token){
   return true
 }else
  return false
  }
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import ('../views/home'),
            
        },
        {
            path:'/user',
            name:'usuario',
            component: () => import ('../views/user'),
            beforeEnter (_, __, next) { // Impede usuários não assinados
              if (isSignedIn()==false) {       // de acessar a página Home.
                next();
                return;
              }
              next('/user')
            }
        }
    ]
})