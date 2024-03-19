import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async beranda({ view }: HttpContext) {
    const users = await User.all()
    return view.render('pages/home', { users: users })
  }

  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }

  async crud({ view }: HttpContext) {
    return view.render('pages/crud')
  }
}
