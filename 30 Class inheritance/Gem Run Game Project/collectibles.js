// do NOT remove the 'export' keyword
export class Collectible {
    // TODO: constructor, collect, getScore, and getCollectedMessage
    constructor(name, worth) {
        this.name = name
        this.worth = worth
        this.count = 0
    }

    collect() {
        this.count += 1
    }

    getScore() {
        return this.worth * this.count
    }

    getCollectedMessage() {
        return `${this.count} ${this.name}s collected`
    }
}

// do NOT remove the 'export' keyword
export class Coin extends Collectible {
    // TODO: constructor and inheritance
    constructor(name, worth) {
        super(name, worth)
        this.name = "coin"
        this.worth = 10
    }
}

// do NOT remove the 'export' keyword
export class Gem extends Collectible{
    // TODO: constructor and inheritance
    constructor(name, worth) {
        super(name, worth)
        this.name = "gem"
        this.worth = 50
    }
}
