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
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    Teacher.associate = function(models) {
<<<<<<< HEAD
      Teacher.belongsToMany(models.Student, {
        foreignKey: "teacherId",
        through: models.Class      
      });
=======
      Teacher.belongsTo(models.Class, {onDelete: "cascade"});
>>>>>>> origin/master
    };
  
    return Teacher;
  };