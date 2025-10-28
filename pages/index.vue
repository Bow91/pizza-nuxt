<template>
  <div>
    <section class="relative bg-red-600 text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="/img/pizza.jpg" 
          alt="Вкусная пицца" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="container mx-auto px-4 py-20">
        <div class="max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Самая вкусная пицца
            <span class="text-yellow-300">в городе!</span>
          </h1>
          <p class="text-xl mb-8 opacity-90">
            Свежие ингредиенты, итальянские рецепты и быстрая доставка. 
            Закажите сейчас и получите скидку 20% на первый заказ!
          </p>
          <div class="flex space-x-4">
            <NuxtLink to="/menu" class="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Заказать сейчас
            </NuxtLink>
            <button class="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Посмотреть меню
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
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
</script>