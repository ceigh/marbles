<template>
  <div class="screen">
    <img
      class="users"
      :src="`${assetsPath}img/users.svg`"
      alt="пользователи"
      loading="lazy"
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

    <div class="cards">
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="card"
      >
        <img
          v-lazy="card.img"
          alt="карточка"
        >
        <div class="card-meta">
          <h4>{{ card.title }}</h4>
          <p>{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Card {
  img: string
  title: string
  desc: string
}

export default defineComponent({
  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    const cards: Card[] = [
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/amethyst-shere-xxl.mov-low_2048x.gif',
        title: 'В игре более 1 трлн возможных исходов',
        desc: `Вы никогда не будете играть в одну и ту же игру,
вам никогда не надоест, обещаем!`
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/black-obsidian-sphere-xxl.mov-low_2048x.gif',
        title: 'Очень крутые тактильные ощущения',
        desc: 'В игре используются деревянные доски и стеклянные шарики марблсы'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet-image_4_68320e8f-bf73-4701-a0a0-1fefb87a45d0_2048x.gif',
        title: 'Объединяйтесь в команды и пары',
        desc: 'Собирайтесь командой до 6 людей и играйте в свое удовольствие'
      }
    ]

    return {
      assetsPath,
      cards
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  padding-top: 55px;
  margin-bottom: 200px;
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
  margin-bottom: 60px;
}

.shape {
  position: absolute;
  z-index: -2;
  width: 100%;

  &-1 {
    top: -95px;
  }
}

.card {
  $corner: 10px;

  background: $white;
  box-shadow: 0 0 17px rgba(176, 176, 176, 0.2);
  border-radius: $corner;
  width: 287px;

  &:not(:last-child) {
    margin-right: 25px;
  }

  img {
    width: 100%;
    height: 186px;
    object-fit: cover;
    border-top-left-radius: $corner;
    border-top-right-radius: $corner;
  }

  p {
    margin-top: 8px;
    color: $text-gray;
  }

  &s {
    display: flex;
    justify-content: center;
  }

  &-meta {
    padding: 15px;
  }
}
</style>
