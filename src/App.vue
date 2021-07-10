<template>
  <app-header />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/app/AppHeader.vue'

export default defineComponent({
  components: {
    AppHeader
  }
})
</script>

<style lang="scss">
@import './assets/styles';
</style>
