const promos = {
    'Pague 1 Leve 2': {
        promo(cartItem) {
            let quantity = Number(cartItem.quantity);
            let price = Number(cartItem.item.itemPrice);
            let freeItems = (quantity-(quantity % 2)) / 2;
            return (quantity-freeItems) * price;
        }
    },

    '3 por R$10,00': {
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