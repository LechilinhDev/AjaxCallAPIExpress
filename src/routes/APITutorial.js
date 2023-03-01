const express = require('express')
const router = express.Router()
const { createAPI, deleteTutorialById, updateTutorial, getTutorial } = require('../controllers/APIControllerTutorial');
router.get('/', getTutorial)
router.post('/', createAPI)
// delete tutorial with id
router.delete('/:id', deleteTutorialById)

// update tutorial by id
router.put('/:id', updateTutorial)


module.exports = router