const Blockchain = require("./Blockchain")

const blockchain = new Blockchain()

blockchain.addBlock({
    from: "rizwan",
    to: "minhas",
    amount: 100
})

blockchain.addBlock({
    from: "david",
    to: "john",
    amount: 150
})

console.log(blockchain)
console.log("is blockchain valid:" + blockchain.isValid())

console.log("Mutate the blockchain and then check for validity:")
blockchain.chain[1].data.amount += 200000
console.log("is blockchain valid:" + blockchain.isValid())