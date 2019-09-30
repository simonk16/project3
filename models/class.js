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

        },

        points: {
            type: DataTypes.INTEGER
        }
    });

    return Class;
};
// this is the join for students and teacher

// select * from classes c
// inner join students s on s.id= c.studentId
// inner join teachers t on t.id= c.teacherId
// where c.teacherId = 1