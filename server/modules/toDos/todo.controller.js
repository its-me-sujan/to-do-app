const TodoModel = require('./todo.model');

const create = (payload) => {
    return TodoModel.create(payload);
};

const list = () => {
    return TodoModel.find();
};

const getById = (id) => {};

const updateById = (id, payload) => {};

const remove = (id) => {};

module.exports = {create, list, getById, updateById, remove};