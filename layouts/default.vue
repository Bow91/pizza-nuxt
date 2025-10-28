<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <header class="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-2">
            <Icon name="mdi:pizza" class="text-3xl text-red-500" />
            <span class="text-2xl font-bold">PizzaGrad</span>
          </div>

          <nav class="hidden lg:flex items-center space-x-8 flex-1 justify-end mr-8">
            <NuxtLink 
              to="/" 
              class="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Главная
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </NuxtLink>
            <NuxtLink 
              to="/menu" 
              class="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Меню
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              О нас
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Контакты
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </NuxtLink>
          </nav>

          <!-- Корзина и контакты -->
          <div class="flex items-center space-x-4">
            <!-- Контактная информация для десктопа -->
            <div class="hidden lg:block text-right mr-4">
              <div class="text-sm font-semibold">+7 (999) 123-45-67</div>
              <div class="text-xs text-gray-400">Доставка 30-45 мин</div>
            </div>
            
            <!-- Корзина -->
            <button class="relative p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Icon name="mdi:cart" class="text-2xl" />
              <span class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>

            <!-- Кнопка меню для мобильных -->
            <button 
              @click="toggleMobileMenu"
              class="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Icon 
                :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" 
                class="text-2xl" 
              />
            </button>
          </div>
        </div>

        <!-- Мобильное меню -->
        <div 
          v-if="isMobileMenuOpen"
          class="lg:hidden bg-gray-800 border-t border-gray-700"
        >
          <nav class="flex flex-col space-y-4 py-4">
            <NuxtLink 
              to="/" 
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white transition-colors font-medium py-2 px-4 hover:bg-gray-700 rounded-lg"
            >
              Главная
            </NuxtLink>
            <NuxtLink 
              to="/menu" 
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white transition-colors font-medium py-2 px-4 hover:bg-gray-700 rounded-lg"
            >
              Меню
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white transition-colors font-medium py-2 px-4 hover:bg-gray-700 rounded-lg"
            >
              О нас
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white transition-colors font-medium py-2 px-4 hover:bg-gray-700 rounded-lg"
            >
              Контакты
            </NuxtLink>
            
            <!-- Контакты в мобильном меню -->
            <div class="pt-4 border-t border-gray-700 mt-4">
              <div class="text-sm font-semibold text-center mb-1">+7 (999) 123-45-67</div>
              <div class="text-xs text-gray-400 text-center">Доставка 30-45 мин</div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    
    <main class="flex-1">
      <slot />
    </main>
    
    <footer class="bg-gray-900 text-white mt-auto">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-2 mb-4 md:mb-0">
            <Icon name="mdi:pizza" class="text-2xl text-red-500" />
            <span class="text-xl font-bold">PizzaGrad</span>
          </div>
          
          <nav class="flex space-x-6 mb-4 md:mb-0">
            <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors text-sm">
              Главная
            </NuxtLink>
            <NuxtLink to="/menu" class="text-gray-400 hover:text-white transition-colors text-sm">
              Меню
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors text-sm">
              О нас
            </NuxtLink>
            <NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors text-sm">
              Контакты
            </NuxtLink>
          </nav>
          
          <div class="text-center md:text-right">
            <div class="text-sm text-gray-400 mb-1">+7 (999) 123-45-67</div>
            <div class="text-xs text-gray-500">© 2025 PizzaGrad. Все права защищены.</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Состояние мобильного меню
const isMobileMenuOpen = ref(false)

// Функции для управления мобильным меню
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Закрытие мобильного меню
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Изменение размера
const onResize = () => {
  if (window.innerWidth >= 1024) {
    closeMobileMenu()
  }
}

// Слушатель изменения размера окна
onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
/* Стиль для активной ссылки */
.router-link-active {
  @apply text-white;
}

.router-link-active .group span {
  @apply w-full;
}
</style>