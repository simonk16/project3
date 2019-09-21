module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define("Teacher", {
      // Giving the Author model a name of type STRING
      firstName: {
          type: DataTypes.String,
          allowNull: false,
          validate: {
              len: [1]
          }
      },

      lastName: {
          type: DataTypes.String,
          allowNull: false,
          validate: {
              len: [1]
          }
      }
    });
  
    Teacher.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Teacher.hasMany(models.Class, {
        onDelete: "cascade"
      });
    };
  
    return Teacher;
  };