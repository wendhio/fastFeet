import Sequelize from 'sequelize';
import database from '../config/database';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';

const models = [User, Recipient];

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
