<template>
  <div>
    <!-- Секция с картинкой -->
    <section class="relative bg-red-600 text-white overflow-hidden rounded-b-3xl lg:rounded-b-4xl rounded-t-3xl lg:rounded-t-4xl mt-4 mx-4">
      <!-- Фоновое изображение -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/img/pizza.jpg" 
          alt="Вкусная пицца" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div class="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div class="max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-8">
            Самая вкусная пицца
            <span class="text-yellow-300">в городе!</span>
          </h1>
          <p class="text-xl mb-12 opacity-90 leading-relaxed">
            Свежие ингредиенты, итальянские рецепты и быстрая доставка. 
            Закажите сейчас и получите скидку 20% на первый заказ!
          </p>
          <div class="flex flex-wrap gap-6">
            <NuxtLink to="/menu" class="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Заказать сейчас
            </NuxtLink>
            <button 
              @click="scrollToFeatures" 
              class="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all transform hover:-translate-y-1"
            >
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Преимущества -->
    <section id="features" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Почему выбирают нас?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:clock-fast" class="text-2xl text-red-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p class="text-gray-600">Доставляем за 30-45 минут в любую точку города</p>
          </div>
          <div class="text-center">
            <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:food" class="text-2xl text-red-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">Свежие ингредиенты</h3>
            <p class="text-gray-600">Используем только свежие и качественные продукты</p>
          </div>
          <div class="text-center">
            <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:chef-hat" class="text-2xl text-red-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">Опытные пиццайоло</h3>
            <p class="text-gray-600">Наши повара готовят по традиционным итальянским рецептам</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'PizzaGrad - Лучшая пицца с доставкой',
  description: 'Закажите свежую пиццу с доставкой за 30-45 минут. Натуральные ингредиенты, итальянские рецепты.'
})

const scrollToFeatures = () => {
  const featuresSection = document.querySelector('#features')
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Дополнительные стили для герой-секции */
.hero-section {
  min-height: 70vh;
  display: flex;
  align-items: center;
}
</style>