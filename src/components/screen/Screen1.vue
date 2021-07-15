<template>
  <div class="screen">
    <h1>МАРБЛС</h1>
    <h2>Мировой хит настолок сделанный в России</h2>

    <img
      v-for="i in 2"
      :key="i"
      class="part"
      :class="`part-${i}`"
      :src="`${assetsPath}img/part-${i}.png`"
      :alt="`часть ${i}`"
    >
    <img
      class="cards"
      :src="`${assetsPath}img/cards.png`"
      alt="карточки"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    return {
      assetsPath
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  text-align: center;
  padding-top: 46px;
  position: relative;
  min-height: 550px;
}

h2 {
  max-width: 955px;
  margin: 0 auto;
}

.part {
  z-index: -1;
  position: absolute;
  filter: drop-shadow(-1px 10px 42px rgba(#000, 0.15));

  &-1 {
    right: 0;
    bottom: -30px;
  }

  &-2 {
    left: 0;
    top: -150px;
  }
}

.cards {
  position: absolute;
  left: 30px;
  bottom: 70px;
}
</style>
