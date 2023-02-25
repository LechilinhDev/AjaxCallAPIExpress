const db = require('../models');
const dbAPITutorial = db.createTutorial;

const createAPI = async (req, res) => {
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    if (!tutorial.title) {
        res.status(400).send({
            message: "Tutorial's can not be empty!"
        })
    }

    await dbAPITutorial.create(tutorial).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        })
}

const deleteTutorialById = async (req, res) => {

    const id = req.params.id;
    await dbAPITutorial.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {

            res.send({
                message: "Tutorial was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Tutorial with id=" + id
            });
        });


}

const updateTutorial = async (req, res) => {
    const id = req.params.id;
    await dbAPITutorial.update(req.body, {
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Tutorial updated successfully!"
            })
        } else {
            res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error updating Tutorial with id=${id}`
        })
    });
    res.send('update data')
}

module.exports = {
    createAPI, deleteTutorialById, updateTutorial
}