module.exports = function (sequalize, DataTypes) {
    const Class = sequalize.define("Class", {
        teacherID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        studentID: {
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