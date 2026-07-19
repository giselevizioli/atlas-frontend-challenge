<template>
  <div>
    <Header :showSearch="false" />
    <main class="p-8 w-full mx-auto max-w-7xl min-h-screen">
      <div v-if="professional">
        <div
          class="flex flex-col items-center md:items-start md:flex-row gap-6"
        >
          <div class="relative size-50">
            <div class="firulinha">
              <div
                class="bg-dark-blue size-4 absolute -top-2.25 -right-2 rotate-45"
              ></div>
              <div
                class="bg-dark-blue size-4 absolute -bottom-2.25 -left-2 rotate-45"
              ></div>
            </div>
            <NuxtImg
              :src="professional.avatar"
              loading="eager"
              fetchpriority="high"
              width="200"
              height="200"
              :alt="`Foto de ${professional.name}`"
              class="object-cover bg-bluish-gray"
            />
          </div>
          <div
            class="flex flex-col text-white gap-1 self-baseline md:self-auto"
          >
            <div class="flex flex-col md:flex-row imd:tems-center gap-1.5">
              <h1
                class="text-xl font-bold leading-tight tracking-wide uppercase"
              >
                {{ professional.name }}
              </h1>
              <ListingRating :rating="professional.rating" />
            </div>
            <p class="text-lg leading-tight text-cyan/80">
              {{ professional.profession }}
            </p>
            <div class="flex items-center gap-1.5">
              <IconsCompany />
              <span class="font-semibold tracking-wider">
                {{ professional.company }}
              </span>
            </div>
            <div class="flex gap-1.5 items-center">
              <IconsLocation />
              <span>
                {{ professional.city }}-{{ professional.state }}
                <span class="text-cyan-900">|</span>
                {{ professional.age }}y
              </span>
            </div>
            <div class="flex gap-1.5 items-center">
              <IconsPhone />
              <span>
                {{ professional.phone }}
              </span>
            </div>
            <div class="flex gap-1.5 items-center">
              <IconsMail />
              <span>
                {{ professional.email }}
              </span>
            </div>
            <div class="flex items-center gap-1">
              <IconsMoney />
              <span>R${{ professional.price }}</span>
            </div>
          </div>
        </div>
        <div
          class="bg-cyan/7 rounded-sm border border-cyan/27 p-3 mt-6 text-cyan/90"
        >
          <p>{{ professional.description }}</p>
        </div>
      </div>
      <div v-else class="w-full h-full flex justify-center items-center">
        <p class="text-cyan/90 text-2xl md:text-3xl">
          Ops, candidato não encontrado ¯\_(ツ)_/¯
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  import professionalsService from '@/services/professionals';

  const { data: professional } = await useAsyncData(
    `professional-${route.params.id}`,
    () => professionalsService.getProfessional(route.params.id)
  );

  useSeoMeta({
    title: () =>
      professional.value
        ? `${professional.value.name} | ${professional.value.profession} | Tech Pros`
        : 'Perfil do profissional | Tech Pros',

    description: () =>
      professional.value
        ? `Conheça o perfil de ${professional.value.name}, ${professional.value.profession}, confira sua experiência, avaliação e valor do serviço.`
        : 'Conheça o perfil completo do profissional.'
  });
</script>
