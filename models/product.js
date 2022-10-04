const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

const filePath = path.join(rootDir, 'data', 'products.json');

const getProductFromFile = (cb) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            cb([])
        } else {
            return cb(JSON.parse(data));
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            })
        });
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }

}