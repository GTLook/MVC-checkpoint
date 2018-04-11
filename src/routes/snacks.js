const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/snacks')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.get('/:id', ctrl.show)
router.put('/:id', ctrl.modify)
router.delete('/:id/delete', ctrl.remove)


module.exports = router
