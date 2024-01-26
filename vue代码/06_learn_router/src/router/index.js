import {createRouter,createWebHashHistory} from "vue-router"


const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:()=>import("@/view/Home.vue")
  },
  {
    path:"/about",
    component:()=>import("@/view/About.vue")
  },
  {
    path:"/user/:id",
    component:()=>import("@/view/User.vue")
  },
  {
    path:"/:pathMatch(.*)",
    component:()=>import("@/view/NotFound.vue")
  }
]



const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router