<template>
  <section class="hero-banner">
    <div class="hero-banner__text">
      <CTypo tag="main-title" text="Conheça o Covidômetro" />

      <CTypo tag="text">
        Fique atualizado com velocidade e transparência. O Covidômetro é uma ferramenta que mostra
        para você em tempo real o número de casos e óbitos relacionados à pandemia da COVID-19 ao
        redor do mundo.
      </CTypo>
    </div>

    <img class="hero-banner__image" src="/src/assets/images/doctors.svg" alt="Hero Banner" />
  </section>
</template>

<script>
export default {
  name: 'HeroBanner'
}
</script>

<script setup>
import CTypo from '@/components/CTypo'
</script>

<style lang="scss">
.hero-banner {
  display: flex;
  justify-content: space-between;
  max-height: 325px;
  align-items: center;
  gap: 1rem;
  padding: 24px 0;
  max-width: 1440px;

  @include Tablet {
    padding: 48px 0;
  }

  &__text {
    width: 100%;
    max-width: 590px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @include Desktop {
      width: 50%;
    }
  }

  &__image {
    width: 50%;
    display: none;
    transition: all 0.2s ease-in-out;

    @include Tablet {
      display: block;
      max-width: 480px;
    }

    @include Desktop {
      transform: translateY(40px);
    }
  }
}
</style>
