const express = require('express')
const router = express.Router()
const { getHomePage, createTutorial, create, addTutorial, updateTutorial, update } = require('../controllers/tutorial.controllers');

router.get('/', getHomePage)
router.get('/tutorials', createTutorial)
router.get('/create', create)
router.get('/update/:id', update)
router.post('/create', addTutorial)
// update tutorial by id
router.post('/update/:id', updateTutorial)

module.exports = router