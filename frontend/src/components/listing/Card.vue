<template>
  <div class="p-4 rounded-sm bg-[#0c1426] flex flex-col border border-[#22d3ee2b] relative">
    <div class="firulinha">
      <div class="border-t border-l border-[#00b8db99] size-2 absolute top-px left-px" />
      <div class="border-t border-l border-[#00b8db99] size-2 absolute top-px right-px rotate-90" />
      <div
        class="border-t border-l border-[#00b8db99] size-2 absolute bottom-px left-px rotate-270"
      />
      <div
        class="border-t border-l border-[#00b8db99] size-2 absolute bottom-px right-px rotate-180"
      />
    </div>
    <div class="flex gap-5">
      <div class="size-24 relative">
        <div class="firulinha">
          <div class="bg-[#0c1426] size-4 absolute -top-2.25 -right-2 rotate-45"></div>
          <div class="bg-[#0c1426] size-4 absolute -bottom-2.25 -left-2 rotate-45"></div>
        </div>
        <img
          :src="professional.avatar"
          :alt="`Foto de ${professional.name}`"
          class="size-24 object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="flex flex-col text-white">
        <h2 class="text-lg font-bold font-[Rajdhani] leading-tight tracking-wide uppercase">
          {{ professional.name }}
        </h2>
        <p class="mt-0.5 leading-tight text-[#67E8F9]">{{ professional.profession }}</p>
        <div class="flex items-center gap-1.5 mt-1.5">
          <!-- <span class="size-3">icon empresa</span> -->
          <span class="text-sm font-semibold tracking-wider text-[#64748B] font-[Rajdhani]">{{
            professional.company
          }}</span>
        </div>
        <div class="text-sm flex items-center mt-1.5 text-[#475569] tracking-[-1px]">
          <!-- <span> icon location</span> -->
          <span
            >{{ professional.city }}-{{ professional.state }} <span class="text-cyan-900">|</span>
            {{ professional.age }}y</span
          >
        </div>
      </div>
    </div>
    <hr class="my-4 text-[#0E7490]" />
    <div class="font-sans text-sm text-[#64748B]">
      <p class="leading-relaxed line-clamp-5">{{ professional.description }}</p>
    </div>
    <div
      class="bg-[#22d3ee14] rounded-sm border border-[#22d3ee45] p-3 flex items-center justify-between gap-3 mt-3"
    >
      <div class="flex flex-col gap-1">
        <p class="tracking-widest text-[#22d3ee66] text-xs">PRETENSÃO // MÊS</p>
        <p class="text-white text-[18px] font-bold leading-none tracking-wide font-[Rajdhani]">
          R$ {{ professional.price }}
        </p>
        <p class="text-[#00D3F3] text-xs">RATING: {{ professional.rating }}</p>
      </div>
      <button
        class="cursor-pointer rounded-sm flex items-center gap-2 text-sm text-[#22D3EE] border bg-[#22d3ee14] border-[#22d3ee4d] font-semibold tracking-widest px-4 py-2.5 transition-all duration-200 hover:shadow-[0_0_5px_0px_#29defa]"
      >
        <!-- <span>icon contato</span> -->
        <span>CONTATAR</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { ProfessionalCard } from '@/types/professional'

export default {
  props: {
    professional: {
      type: Object as PropType<ProfessionalCard>,
      required: true,
    },
  },
}
</script>
