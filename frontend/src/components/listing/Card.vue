<template>
  <div class="p-4 rounded-sm bg-petroleum-blue flex flex-col border border-cyan/17 relative">
    <div class="firulinha">
      <div class="border-t border-l border-blue/60 size-2 absolute top-px left-px" />
      <div class="border-t border-l border-blue/60 size-2 absolute top-px right-px rotate-90" />
      <div class="border-t border-l border-blue/60 size-2 absolute bottom-px left-px rotate-270" />
      <div class="border-t border-l border-blue/60 size-2 absolute bottom-px right-px rotate-180" />
    </div>
    <div class="flex gap-5">
      <div class="size-24 relative">
        <div class="firulinha">
          <div class="bg-petroleum-blue size-4 absolute -top-2.25 -right-2 rotate-45"></div>
          <div class="bg-petroleum-blue size-4 absolute -bottom-2.25 -left-2 rotate-45"></div>
        </div>
        <img
          :src="professional.avatar"
          :alt="`Foto de ${professional.name}`"
          class="size-24 object-cover bg-bluish-gray"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="flex flex-col text-white">
        <h2 class="text-lg font-bold font-[Rajdhani] leading-tight tracking-wide uppercase">
          {{ professional.name }}
        </h2>
        <p class="mt-0.5 leading-tight text-cyan/80">{{ professional.profession }}</p>
        <div class="flex items-center gap-1.5 mt-1.5">
          <IconCompany />
          <span class="text-sm font-semibold tracking-wider text-gray font-[Rajdhani]">{{
            professional.company
          }}</span>
        </div>
        <div class="text-sm flex gap-1.5 items-center mt-1.5 text-gray tracking-[-1px]">
          <IconLocation />
          <span
            >{{ professional.city }}-{{ professional.state }} <span class="text-cyan-900">|</span>
            {{ professional.age }}y</span
          >
        </div>
      </div>
    </div>
    <hr class="my-4 text-blue/70" />
    <div class="font-sans text-sm text-gray h-22.5">
      <p class="leading-relaxed line-clamp-4">{{ professional.description }}</p>
    </div>
    <div
      class="bg-cyan/7 rounded-sm border border-cyan/27 p-3 flex items-center justify-between gap-3 mt-4"
    >
      <div class="flex flex-col gap-1">
        <p class="tracking-widest text-cyan/40 text-xs">PRETENSÃO // MÊS</p>
        <p class="text-white text-[18px] font-bold leading-none tracking-wide font-[Rajdhani]">
          R$ {{ professional.price }}
        </p>
        <p class="text-cyan/90 text-xs">AVALIAÇÃO: {{ professional.rating }}</p>
      </div>
      <button
        class="cursor-pointer rounded-sm flex items-center gap-2 text-sm text-cyan/90 border bg-cyan/7 border-cyan/30 font-semibold tracking-widest px-4 py-2.5 transition-all duration-200 hover:shadow-[0_0_5px_0px_cyan]"
      >
        <IconContact />
        <span>CONTATAR</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { ProfessionalCard } from '@/types/professional'
import IconCompany from '../icons/IconCompany.vue'
import IconLocation from '../icons/IconLocation.vue'
import IconContact from '../icons/IconContact.vue'

export default {
  props: {
    professional: {
      type: Object as PropType<ProfessionalCard>,
      required: true,
    },
  },

  components: {
    IconCompany,
    IconLocation,
    IconContact,
  },
}
</script>
