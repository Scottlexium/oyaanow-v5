const {Router} = require('express');
const authController = require('../controllers/authController');
const router = Router();



router.get('/', authController.homepage_get);
router.post('/addBus', authController.addBus_post);
router.get('/result', authController.result_get);
router.get('/add', authController.addBus_get);
router.post('/add', authController.addBus_post);
router.get('/search', authController.search_post);
router.get('/customer/:id', authController.selected_get);

module.exports = router;

