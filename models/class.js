module.exports = function (sequelize, DataTypes) {

    const Class = sequelize.define("Class", {

        // id: {
        //     type: DataTypes.UUID,
        //     primaryKey: true,
        //     defaultValue: DataTypes.UUIDV4
        // },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

        points: {
            type: DataTypes.INTEGER
        }
    });

    Class.associate = function (models) {
        Class.belongsToMany(models.Teacher, {

            through: 'AllData',
            as: 'Teacher',
            foreignKey: 'teacherId'

        })
    }
    
    Class.associate = function (models) {
        Class.belongsToMany(models.Student, {

            through: 'AllData',
            as: 'Student',
            foreignKey: 'studentId'


        })
    } 
    
    return Class;
};