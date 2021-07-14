<template>
  <div class="footer">
    <div class="col-1">
      <a
        :href="publicPath"
      >
        МАРБЛС
      </a>
      <p>
        Новая настольная игра с амбицией переплюнуть Монополию,
        UNO, Экивоки, Имаджинариум
      </p>
    </div>

    <div class="col-2">
      <div
        v-for="(link, i) in links"
        :key="i"
      >
        <a
          :href="`${publicPath}${link.href}#`"
        >
          {{ link.text }}
        </a>
      </div>
    </div>

    <img
      :src="`${assetsPath}img/line.svg`"
      alt="линия"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Link {
  href: string
  text: string
}

export default defineComponent({
  setup () {
    const links: Link[] = [
      {
        href: '',
        text: 'Правила игры'
      },
      {
        href: '',
        text: 'Пользовательское соглашение'
      },
      {
        href: '',
        text: 'Политика конфиденциальности'
      },
      {
        href: '',
        text: 'Заказать игру'
      }
    ]

    return {
      publicPath: process.env.BASE_URL,
      assetsPath: process.env.VUE_APP_ASSETS,
      links
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 479px;
  padding: 0 0 123px 165px;

  img {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.col {
  &-1 {
    padding-top: 70px;

    a {
      font-size: 50px;
      color: $gray;
      text-decoration: none;
      margin-bottom: 10px;

      @include font-bold;
    }

    p {
      color: $gray;
      max-width: 285px;
    }
  }

  &-2 {
    padding-top: 85px;

    div {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    a {
      color: $text-main;
      text-decoration: none;

      &:hover {
        color: $yellow;
      }

      &:active {
        color: rgba($yellow, 0.5);
      }
    }
  }
}
</style>
