import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async beranda({ view }: HttpContext) {
    // users from oldest to newest
    const users = await User.query().orderBy('id', 'asc')
    return view.render('pages/home', { users: users })
  }

  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }

  async crud({ view }: HttpContext) {
    return view.render('pages/crud')
  }
}
