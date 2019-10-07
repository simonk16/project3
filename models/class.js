module.exports = function (sequelize, DataTypes) {

    const Class = sequelize.define("Class", {

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
// this is the join for students and teacher

// select * from classes c
// inner join students s on s.id= c.studentId
// inner join teachers t on t.id= c.teacherId
// where c.teacherId = 1