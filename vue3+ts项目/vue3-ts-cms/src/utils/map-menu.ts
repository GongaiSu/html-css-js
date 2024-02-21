import type { RouteRecordRaw } from 'vue-router'

function getLocalRouter() {
  const localRouter: RouteRecordRaw[] = []
  const allrouters: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true
  })
  for (const key in allrouters) {
    localRouter.push(allrouters[key].default)
  }
  return localRouter
}

export function mapMenusToRoutes(userMenus: any) {
  const localRouter = getLocalRouter()
  const routers: RouteRecordRaw[] = []
  for (const userMenu of userMenus) {
    for (const children of userMenu.children) {
      const router = localRouter.find((item) => item.path === children.url)
      if (router) {
        routers.push(router)
      }
    }
  }
  return routers
}
