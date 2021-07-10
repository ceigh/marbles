<template>
  <div class="screen">
    <img
      class="users"
      :src="`${assetsPath}img/users.svg`"
      alt="пользователи"
    >

    <h3>Почему миллионы людей играют в МАРБЛС</h3>

    <img
      v-for="i in 2"
      :key="i"
      class="shape"
      :class="`shape-${i}`"
      :src="`${assetsPath}img/shape-${i}.svg`"
      :alt="`фигура ${i}`"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      assetsPath: `${process.env.VUE_APP_ROOT}${process.env.BASE_URL}`
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  padding-top: 150px;
}

.users,
h3 {
  margin: 0 auto;
}

.users {
  filter: drop-shadow(0 23px 17px rgba($yellow, 0.22));
  margin-bottom: 20px;
}

h3 {
  max-width: 698px;
  text-align: center;
}

.shape {
  position: absolute;
  z-index: -2;

  &-1 {
    top: 0;
  }
}
</style>
