<template>
  <div
    class="header"
    :class="{ 'header-black': scrolled }"
  >
    <div class="header-content">
      <a
        class="header-logo"
        :href="publicPath"
      >
        МАРБЛС
      </a>

      <div>
        <a
          class="a"
          href="#questions"
        >
          Задать вопрос
        </a>

        <a
          class="btn"
          href="#order"
        >ЗАКАЗАТЬ</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const scrolled = ref(false)

    function handleScroll (): void {
      scrolled.value = window.scrollY >= 600
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      publicPath: process.env.BASE_URL,
      scrolled
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  // position: absolute;
  top: 0;
  width: 100%;
  background:
    linear-gradient(
      180deg,
      rgba($text-main, 0.5) 29.51%,
      rgba($text-main, 0) 100%
    );
  color: #fff;
  z-index: 2;

  @include transition;

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 165px;

    @include max-width;
  }

  &-black {
    background: $text-main;
  }

  &-white {
    background: #fff;
    color: $text-main;
  }

  &-logo {
    user-select: none;
    color: inherit;
    font-weight: bold;
    font-size: 31px;
    line-height: 37px;
    text-decoration: none;
  }
}

.btn {
  user-select: none;
  color: $text-main;
  text-decoration: none;
  padding: 10px 11px;
  line-height: 18.96px;
  border-radius: 6px;
  margin-left: 40px;

  @include yellow-btn;
}
</style>
