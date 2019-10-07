const cart = {  
    addCartItem(cartItem, callback) {
        let cart = []
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            let itemIndex = this.cartItemIndex(cart, cartItem.item._id);
            if (itemIndex < 0) {
                cartItem.quantity = 1;
                cart.push(cartItem)
                localStorage.setItem('cart', JSON.stringify(cart))
            } else {
                this.addOne(cart[itemIndex])
            }
            console.log(cart);
            callback()
        }
    },

    addOne(cartItem) {
        let itemID = cartItem.item._id;
        let quantity = cartItem.quantity+1;
        this.updateQuantity(itemID, quantity)
    },

    updateQuantity(itemID, quantity) {
        if(quantity <= 0){
            this.deleteCartItem(itemID)
        } else {
            let cart = []
            if (typeof window !== "undefined") {
                if (localStorage.getItem('cart')) {
                    cart = JSON.parse(localStorage.getItem('cart'))
                }
                let itemIndex = this.cartItemIndex(cart, itemID)
                cart[itemIndex].quantity = quantity
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        }        
    },

    getCart() {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                return JSON.parse(localStorage.getItem('cart'))
            }
        }
        return []
    },

    deleteCartItem(itemID) {
        let cart = []
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            let itemIndex = this.cartItemIndex(cart, itemID)
            cart.splice(itemIndex, 1)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        return cart
    },

    cartItemIndex(cart, itemID) {
        return cart.findIndex( cartItem => {
            return cartItem.item._id === itemID
        })
    },

    emptyCart(callback) {
        if (typeof window !== "undefined") {
            localStorage.removeItem('cart')
            callback()
        }
    }
}
  
export default cart;