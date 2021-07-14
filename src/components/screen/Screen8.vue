<template>
  <div
    id="questions"
    class="screen"
  >
    <h3>У вас есть вопросы по игре или правилам?</h3>
    <h4>
      Задавайте их нам!
    </h4>

    <div class="bottom">
      <div>
        <a
          class="tg"
          :href="`https://t.me/${tg}`"
          target="_blank"
        >
          <img
            :src="`${assetsPath}img/telegram.svg`"
            alt="telegram"
          >
          <span>@{{ tg }}</span>
        </a>

        <a
          class="email"
          :href="`mailto:${email}`"
        >
          <img
            :src="`${assetsPath}img/email.svg`"
            alt="email"
          >
          <span>{{ email }}</span>
        </a>
      </div>

      <div>
        <p>г. Москва, ул. Мясницкая 13с18, здание с вывеской ФРИИ, Марблс</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      assetsPath: process.env.VUE_APP_ASSETS,
      tg: 'nikolayr',
      email: 'help@marbls.ru'
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  padding: 100px 0 94px 165px;

  h3 {
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 40px;
  }
}

.bottom {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 159px;

  p {
    max-width: 380px;
    color: $text-gray;
  }
}

a {
  border: 1px solid;
  border-radius: 26px;
  border-color: var(--color);
  color: var(--color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  font-size: 20px;
  line-height: 30px;
  user-select: none;

  @include transition;

  &:hover {
    color: $white;
    background: var(--color);
  }

  &:active {
    background: var(--color-dark);
  }

  &:not(:last-child) {
    margin-right: 40px;
  }

  img {
    margin-right: 9px;
  }

  &.tg {
    --color: #40b3e0;
    --color-dark: #3497be;
  }

  &.email {
    --color: #840707;
    --color-dark: #600101;
  }
}
</style>
