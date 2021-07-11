<template>
  <div
    class="screen"
    :style="{ background: `url('${assetsPath}img/pattern.svg')`}"
  >
    <div class="col-1">
      <div
        class="img"
        :style="{ 'background-image': `url('${images[currentImg]}')` }"
      />

      <div class="dots">
        <div
          v-for="i in images.length"
          :key="i"
          class="dot"
          :class="{ 'dot-active': currentImg === i - 1 }"
          @click="currentImg = i - 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const assetsPath = `${process.env.VUE_APP_ROOT}${process.env.BASE_URL}`
    const images = [
      `${assetsPath}img/photo.jpeg`,
      'https://picsum.photos/400/700',
      'https://picsum.photos/500/700',
      'https://picsum.photos/600/700',
      'https://picsum.photos/700/700'
    ]
    const currentImg = ref(0)

    return {
      assetsPath,
      images,
      currentImg
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  padding: 31px 77px 77px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.col {
  &-1 {
    .img {
      height: 701px;
      width: 100%;
      background-size: cover;
      border-radius: 17px;

      @include transition;
    }
  }
}

.dot {
  $size: 15px;

  width: $size;
  height: $size;
  border-radius: 100%;
  background: rgba($lightgray, 30%);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &-active {
    background: $yellow;
  }

  &s {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }
}
</style>
