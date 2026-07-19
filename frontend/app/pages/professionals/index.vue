<template>
  <div>
    <Header :showSearch="true" />
    <div v-if="error" class="px-8 w-full mx-auto max-w-7xl">
      Ocorreu um erro ao carregar os profissionais.
    </div>
    <main v-else class="px-8 w-full mx-auto max-w-7xl">
      <div class="mb-4 w-full flex justify-between md:justify-normal">
        <div
          v-if="pending"
          class="w-28.5 h-10 rounded-sm bg-gray-800 animate-pulse"
        />
        <div v-else class="w-full justify-between flex gap-3">
          <ListingFiltersButton />
          <ListingSortButton />
        </div>
      </div>
      <div class="mb-4 w-full">
        <div
          v-if="pending"
          class="w-56 h-6 rounded-sm bg-gray-800 animate-pulse"
        />
        <p v-else class="uppercase text-cyan/70 tracking-widest">
          Results: {{ pagination?.total }} nodes found
        </p>
      </div>
      <div
        v-if="pending"
        class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ListingCardSkelleton
          v-for="skelleton in 3"
          :key="`skelleton${skelleton}`"
        />
      </div>
      <div v-else class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ListingCard
          v-for="(professional, index) in professionals"
          :key="professional.id"
          :professional="professional"
          :index="index"
        />
      </div>
      <div
        v-if="pagination?.totalPages > 1 && !pending"
        class="w-full flex justify-center my-6"
      >
        <ListingPagination :pagination="pagination" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { useFiltersStore } from '@/stores/filters';
  import professionalsService from '@/services/professionals';

  useSeoMeta({
    title: 'Tech Pros',
    description: 'Encontre profissionais de TI para contratação.'
  });

  const store = useFiltersStore();
  const route = useRoute();

  watch(
    () => route.query,
    () => {
      store.setFilters(route.query);
    },
    {
      immediate: true
    }
  );

  const filters = computed(() => ({
    search: route.query.search?.toString() ?? '',
    professionSlug: route.query.professionSlug?.toString() ?? '',
    citySlug: route.query.citySlug?.toString() ?? '',
    page: Number(route.query.page ?? 1),
    perPage: Number(route.query.perPage ?? 12),
    sort: route.query.sort?.toString() ?? 'rating',
    order: route.query.order?.toString() ?? 'desc'
  }));

  const { data, pending, error } = await useAsyncData(
    'professionals',
    () => {
      return professionalsService.getProfessionals(filters.value);
    },
    {
      watch: [filters]
    }
  );

  watchEffect(() => {
    if (error.value) {
      console.error(error.value);
    }
  });

  const professionals = computed(() => data.value?.data ?? []);
  const pagination = computed(() => data.value?.pagination);

  onMounted(() => {
    console.log('Listing mounted');
  });

  onUnmounted(() => {
    console.log('unmounted');
  });
</script>
