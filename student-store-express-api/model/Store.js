const data = require('../data/db.json')
const { storage } = require('../data/storage.js')


class Store {
    constructor (){
        this.super();
    }

    static getProducts () {
        return data
    }

    static getProductbyID (key) {
        console.log("key", key)
        const products = storage.get("products")
        const product = products.find((product_, idx) => {
            return (product_.id).toString() === key
        })
        return product

    }
}

module.exports = Store
