import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '@/components/listing/Card.vue';

describe('Card', () => {
  it('renders successfully and displays all information in the card', () => {
    const wrapper = mount(Card, {
      props: {
        professional: {
          id: 386,
          name: 'Nickolas Satterfield',
          profession: 'Analista de Infraestrutura',
          professionSlug: 'infrastructure-analyst',
          avatar: '/avatars/4.webp',
          price: 3000,
          phone: '(489) 440-4142 x5106',
          email: 'Mike_Maggio@gmail.com',
          city: 'Brasília',
          citySlug: 'brasilia',
          state: 'DF',
          description: 'Teste',
          rating: 5,
          age: 49,
          company: 'Compass UOL'
        }
      }
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Nickolas Satterfield');
    expect(wrapper.text()).toContain('Analista de Infraestrutura');
    expect(wrapper.text()).toContain('Brasília-DF');
    expect(wrapper.text()).toContain('49y');
    expect(wrapper.text()).toContain('R$3000');
  });

  it('priorizes the loading of the image if the card is the first on the listing', () => {
    const wrapper = mount(Card, {
      props: {
        professional: {
          id: 386,
          name: 'Nickolas Satterfield',
          profession: 'Analista de Infraestrutura',
          professionSlug: 'infrastructure-analyst',
          avatar: '/avatars/4.webp',
          price: 3000,
          phone: '(489) 440-4142 x5106',
          email: 'Mike_Maggio@gmail.com',
          city: 'Brasília',
          citySlug: 'brasilia',
          state: 'DF',
          description: 'Teste',
          rating: 5,
          age: 49,
          company: 'Compass UOL'
        },
        index: 0
      }
    });

    const img = wrapper.find('img');

    expect(img.attributes('loading')).toBe('eager');
    expect(img.attributes('fetchpriority')).toBe('high');
  });

  it('lazy loades the image if the card is not the first on the listing', () => {
    const wrapper = mount(Card, {
      props: {
        professional: {
          id: 386,
          name: 'Nickolas Satterfield',
          profession: 'Analista de Infraestrutura',
          professionSlug: 'infrastructure-analyst',
          avatar: '/avatars/4.webp',
          price: 3000,
          phone: '(489) 440-4142 x5106',
          email: 'Mike_Maggio@gmail.com',
          city: 'Brasília',
          citySlug: 'brasilia',
          state: 'DF',
          description: 'Teste',
          rating: 5,
          age: 49,
          company: 'Compass UOL'
        },
        index: 5
      }
    });

    const img = wrapper.find('img');

    expect(img.attributes('loading')).toBe('lazy');
    expect(img.attributes('fetchpriority')).toBe('low');
  });
});
