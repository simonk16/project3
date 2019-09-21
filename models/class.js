module.exports = function (sequelize, DataTypes) {
    const Class = sequelize.define("Class", {
        points: {
            type: DataTypes.INTEGER
        }
    });
    //ADD ASSOCIATIONS HERE IF NEEDED!
    return Class;
};