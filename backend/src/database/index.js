import Sequelize from 'sequelize';
import database from '../config/database';

const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(database);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
