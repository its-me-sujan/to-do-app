const SubtaskModel = require('./subtask.model');

const create = (payload) => {
    return SubtaskModel.create(payload);
};

const list = () => {};

const getById = (id) => {};

const updateById = (id, payload) => {};

const remove = (id) => {};

module.exports = {create, list, getById, updateById, remove};