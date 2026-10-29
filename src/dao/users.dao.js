import { userModel } from "../models/user.model.js"

export class UsersMongoDAO {
  async create(user) {
    return userModel.create(user)
  }

  async findOne(filter) {
    return userModel.findOne(filter)
  }

  async exists(filter) {
    return userModel.exists(filter)
  }
}
