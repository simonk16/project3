

module.exports = function (sequelize, DataTypes) {
    const Student = sequelize.define("Student", {
        
    //   id: {
    //       type: DataTypes.UUID,
    //       primaryKey: true,
    //       defaultValue: DataTypes.UUIDV4
    //   },
      
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },

      lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
    });

    Student.associate = function (models) {
        Student.belongsToMany(models.Class, {
            through: "AllData",
            as: "Class",            
            foreignKey:"classId"
        });
    };

    Student.associate = function (models) {
        Student.belongsToMany(models.Teacher, {
            through: "AllData",
            as: "Teacher",            
            foreignKey:"teacherId"
        });
    };

    return Student;
};