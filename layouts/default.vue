<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <AppHeader />
    
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