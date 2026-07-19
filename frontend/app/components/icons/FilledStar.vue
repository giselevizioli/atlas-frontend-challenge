<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    viewBox="0 -960 960 960"
    :width="width"
    :fill="color"
  >
    <path
      d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z"
    />
  </svg>
</template>

<script lang="ts">
  export default {
    props: {
      width: {
        type: String,
        default: '24'
      },
      height: {
        type: String,
        default: '24'
      },
      color: {
        type: String,
        default: '#22d3eecc'
      }
    }
  };
</script>
