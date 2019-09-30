module.exports = function (sequelize, DataTypes) {

    const Class = sequelize.define("Class", {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        }
    });
 
    
    
    Class.associate = function (models) { [Class.hasMany(models.Teacher, {
        foreignKey: {
            allowNull: false
        }
    }), Class.hasMany(models.Student, {
        foreignKey: {
            allowNull: false
        }
    })]
        
    } 
    

    
    return Class;
};