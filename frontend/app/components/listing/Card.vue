<template>
  <NuxtLink
    :to="`/professionals/${professional.id}`"
    class="p-4 rounded-sm bg-petroleum-blue flex flex-col border border-cyan/17 relative"
  >
    <div class="firulinha">
      <div
        class="border-t border-l border-blue/60 size-2 absolute top-px left-px"
      />
      <div
        class="border-t border-l border-blue/60 size-2 absolute top-px right-px rotate-90"
      />
      <div
        class="border-t border-l border-blue/60 size-2 absolute bottom-px left-px rotate-270"
      />
      <div
        class="border-t border-l border-blue/60 size-2 absolute bottom-px right-px rotate-180"
      />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <div class="size-24 min-h-24 min-w-24 relative">
          <div class="firulinha">
            <div
              class="bg-petroleum-blue size-4 absolute -top-2.25 -right-2 rotate-45"
            ></div>
            <div
              class="bg-petroleum-blue size-4 absolute -bottom-2.25 -left-2 rotate-45"
            ></div>
          </div>
          <NuxtImg
            :src="professional.avatar"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'low'"
            width="120"
            height="120"
            :alt="`Foto de ${professional.name}`"
            class="size-24 object-cover bg-bluish-gray"
          />
        </div>
        <div>
          <h2
            class="text-white text-lg font-bold leading-tight tracking-wide uppercase"
          >
            {{ professional.name }}
          </h2>
          <p class="mt-0.5 leading-tight text-cyan/80">
            {{ professional.profession }}
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center gap-1.5">
          <IconsCompany />
          <span class="text-sm font-semibold tracking-wider text-gray">
            {{ professional.company }}
          </span>
        </div>
        <div
          class="text-sm flex gap-1.5 items-center mt-1.5 text-gray tracking-[-1px]"
        >
          <IconsLocation />
          <span>
            {{ professional.city }}-{{ professional.state }}
            <span class="text-cyan-900">|</span>
            {{ professional.age }}y
          </span>
        </div>
        <div
          class="flex gap-1.5 items-center text-gray mt-1.5 tracking-[-1px] text-sm"
        >
          <IconsPhone />
          <span>
            {{ professional.phone }}
          </span>
        </div>
        <div
          class="flex gap-1.5 items-center text-gray mt-1.5 tracking-[-1px] text-sm"
        >
          <IconsMail />
          <span>
            {{ professional.email }}
          </span>
        </div>
      </div>
    </div>
    <hr class="my-4 text-blue/70" />
    <div class="flex flex-col justify-between h-full">
      <div class="font-sans text-sm text-gray h-17">
        <p class="leading-relaxed line-clamp-3">
          {{ professional.description }}
        </p>
      </div>
      <div
        class="bg-cyan/7 rounded-sm border border-cyan/27 p-3 flex items-center justify-between gap-3 mt-4"
      >
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-1">
            <IconsMoney />
            <span
              class="text-white text-lg font-bold leading-none tracking-wide"
            >
              R${{ professional.price }}
            </span>
          </div>
          <div class="text-cyan/90 text-xs">
            <ListingRating :rating="professional.rating" starSize="20" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
  import type { PropType } from 'vue';
  import type { ProfessionalCard } from '@/types/professional';

  export default {
    props: {
      professional: {
        type: Object as PropType<ProfessionalCard>,
        required: true
      },
      index: {
        type: Number,
        default: 1
      }
    },

    methods: {}
  };
</script>
