<script setup lang="ts">
import type { Pizza, Category } from '~/types/pizza'

useSeoMeta({
    title: 'Меню - PizzaGrad',
    description: 'Выберите свою любимую пиццу из нашего разнообразного меню. Классические, острые, вегетарианские и премиум пиццы.'
})

const activeCategory = ref('all')

const categories: Category[] = [
    { id: 'all', name: 'Все' },
    { id: 'classic', name: 'Классические' },
    { id: 'spicy', name: 'Острые' },
    { id: 'vegetarian', name: 'Вегетарианские' },
    { id: 'premium', name: 'Премиум' }
]

const pizzas: Pizza[] = [
    {
        id: 1,
        name: 'Маргарита',
        description: 'Томатный соус, моцарелла, свежий базилик',
        price: 450,
        image: '/img/pizzas/margarita.jpg',
        category: 'classic',
        isPopular: true
    },
    {
        id: 2,
        name: 'Пепперони',
        description: 'Томатный соус, моцарелла, пепперони',
        price: 550,
        image: '/img/pizzas/pepperoni.jpg',
        category: 'classic',
        isPopular: true
    },
    {
        id: 3,
        name: 'Четыре сыра',
        description: 'Моцарелла, горгонзола, пармезан, рикотта',
        price: 600,
        image: '/img/pizzas/4cheese.jpg',
        category: 'premium',
        isPopular: true
    },
    {
        id: 4,
        name: 'Гавайская',
        description: 'Томатный соус, моцарелла, ветчина, ананасы',
        price: 580,
        image: '/img/pizzas/hawaiian.jpg',
        category: 'classic',
        isPopular: true
    },
    {
        id: 5,
        name: 'Мексиканская',
        description: 'Острый соус, моцарелла, чили, перец, фасоль',
        price: 620,
        image: '/img/pizzas/mexican.jpg',
        category: 'spicy'
    },
    {
        id: 6,
        name: 'Вегетарианская',
        description: 'Томатный соус, моцарелла, перец, грибы, оливки, кукуруза',
        price: 520,
        image: '/img/pizzas/vegetarian.jpg',
        category: 'vegetarian'
    },
    {
        id: 7,
        name: 'Карбонара',
        description: 'Сливочный соус, моцарелла, бекон, яйцо, пармезан',
        price: 650,
        image: '/img/pizzas/carbonara.jpg',
        category: 'premium'
    },
    {
        id: 8,
        name: 'Диабло',
        description: 'Острый томатный соус, моцарелла, салями, перец чили',
        price: 590,
        image: '/img/pizzas/diablo.jpg',
        category: 'spicy'
    }
]

const filteredPizzas = computed(() => {
    return activeCategory.value === 'all' ? pizzas : pizzas.filter( pizza => pizza.category === activeCategory.value )
})

const setActiveCategory = (categoryId: string) => {
    activeCategory.value = categoryId
}
</script>

<template>
    <div class="menu-page">
        <!-- Шапка меню -->
        <section class="bg-gray-900 text-white py-16">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Наше меню</h1>
                <p class="text-xl opacity-90 max-w-2xl mx-auto">
                    Выберите свою любимую пиццу из нашего разнообразного меню. 
                    Все пиццы готовятся из свежих ингредиентов.
                </p>
            </div>
        </section>

        <!-- Фильтры по категориям -->
        <section class="bg-white border-b border-gray-200 sticky top-16 z-40">
            <div class="container mx-auto px-4">
                <div class="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
                    <button
                        v-for="category in categories"
                        :key="category.id"
                        @click="setActiveCategory(category.id)"
                        :class="[
                        'px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-200',
                        activeCategory === category.id 
                            ? 'bg-red-500 text-white shadow-lg' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        ]"
                    >
                        {{ category.name }}
                    </button>
                </div>
            </div>
        </section>

        <!-- Список пицц -->
        <section class="py-12 bg-gray-50">
            <div class="container mx-auto px-4">
                <div v-if="filteredPizzas.length === 0" class="text-center py-16">
                    <Icon name="mdi:pizza" class="text-6xl text-gray-400 mb-4" />
                    <h3 class="text-2xl font-bold text-gray-600 mb-2">Пиццы не найдены</h3>
                    <p class="text-gray-500">Попробуйте выбрать другую категорию</p>
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <PizzaCard
                        v-for="pizza in filteredPizzas"
                        :key="pizza.id"
                        :pizza="pizza"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>