module.exports = function (sequelize, DataTypes) {

    const Class = sequelize.define("Class", {

        // id: {
        //     type: DataTypes.UUID,
        //     primaryKey: true,
        //     defaultValue: DataTypes.UUIDV4
        // },

        points: {
            type: DataTypes.INTEGER
        }
    });

    Class.associate = function (models) {
        Class.belongsTo(models.Teacher, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    
    Class.associate = function (models) {
        Class.belongsTo(models.Student, {
            foreignKey: {
                allowNull: false
            }
        })
    } 
    
    return Class;
};