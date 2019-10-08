const promos = {
    pagueUmLeveDois: {
        promo(cartItem) {
            let quantity = Number(cartItem.quantity);
            let price = Number(cartItem.item.itemPrice);
            let freeItems = (quantity-(quantity % 2)) / 2;
            return (quantity-freeItems) * price;
        }
    },

    tresPorDez: {
        promo(cartItem) {
            let quantity = Number(cartItem.quantity);
            let price = Number(cartItem.item.itemPrice);
            let fullPriceItems = quantity % 3
            let promoPriceItems = (quantity-fullPriceItems) / 3;
            return promoPriceItems * 10 + fullPriceItems * price;
        }
    }
}

export default promos;