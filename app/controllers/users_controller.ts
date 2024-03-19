import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({request, response, session}: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])

    const user = await User.create(data)
    if (user){
      session.flash({ status: 'User created successfully' })
      return response.redirect('/beranda')
    }else{
      session.flash({ error: 'User failed to create' })
      return response.redirect('/crud')
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}