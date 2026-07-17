import router from '@/router'
import type { Router, RouteLocationNormalizedLoaded } from 'vue-router'

export interface UpdateQueryOptions {
  resetPage?: boolean
}

export function updateRouteQuery(params, options = {}) {
  const route = router.currentRoute.value

  const query = {
    ...route.query,
    ...params,
  }

  Object.keys(query).forEach((key) => {
    const value = query[key]

    if (
      value === '' ||
      value === null ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0)
    ) {
      delete query[key]
    }
  })

  if (options.resetPage) {
    query.page = '1'
  }

  router.push({ query })
}
