module.exports = function (sequelize, DataTypes) {

    const Class = sequelize.define("Class", {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        points: {
            type: DataTypes.INTEGER
        }
    });

    Class.associate = function (models) {
        Class.belongsTo(models.teacher, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    
    Class.associate = function (models) {
        Class.belongsTo(models.student, {
            foreignKey: {
                allowNull: false
            }
        })
    } 
    //ADD ASSOCIATIONS HERE IF NEEDED!
    return Class;
};