module.exports = (sequelize, Sequalize) => {
    const Quiz = sequelize.define('quiz', {
        quiz: {
            type: Sequalize.STRING,
        },
        a: {
            type: Sequalize.STRING,
        },
        b: {
            type: Sequalize.STRING,
        },
        c: {
            type: Sequalize.STRING,
        },
        d: {
            type: Sequalize.STRING,
        },
        key: {
            type: Sequalize.STRING,
        },
        categoryId: {
            type: Sequalize.STRING,
        },
        levelId: {
            type: Sequalize.STRING,
        },
    });
    return Quiz;
}