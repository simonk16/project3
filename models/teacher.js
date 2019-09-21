module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define("Teacher", {

      // id: {
      //   type: DataTypes.UUID,
      //   primaryKey: true,
      //   defaultValue: DataTypes.UUIDV4
      // },

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