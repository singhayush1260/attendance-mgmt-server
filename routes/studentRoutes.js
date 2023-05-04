const router = require('express').Router();

const { getHandler, postHandler, delHandler, putHandler } = require('../controllers/studentCrudController')

router.get('/', getHandler);
router.post('/', postHandler);
router.delete('/id', delHandler);
router.put('/id', putHandler);

module.exports = router;