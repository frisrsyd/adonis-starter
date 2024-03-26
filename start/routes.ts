/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import PagesController from '#controllers/pages_controller'
import router from '@adonisjs/core/services/router'
const PagesController = () => import('#controllers/pages_controller')
const UsersController = () => import('#controllers/users_controller')

// router.on('/').render('pages/home')

// router.get('/home', async ({ view }) => {
//   return view.render('pages/home')
// })

router.get('/', [PagesController, 'beranda'])
router.get('/beranda', [PagesController, 'beranda'])
router.get('/about', [PagesController, 'about'])
router.get('/crud', [PagesController, 'crud'])
// router.get('/beranda', '#controllers/pages_controller.beranda')

// user route
router.resource('user', UsersController)
