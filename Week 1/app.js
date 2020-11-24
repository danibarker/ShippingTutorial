const orders = require('./orders')
const Inventory = require("./inventory")
const Boxes = require("./box")

for (order of orders) {
    const box = Boxes.getBox(order) 
    const address = order.customerAddress

    for (item of Object.keys(order.items)) {
        let quantity = order.items[item] 
        let available = Inventory.checkInventory(item, quantity)
        if (available) {
            Inventory.removeFromInventory(item, quantity)
            Boxes.addItemToBox(box, item, quantity)
        } else {
            console.log(`Out of ${item}`)
        }
        
    }
    
    Boxes.addShippingLabel(box, address)
    Boxes.shipBox(box)

}


Inventory.restockInventory()

