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

export let firstRoute: any = null

export function mapMenusToRoutes(userMenus: any) {
  const localRouter = getLocalRouter()
  const routers: RouteRecordRaw[] = []
  for (const userMenu of userMenus) {
    for (const children of userMenu.children) {
      const router = localRouter.find((item) => item.path === children.url)
      if (router) {
        if (!routers.find((item) => item.path == userMenu.url)) {
          routers.push({ path: userMenu.url, redirect: router.path })
        }
        routers.push(router)
        if (!firstRoute) {
          firstRoute = router
        }
      }
    }
  }
  return routers
}

export function mapPathToMenu(path: string, userMenus: any) {
  for (const userMenu of userMenus) {
    for (const children of userMenu.children) {
      if (children.url === path) {
        return children
      }
    }
  }
}

interface IBreadCrumbs {
  name: string
  path: string
}

export function mapPathToBreadcrumbs(path: string, userMenus: any) {
  const breadCrumbs: IBreadCrumbs[] = []
  for (const userMenu of userMenus) {
    for (const children of userMenu.children) {
      if (children.url === path) {
        breadCrumbs.push({ name: userMenu.name, path: userMenu.url })
        breadCrumbs.push({ name: children.name, path: children.url })
      }
    }
  }
  return breadCrumbs
}
