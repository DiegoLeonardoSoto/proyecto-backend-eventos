import { UserModel } from "../models/user.model.js"

export class UsersMongoDAO {
  async create(user) {
    return UserModel.create(user)
  }

  async findOne(filter) {
    return UserModel.findOne(filter)
  }

  async exists(filter) {
    return UserModel.exists(filter)
  }
}
