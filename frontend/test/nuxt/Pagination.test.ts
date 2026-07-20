import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Pagination from '@/components/listing/Pagination.vue';

describe('Pagination', () => {
  it('renders successfully', () => {
    const wrapper = mount(Pagination, {
      props: {
        pagination: {
          page: 3,
          perPage: 12,
          total: 500,
          totalPages: 42,
          hasNextPage: true,
          hasPreviousPage: true
        }
      }
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('centers the current page when possible', () => {
    const wrapper = mount(Pagination, {
      props: {
        pagination: {
          page: 5,
          perPage: 12,
          total: 500,
          totalPages: 42,
          hasNextPage: true,
          hasPreviousPage: true
        }
      }
    });

    expect(wrapper.vm.visiblePages).toEqual([3, 4, 5, 6, 7]);
  });

  it('shows the first pages when current page is at the beginning', () => {
    const wrapper = mount(Pagination, {
      props: {
        pagination: {
          page: 1,
          perPage: 12,
          total: 500,
          totalPages: 42,
          hasNextPage: true,
          hasPreviousPage: true
        }
      }
    });
    expect(wrapper.vm.visiblePages).toEqual([1, 2, 3, 4, 5]);
  });

  it('shows the last pages when current page is near the end', () => {
    const wrapper = mount(Pagination, {
      props: {
        pagination: {
          page: 42,
          perPage: 12,
          total: 500,
          totalPages: 42,
          hasNextPage: true,
          hasPreviousPage: true
        }
      }
    });
    expect(wrapper.vm.visiblePages).toEqual([38, 39, 40, 41, 42]);
  });

  it('shows all pages when there are fewer than 5 pages', () => {
    const wrapper = mount(Pagination, {
      props: {
        pagination: {
          page: 2,
          perPage: 12,
          total: 48,
          totalPages: 4,
          hasNextPage: true,
          hasPreviousPage: true
        }
      }
    });
    expect(wrapper.vm.visiblePages).toEqual([1, 2, 3, 4]);
  });
});
