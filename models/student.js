module.exports = function (sequelize, DataTypes) {
    const Student = sequelize.define("Student", {
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
        Student.hasMany(models.Class, {
            onDelete: "cascade"
        });
    };

    return Student;
};