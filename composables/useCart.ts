import type { CartItem, Pizza } from '~/types/pizza'

export const useCart = () => {
    return useState<CartItem[]>('cart', ()=>[])
}

export const useCartActions = () => {
    const cart = useCart()

    const addToCart = (product: Pizza, size: string = 'medium') => {
        return new Promise<void>((resolve) => {
            const existingItem = cart.value.find((item: CartItem) =>
                item.id === product.id && item.size === size
            )

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                cart.value.push({
                    ...product,
                    size,
                    quantity: 1,
                    cartId: Date.now()
                })
            }
            resolve()
        })
    }

    const removeFromCart = (cartId: number) => {
        const index = cart.value.findIndex((item: CartItem) => item.cartId === cartId)
        if (index !== -1) {
            cart.value.splice(index, 1)
        }
    }

    const updateQuantity = (cartId: number, quantity: number) => {
        const item = cart.value.find((item: CartItem) => item.cartId === cartId)
        if (item) {
            if (quantity <= 0) {
                removeFromCart(cartId)
            } else {
                item.quantity = quantity
            }
        }
    }

    const getCartTotal = () => {
        return cart.value.reduce((total: number, item: CartItem) => {
            return total + (item.price * item.quantity)
        }, 0)
    }

    const getCartItemsCount = () => {
        return cart.value.reduce((total: number, item: CartItem) => total + item.quantity, 0)
    }

    return {
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartItemsCount
    }
}