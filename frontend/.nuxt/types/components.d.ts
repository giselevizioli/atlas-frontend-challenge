
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

interface _GlobalComponents {
  Header: typeof import("../../app/components/header/Header.vue")['default']
  HeaderSearch: typeof import("../../app/components/header/Search.vue")['default']
  IconsIconClose: typeof import("../../app/components/icons/IconClose.vue")['default']
  IconsIconCommunity: typeof import("../../app/components/icons/IconCommunity.vue")['default']
  IconsIconCompany: typeof import("../../app/components/icons/IconCompany.vue")['default']
  IconsIconContact: typeof import("../../app/components/icons/IconContact.vue")['default']
  IconsIconDocumentation: typeof import("../../app/components/icons/IconDocumentation.vue")['default']
  IconsIconEcosystem: typeof import("../../app/components/icons/IconEcosystem.vue")['default']
  IconsIconFilters: typeof import("../../app/components/icons/IconFilters.vue")['default']
  IconsIconLocation: typeof import("../../app/components/icons/IconLocation.vue")['default']
  IconsIconSearch: typeof import("../../app/components/icons/IconSearch.vue")['default']
  IconsIconSupport: typeof import("../../app/components/icons/IconSupport.vue")['default']
  IconsIconTooling: typeof import("../../app/components/icons/IconTooling.vue")['default']
  ListingCard: typeof import("../../app/components/listing/Card.vue")['default']
  ListingCardSkelleton: typeof import("../../app/components/listing/CardSkelleton.vue")['default']
  ListingFiltersButton: typeof import("../../app/components/listing/FiltersButton.vue")['default']
  ListingFiltersModal: typeof import("../../app/components/listing/FiltersModal.vue")['default']
  ListingPagination: typeof import("../../app/components/listing/Pagination.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyHeader: LazyComponent<typeof import("../../app/components/header/Header.vue")['default']>
  LazyHeaderSearch: LazyComponent<typeof import("../../app/components/header/Search.vue")['default']>
  LazyIconsIconClose: LazyComponent<typeof import("../../app/components/icons/IconClose.vue")['default']>
  LazyIconsIconCommunity: LazyComponent<typeof import("../../app/components/icons/IconCommunity.vue")['default']>
  LazyIconsIconCompany: LazyComponent<typeof import("../../app/components/icons/IconCompany.vue")['default']>
  LazyIconsIconContact: LazyComponent<typeof import("../../app/components/icons/IconContact.vue")['default']>
  LazyIconsIconDocumentation: LazyComponent<typeof import("../../app/components/icons/IconDocumentation.vue")['default']>
  LazyIconsIconEcosystem: LazyComponent<typeof import("../../app/components/icons/IconEcosystem.vue")['default']>
  LazyIconsIconFilters: LazyComponent<typeof import("../../app/components/icons/IconFilters.vue")['default']>
  LazyIconsIconLocation: LazyComponent<typeof import("../../app/components/icons/IconLocation.vue")['default']>
  LazyIconsIconSearch: LazyComponent<typeof import("../../app/components/icons/IconSearch.vue")['default']>
  LazyIconsIconSupport: LazyComponent<typeof import("../../app/components/icons/IconSupport.vue")['default']>
  LazyIconsIconTooling: LazyComponent<typeof import("../../app/components/icons/IconTooling.vue")['default']>
  LazyListingCard: LazyComponent<typeof import("../../app/components/listing/Card.vue")['default']>
  LazyListingCardSkelleton: LazyComponent<typeof import("../../app/components/listing/CardSkelleton.vue")['default']>
  LazyListingFiltersButton: LazyComponent<typeof import("../../app/components/listing/FiltersButton.vue")['default']>
  LazyListingFiltersModal: LazyComponent<typeof import("../../app/components/listing/FiltersModal.vue")['default']>
  LazyListingPagination: LazyComponent<typeof import("../../app/components/listing/Pagination.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
