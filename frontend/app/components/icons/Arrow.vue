<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    viewBox="0 -960 960 960"
    :width="width"
    :fill="color"
  >
    <path
      d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
    />
  </svg>
</template>

<script lang="ts">
  export default {
    props: {
      width: {
        type: String,
        default: '30'
      },
      height: {
        type: String,
        default: '30'
      },
      color: {
        type: String,
        default: '#22d3ee'
      }
    }
  };
</script>
