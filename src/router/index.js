import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from '../views/home/Home.vue'
import Speech from '../views/speech/Speech.vue'
import Board from '../views/board/Board.vue'
import BoardDetails from '../views/board/Board_Details.vue'
import Message from '../views/message/Message.vue'


Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {
      path:'/',
      name:'login',
      component:Login
    },
    // {
    //   path:'/',

    // },
    {
      path:'/home/', 
      name:"home",
      component:Home
    },
    {
        path:'/speech/', 
        name:"speech",
        component:Speech
    },
    {
        path:'/board/', 
        name:"board",
        component: Board
    },
    {
        path:'/board/details/:type/:sn', 
        name:"detials",
        component: BoardDetails
    },
    {
        path:'/message/', 
        name:"message",
        component:Message
    }
  ]
});

export default router
