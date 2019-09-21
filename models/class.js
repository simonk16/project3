module.exports = function (sequelize, DataTypes) {
    const Class = sequelize.define("Class", {
        teachersID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        studentsID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER
        }
    });
    //ADD ASSOCIATIONS HERE IF NEEDED!
    return Class;
};