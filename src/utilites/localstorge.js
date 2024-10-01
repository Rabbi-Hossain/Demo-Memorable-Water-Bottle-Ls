const getStoreCart = () =>{
    const storeCartString = localStorage.getItem('cart')
    if(storeCartString){
        return JSON.parse(storeCartString)
    }
    return []
}


const saveCartToLS = cart =>{
    const stringiFied = JSON.stringify(cart)
    localStorage.setItem('cart', stringiFied)
}

const addToLS = id =>{
    const cart = getStoreCart()
    cart.push(id)
    saveCartToLS(cart)
}

const removeFromLS = id =>{
    const cart = getStoreCart()
    const remaining = cart.filter(idx=> idx !== id)
    saveCartToLS(remaining)
}

export  {addToLS, getStoreCart, removeFromLS}