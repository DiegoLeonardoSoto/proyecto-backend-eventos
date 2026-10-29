export class UsersRepository {
  #dao

  constructor(dao) {
    this.#dao = dao
  }

  createUser(user) {
    return this.#dao.create(user)
  }

  findUserByEmail(email) {
    return this.#dao.findOne({ email })
  }

  userExistsByEmail(email) {
    return this.#dao.exists({ email })
  }
}
