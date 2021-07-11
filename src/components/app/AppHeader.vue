<template>
  <div
    class="header"
  >
    <a
      class="header-logo"
      href="/"
    >
      МАРБЛС
    </a>

    <div>
      <a
        class="a"
        href="#"
      >
        Задать вопрос
      </a>

      <button>ЗАКАЗАТЬ</button>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  /*
  setup () {
    const scrolled = ref(false)

    function handleScroll (): void {
      scrolled.value = window.scrollY > 150
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      scrolled
    }
  }
  */
})
</script>

<style lang="scss" scoped>
.header {
  // position: fixed;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 165px;
  background:
    linear-gradient(
      180deg,
      rgba($text-main, 0.5) 29.51%,
      rgba($text-main, 0) 100%
    );
  color: #fff;
  z-index: 1;

  @include max-width;
  @include transition;

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

button {
  background: $yellow;
  border: none;
  padding: 10px 11px;
  line-height: 18.96px;
  border-radius: 6px;
  margin-left: 40px;

  @include font-bold;
  @include transition;

  &:hover {
    filter: drop-shadow(0 3px 26px rgba($yellow, 0.33));
  }

  &:active {
    background: $yellow-dark;
  }
}
</style>
