
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const Header: typeof import("../app/components/header/Header.vue")['default']
export const HeaderSearch: typeof import("../app/components/header/Search.vue")['default']
export const IconsIconClose: typeof import("../app/components/icons/IconClose.vue")['default']
export const IconsIconCommunity: typeof import("../app/components/icons/IconCommunity.vue")['default']
export const IconsIconCompany: typeof import("../app/components/icons/IconCompany.vue")['default']
export const IconsIconContact: typeof import("../app/components/icons/IconContact.vue")['default']
export const IconsIconDocumentation: typeof import("../app/components/icons/IconDocumentation.vue")['default']
export const IconsIconEcosystem: typeof import("../app/components/icons/IconEcosystem.vue")['default']
export const IconsIconFilters: typeof import("../app/components/icons/IconFilters.vue")['default']
export const IconsIconLocation: typeof import("../app/components/icons/IconLocation.vue")['default']
export const IconsIconSearch: typeof import("../app/components/icons/IconSearch.vue")['default']
export const IconsIconSupport: typeof import("../app/components/icons/IconSupport.vue")['default']
export const IconsIconTooling: typeof import("../app/components/icons/IconTooling.vue")['default']
export const ListingCard: typeof import("../app/components/listing/Card.vue")['default']
export const ListingCardSkelleton: typeof import("../app/components/listing/CardSkelleton.vue")['default']
export const ListingFiltersButton: typeof import("../app/components/listing/FiltersButton.vue")['default']
export const ListingFiltersModal: typeof import("../app/components/listing/FiltersModal.vue")['default']
export const ListingPagination: typeof import("../app/components/listing/Pagination.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyHeader: LazyComponent<typeof import("../app/components/header/Header.vue")['default']>
export const LazyHeaderSearch: LazyComponent<typeof import("../app/components/header/Search.vue")['default']>
export const LazyIconsIconClose: LazyComponent<typeof import("../app/components/icons/IconClose.vue")['default']>
export const LazyIconsIconCommunity: LazyComponent<typeof import("../app/components/icons/IconCommunity.vue")['default']>
export const LazyIconsIconCompany: LazyComponent<typeof import("../app/components/icons/IconCompany.vue")['default']>
export const LazyIconsIconContact: LazyComponent<typeof import("../app/components/icons/IconContact.vue")['default']>
export const LazyIconsIconDocumentation: LazyComponent<typeof import("../app/components/icons/IconDocumentation.vue")['default']>
export const LazyIconsIconEcosystem: LazyComponent<typeof import("../app/components/icons/IconEcosystem.vue")['default']>
export const LazyIconsIconFilters: LazyComponent<typeof import("../app/components/icons/IconFilters.vue")['default']>
export const LazyIconsIconLocation: LazyComponent<typeof import("../app/components/icons/IconLocation.vue")['default']>
export const LazyIconsIconSearch: LazyComponent<typeof import("../app/components/icons/IconSearch.vue")['default']>
export const LazyIconsIconSupport: LazyComponent<typeof import("../app/components/icons/IconSupport.vue")['default']>
export const LazyIconsIconTooling: LazyComponent<typeof import("../app/components/icons/IconTooling.vue")['default']>
export const LazyListingCard: LazyComponent<typeof import("../app/components/listing/Card.vue")['default']>
export const LazyListingCardSkelleton: LazyComponent<typeof import("../app/components/listing/CardSkelleton.vue")['default']>
export const LazyListingFiltersButton: LazyComponent<typeof import("../app/components/listing/FiltersButton.vue")['default']>
export const LazyListingFiltersModal: LazyComponent<typeof import("../app/components/listing/FiltersModal.vue")['default']>
export const LazyListingPagination: LazyComponent<typeof import("../app/components/listing/Pagination.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
