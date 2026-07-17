<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    viewBox="0 -960 960 960"
    :width="width"
    :fill="color"
  >
    <path
      d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"
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
      default: '#fff',
    },
  },
}
</script>
