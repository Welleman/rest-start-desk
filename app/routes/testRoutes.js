import Router from 'express';
const router = new Router();
import TestController from '../controllers/TestController.js'

router.get('/', TestController.getAll)
router.get('/:id', TestController.getId)
router.post('/', TestController.create)
router.put('/:id', TestController.update)
router.delete('/:id', TestController.delete)

export default router;