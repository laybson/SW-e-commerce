import promos from './promo-helper';

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
                cartItem.totalPrice = this.cartItemTotalPrice(cartItem);
                cart.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                this.addOne(cart[itemIndex])
            }
            callback()
        }
    },

    addOne(cartItem) {
        let itemID = cartItem.item._id;
        let quantity = cartItem.quantity+1;
        this.updateQuantity(itemID, quantity);        
    },

    cartItemTotalPrice(cartItem) {
        let price = cartItem.item.itemPrice;
        let activePromo = cartItem.promo;
        return (activePromo ? promos[activePromo].promo(cartItem) : cartItem.quantity *  price);
    },

    updatePromo(itemID, promo) {        
        let cart = []
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            let itemIndex = this.cartItemIndex(cart, itemID)
            cart[itemIndex].promo = promo
            cart[itemIndex].totalPrice = this.cartItemTotalPrice(cart[itemIndex]);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
               
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
                cart[itemIndex].quantity = Number(quantity)
                cart[itemIndex].totalPrice = this.cartItemTotalPrice(cart[itemIndex]);
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

    getTotalQuantity() {
        let totalQuantity = 0;
        let cart = [];
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            cart.forEach(cartItem => {
                totalQuantity = totalQuantity + cartItem.quantity;                
            });
        }
        return totalQuantity;
    },

    getTotalPrice() {
        let totalPrice = 0;
        let cart = [];
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            cart.forEach(cartItem => {
                totalPrice = totalPrice + cartItem.totalPrice                
            });
        }
        return totalPrice

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