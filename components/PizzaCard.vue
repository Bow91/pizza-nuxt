<script setup lang="ts">
import { useCartActions } from '~/composables/useCart';
import type { Pizza } from '~/types/pizza'

interface Props {
  pizza: Pizza
}

const props = defineProps<Props>()
const isAdding = ref(false)
const { addToCart } = useCartActions()

const onAddCartBtn = async () => {
  isAdding.value = true
  
  try {
    await addToCart(props.pizza)
    console.log('Добавлено в корзину:', props.pizza.name)
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error)
  } finally {
    setTimeout(() => {
      isAdding.value = false
    }, 500)
  }
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div class="relative h-48 bg-gray-200 overflow-hidden">
      <img 
        :src="pizza.image" 
        :alt="pizza.name"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div v-if="pizza.isPopular" class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
        Хит
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ pizza.name }}</h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{{ pizza.description }}</p>
      
      <div class="flex justify-between items-center mb-4">
        <div class="text-2xl font-bold text-red-600">{{ pizza.price }} ₽</div>
        <div class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">30 см</div>
      </div>
      
      <button 
        @click="onAddCartBtn"
        :disabled="isAdding"
        class="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <span v-if="!isAdding">В корзину</span>
        <span v-else class="flex items-center gap-2">
          <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Добавляем...
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>