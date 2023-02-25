const db = require('../models');
const createTutorialdb = db.createTutorial;

const getHomePage = async (req, res) => {

    res.render('home.ejs')
}

const createTutorial = async (req, res) => {
    const tutorials = await createTutorialdb.findAll();
    return res.render('tutorial.ejs', { tutorials })
}
const create = (req, res) => {
    res.render('create.ejs')
}
const addTutorial = async (req, res) => {

    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    await createTutorialdb.create(tutorial);

    return res.redirect('/tutorials')
}
const updateTutorial = async (req, res) => {
    const id = req.params.id;
    await createTutorialdb.update(req.body, {
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.redirect('/tutorials')
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


}
const update = async (req, res) => {

    const id = req.params.id;

    const tutorial = await createTutorialdb.findByPk(id)
        .then(data => {
            if (data) {
                res.render('update.ejs', { data })
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });


}
module.exports = {
    getHomePage, createTutorial, create, addTutorial, updateTutorial, update
}