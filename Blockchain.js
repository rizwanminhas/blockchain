const Block = require("./Block")

class Blockchain {
    constructor() {
        const genesisBlock = new Block("0", {isGenesis: true})
        this.chain = [genesisBlock]
    }

    addBlock(data) {
        const lastBlock = this.chain.slice(-1)[0]
        const newBlock = new Block(lastBlock.hash, data)
        newBlock.mine(2)
        this.chain.push(newBlock)
    }

    isValid() {
        for (let i=1; i<this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i-1]
            if (currentBlock.previousHash != previousBlock.hash)
                return false
            if (currentBlock.hash != currentBlock.calculateHash()) 
                return false
        }
        return true
    }
} 

module.exports = Blockchain