let controller = {};
let models = require('../models');
const { response } = require('express');
let Product = models.Product;

controller.getTrendingProduct = () => {
    return new Promise((resolve, reject) => {
        Product
                .findAll({
                    order: [
                        ['overallReview', "DESC"]
                    ],
                    limit: 8,
                    include: [{ model: models.Category }],
                    attributes: ['id', 'name', 'imagepath', 'price']
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => reject(new Error(error)));
    });
};

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                include: [{ model: models.Category }],
                attributes: ['id', 'name', 'imagepath', 'price'],
                limit: 9
            })
            .then(data => resolve(data))
            .catch(error => new Error(error));
    });
}

module.exports = controller;