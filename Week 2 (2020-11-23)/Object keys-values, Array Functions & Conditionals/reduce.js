let sample = [1, 1, 2, 1, 2]

let total = sample.reduce((sum, item) => {
    return sum + item
}, 0) 

console.log(total)
