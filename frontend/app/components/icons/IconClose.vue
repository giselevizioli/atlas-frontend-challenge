<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    viewBox="0 -960 960 960"
    :width="width"
    :fill="color"
  >
    <path
      d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    width: {
      type: String,
      default: '20',
    },
    height: {
      type: String,
      default: '20',
    },
    color: {
      type: String,
      default: '#22d3ee66',
    },
  },
}
</script>
