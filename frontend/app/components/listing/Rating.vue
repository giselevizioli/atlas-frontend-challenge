<template>
  <div class="flex gap-0.5">
    <div v-for="star in 5" :key="`star-${star}`">
      <IconsFilledStar
        v-if="rating >= star"
        :width="starSize"
        :height="starSize"
      />
      <IconsHalfStar
        v-else-if="rating >= star - 0.5"
        :width="starSize"
        :height="starSize"
      />
      <IconsEmptyStar v-else :width="starSize" :height="starSize" />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      rating: {
        type: Number,
        required: true
      },
      starSize: {
        type: String,
        default: '24'
      }
    }
  };
</script>
