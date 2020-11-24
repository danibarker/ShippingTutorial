const inventory = {
    apples: 30,
    bananas: 50,
    bread: 40,
    chicken: 10,
    eggs: 90,
    milk: 40,
};
const productSizes = {
    apples: 1,
    bananas: 2,
    bread: 3,
    chicken: 4,
    eggs: 3,
    milk: 3,
};
const inventoryLevels = {
    apples: 30,
    bananas: 10,
    bread: 10,
    chicken: 10,
    eggs: 10,
    milk: 20,
};

function restockInventory() {
    for (item of Object.keys(inventory)) {
        while (inventory[item] < inventoryLevels[item]) {
            inventory[item] += 5
            console.log('ordered 5', item)
        }
    }
}

function checkInventory(item, quantity) {
    console.log(`Checking for ${quantity} ${item}`)
    return inventory[item] >= quantity
}

function removeFromInventory(item, quantity) {
    inventory[item] -= quantity
    console.log(`Removed ${quantity} ${item} from inventory`)
}
module.exports = { inventory, restockInventory, checkInventory, removeFromInventory, productSizes};
