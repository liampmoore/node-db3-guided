const db = require('../data/db-config');

module.exports = {
    all,
    findById,
    update
}

function all() {
    return db("users");
}

function findById(id) {
    return db("users")
        .where({id})
        .first();
}

function update(changes, id) {
    return db('users').where({ id }).update(changes)
}