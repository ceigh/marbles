<template>
  <app-header />

  <img
    class="photo"
    :src="`${assetsPath}img/photo.jpeg`"
    alt="фото"
  >

  <screen-1 />
  <screen-2 />
  <screen-3 />
  <screen-4 />
  <screen-5 />
  <screen-6 />
  <screen-7 />

  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/app/AppHeader.vue'
import Screen1 from './components/screen/Screen1.vue'
import Screen2 from './components/screen/Screen2.vue'
import Screen3 from './components/screen/Screen3.vue'
import Screen4 from './components/screen/Screen4.vue'
import Screen5 from './components/screen/Screen5.vue'
import Screen6 from './components/screen/Screen6.vue'
import Screen7 from './components/screen/Screen7.vue'
import AppFooter from './components/app/AppFooter.vue'

export default defineComponent({
  components: {
    AppHeader,
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
    Screen6,
    Screen7,
    AppFooter
  },

  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    return {
      assetsPath
    }
  }
})
</script>

<style lang="scss">
@import './assets/styles';
</style>

<style lang="scss" scoped>
.photo {
  width: 100%;
  max-height: 546px;
  object-fit: cover;
}
</style>
