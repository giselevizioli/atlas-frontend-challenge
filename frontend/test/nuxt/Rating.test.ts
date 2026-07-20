import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Rating from '@/components/listing/Rating.vue';

describe('Rating', () => {
  it('renders successfully', () => {
    const wrapper = mount(Rating, {
      props: {
        rating: 3
      }
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('renders 3 filled stars and 2 empty stars', () => {
    const wrapper = mount(Rating, {
      props: {
        rating: 3
      }
    });

    expect(wrapper.findAllComponents({ name: 'IconsFilledStar' })).toHaveLength(
      3
    );
    expect(wrapper.findAllComponents({ name: 'IconsHalfStar' })).toHaveLength(
      0
    );
    expect(wrapper.findAllComponents({ name: 'IconsEmptyStar' })).toHaveLength(
      2
    );
  });

  it('renders 2 filled stars, 1 half filled star and 2 empty stars', () => {
    const wrapper = mount(Rating, {
      props: {
        rating: 2.5
      }
    });

    expect(wrapper.findAllComponents({ name: 'IconsFilledStar' })).toHaveLength(
      2
    );
    expect(wrapper.findAllComponents({ name: 'IconsHalfStar' })).toHaveLength(
      1
    );
    expect(wrapper.findAllComponents({ name: 'IconsEmptyStar' })).toHaveLength(
      2
    );
  });

  it('renders only 5 filled stars when receiving 6 as prop', () => {
    const wrapper = mount(Rating, {
      props: {
        rating: 6
      }
    });

    expect(wrapper.findAllComponents({ name: 'IconsFilledStar' })).toHaveLength(
      5
    );
    expect(wrapper.findAllComponents({ name: 'IconsHalfStar' })).toHaveLength(
      0
    );
    expect(wrapper.findAllComponents({ name: 'IconsEmptyStar' })).toHaveLength(
      0
    );
  });

  it('renders only 5 empty stars when rating is 0', () => {
    const wrapper = mount(Rating, {
      props: {
        rating: 0
      }
    });

    expect(wrapper.findAllComponents({ name: 'IconsFilledStar' })).toHaveLength(
      0
    );
    expect(wrapper.findAllComponents({ name: 'IconsHalfStar' })).toHaveLength(
      0
    );
    expect(wrapper.findAllComponents({ name: 'IconsEmptyStar' })).toHaveLength(
      5
    );
  });
});
