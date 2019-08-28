const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function(meal) {
        this.orders.push(meal);
    },
    displayOrder: function() {
        console.log(this.orders)
    }
}

const meal_ChickenSandwich = {
    sandwichType: "Chicken Sandwich",
    fries: false,
    drinkSize: "Small"
}

restaurant.placeOrder(meal_ChickenSandwich);//invoking place order function

const meal_TurkeySandwich = {
    sandwichType: "Turkey Sandwich",
    fries: true,
    drinkSize: "Large"
}

restaurant.placeOrder(meal_TurkeySandwich);

restaurant.displayOrder();