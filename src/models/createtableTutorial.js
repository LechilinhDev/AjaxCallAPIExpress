

const createTutorial = (sequelize, Sequelize) => {
    const createT = sequelize.define("tutorialtest", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return createT;
}

module.exports = createTutorial;