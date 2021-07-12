<template>
  <div class="screen">
    <div class="col-1">
      <form
        :style="`--bg: url('${assetsPath}img/noise.png')`"
        @submit.prevent="onSubmit"
      >
        <h4>
          Скоро мы запустим игру в онлайне, чтобы вы смогли играть
          и доигрывать начатые в оффлайне партии
        </h4>

        <p class="subtext">
          Подпишитесь, чтобы узнать об этом:
        </p>

        <app-input
          v-model="email"
          placeholder="Ваш Email"
          type="email"
          required
        />

        <button type="submit">
          Подписаться
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppInput from '../app/AppInput.vue'

export default defineComponent({
  components: { AppInput },

  setup () {
    const assetsPath = `${process.env.VUE_APP_ROOT}${process.env.BASE_URL}`
    const email = ref('')

    function onSubmit (): void {
      console.log(email.value)
    }

    return {
      assetsPath,
      email,

      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  background: linear-gradient(149.32deg, $yellow 31.34%, #fada08 87.62%);
  padding: 103px 0 137px 117px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

form {
  border-radius: 35px;
  max-width: 484px;
  padding: 82px 33px 80px 43px;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    border-radius: inherit;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    opacity: 0.3;
    z-index: -1;
    background: var(--bg);
  }

  &::after {
    background: #fff;
    z-index: -2;
    filter: drop-shadow(0 12px 47px rgba(#000, 0.13));
  }

  h4 {
    margin-bottom: 10px;
    max-width: 407px;
  }

  .subtext {
    margin-bottom: 32px;
  }

  button {
    margin-top: 10px;
    height: 75px;
    width: 349px;
    padding: 20px 120px;
    background: $blue;
    border: none;
    color: $white;
    border-radius: 11px;

    @include font-bold;
    @include transition;

    &:hover {
      box-shadow: 0 3px 26px rgba($blue, 0.33);
    }

    &:active {
      background: #003a75;
    }
  }
}
</style>
