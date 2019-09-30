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
      points: {
          type: DataTypes.INTEGER
      },
      userName: {
          type: DataTypes.STRING
      },
      password: {
          type: DataTypes.STRING
      }
    });

    Student.associate = function (models) {
<<<<<<< HEAD
        Student.belongsToMany(models.Teacher, {            
            foreignKey:"studentId",
            through: models.Class
=======
        Student.belongsTo(models.Class, {            
            onDelete: "cascade"
>>>>>>> origin/master
        });
    };

    return Student;
};