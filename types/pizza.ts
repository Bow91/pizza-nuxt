export interface Pizza {
    id: number
    name: string
    description: string
    price: number
    category: string
    image?: string
    isPopular?: boolean
    ingredients?: string[]
}

export interface CartItem extends Pizza {
    size: string
    quantity: number
    cartId: number
}

export interface Category {
    id: string
    name: string
    description?: string
}