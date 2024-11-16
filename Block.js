const hash = require("crypto-js/sha256")

class Block {
    constructor(previousHash, data) {
        this.data = data
        this.hash = this.calculateHash()
        this.previousHash = previousHash
        this.timeStamp = new Date()
        this.proofOfWork = 0
    }

    calculateHash() {
        return hash(
            this.previousHash + 
            JSON.stringify(this.data) +
            this.timeStamp +
            this.proofOfWork
        ).toString()
    }

    mine(difficulty) {
        while (!this.hash.startsWith("0".repeat(difficulty))) {
            this.proofOfWork ++
            this.hash = this.calculateHash()
        }
    }
}

module.exports = Block