const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories.models');
const Todos = require('../models/todos.models');
const Users = require('../models/users.models');

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithTasks(id){
    try {
      const result = await Users.findOne({
        where: {id},
        attributes: {
          exclude: ['password']
        },
        include: {
          model: Todos,
          as: 'tasks',
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  //trabajo en clases
  static async getWithCategories(id){
    try {
      const result = await Users.findOne({
        where: {id},
        include: {
          model: Categories,
          as: 'category',
          attributes: ['name']
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user){
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field){
    try {
      const result = await Users.update(field, {where: { id }});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id){
    try {
      const result = await Users.destroy({
        where: {id}
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UserServices;