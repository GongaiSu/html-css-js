import {createRouter,createWebHashHistory} from "vue-router"

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      redirect:"/home"
    },
    {
      name:"home",
      path:"/home",
      component:()=>import("@/view/Home.vue"),
      children:[
        {
          path:"/home",
          redirect:"/home/recommend"
        },
        {
          path:"recommend",
          component:()=>import("../view/HomeRecommend.vue")
        },
        {
          path:"ranking",
          component:()=>import("../view/HomeRanking.vue")
        }
      ]
    },
    {
      path:"/about",
      component:()=>import("@/view/About.vue")
    },
    {
      path:"/order",
      component:()=>import("@/view/Order.vue")
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
})

let Admin = false
if(Admin){
  router.addRoute({
    path:"/admin",
    component:()=>import("../view/Admin.vue")
  }),
  router.addRoute("home",{

  })
}
router.beforeEach((to,from)=>{
  console.log(from)
  console.log(to)
  if(to.path ==="/about"){
    return "/order"
  }
})

export default router