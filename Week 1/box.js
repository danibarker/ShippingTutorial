﻿function Box(size) {
    this.size = size;
    this.contents = [];
    this.shippingLabel = '';
}
function getBox(order) {
    const size = calculateBoxSize(order)
    console.log(`Got box of size ${size}`)
    const box = new Box(size)
    return box
}

function addItemToBox(box, item, quantity) {
    console.log(`Added ${quantity} ${item} to box`)
    
    box.contents.push(`${quantity} ${item}`)
}
function addShippingLabel(box, address) {
    console.log(`Added shipping label of ${address}`)
    box.shippingLabel = address
}
function shipBox(box) {
    console.log(`Box has been shipped to ${box.shippingLabel}`)
}

function calculateBoxSize(order) {
    const boxSizes = [1, 4, 10, 20]
    let numberOfItems = 0
    for (item of Object.values(order.items)) {
        numberOfItems += item
    }
    for (size of boxSizes) {
        console.log(size)
        if (numberOfItems < size) {
            return size
        }
    }
    console.log("Too many items")

}
module.exports = { getBox, addItemToBox, addShippingLabel, shipBox };
