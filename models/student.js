module.exports = function (sequalize, DataTypes) {
    const Student = sequalize.define("Student", {
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
        Student.hasMany(model.Class, {
            onDelete: "cascade"
        });
    };

    return Student;
};