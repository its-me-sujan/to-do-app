const TodoModel = require('./todo.model');

const create = (payload) => {
    return TodoModel.create(payload);
};

const list = () => {
    // complex aggregation
    return TodoModel.aggregate([
        {
          '$lookup': {
            'from': 'subtasks', 
            'localField': '_id', 
            'foreignField': 'todo_id', 
            'as': 'subtasks'
          }
        }
      ]);
};

const getById = (id) => {
    return TodoModel.findone({_id: id});
};

const updateById = (id, payload) => {
    return TodoModel.updateOne({_id: id}, payload);
};

const remove = (id) => {
    return TodoModel.deleteOne({_id: id});
};

module.exports = {create, list, getById, updateById, remove};