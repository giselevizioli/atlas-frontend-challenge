import type { ProfessionalsFilters } from '@/types';
import type { LocationQueryRaw } from 'vue-router';

export interface UpdateQueryOptions {
  resetPage?: boolean;
}

export function updateRouteQuery(
  params: ProfessionalsFilters,
  options: UpdateQueryOptions = {}
) {
  const router = useRouter();
  const route = useRoute();

  const query: LocationQueryRaw = {
    ...route.query,
    ...params
  };

  (Object.keys(query) as Array<keyof typeof query>).forEach((key) => {
    const value = query[key];

    if (
      value === '' ||
      value === null ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0)
    ) {
      delete query[key];
    }
  });

  if (options.resetPage) {
    query.page = '1';
  }

  router.push({ query });
}
