<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    viewBox="0 -960 960 960"
    :width="width"
    :fill="color"
  >
    <path
      d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"
    />
  </svg>
</template>

<script lang="ts">
  export default {
    props: {
      width: {
        type: String,
        default: '20'
      },
      height: {
        type: String,
        default: '20'
      },
      color: {
        type: String,
        default: '#fff'
      }
    }
  };
</script>
