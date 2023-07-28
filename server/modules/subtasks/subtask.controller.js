const SubtaskModel = require('./subtask.model');

const create = (payload) => {
    return SubtaskModel.create(payload);
};

const list = () => {
    return SubtaskModel.find();
};

const getById = (id) => {
    return SubtaskModel.findone({_id: id});
};

const updateById = (id, payload) => {
    return SubtaskModel.updateOne({_id: id}, payload);
};

const remove = (id) => {
    return SubtaskModel.deleteOne({_id: id});
};

module.exports = {create, list, getById, updateById, remove};