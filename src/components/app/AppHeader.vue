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
      const breakpoint = window.innerWidth < 800 ? 300 : 600
      scrolled.value = window.scrollY > breakpoint
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

    @include media-breakpoint-down(md) {
      padding: 14px 15px;
    }
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

    @include media-breakpoint-down(md) {
      font-size: 22px;
      line-height: 26px;
    }
  }

  .a {
    @include media-breakpoint-down(md) {
      @include p2;
    }
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

  @include media-breakpoint-down(md) {
    padding: 6px 12px;
    font-size: 12px;
    line-height: 14px;
    margin-left: 6px;
  }
}
</style>
