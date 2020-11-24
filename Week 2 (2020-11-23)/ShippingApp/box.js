const { productSizes } = require("./inventory");

function Box(size) {
    this.size = size;
    this.contents = [];
    this.shippingLabel = "";
}

function getBox(order) {
    const size = calculateBoxSize(order);
    console.log(`Got box of size ${size}`);
    const box = new Box(size);
    return box;
}

function addItemToBox(box, item, quantity) {
    console.log(`Added ${quantity} ${item} to box`);

    box.contents.push(`${quantity} ${item}`);
}
function addShippingLabel(box, address) {
    console.log(`Added shipping label of ${address}`);
    box.shippingLabel = address;
}
function shipBox(box) {
    console.log(`Box has been shipped to ${box.shippingLabel}`);
}

function calculateBoxSize(order) {
    const boxSizes = [1, 4, 10, 20, 60];
    let totalSizeOfOrder = Object.keys(order.items).reduce((totalSize, item) => {
        console.log('item',item)
        console.log('totalSize', totalSize)
        console.log('item size', productSizes[item])
        console.log('item quantities', order.items[item])
        return totalSize + productSizes[item] * order.items[item]
    }, 0)
        
    
    for (size of boxSizes) {
        if (totalSizeOfOrder < size) {
            return size;
        }
    }
    console.log("Too many items");
}
module.exports = { getBox, addItemToBox, addShippingLabel, shipBox };
