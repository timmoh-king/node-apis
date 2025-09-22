const { DataTypes, Model } = require('sequelize')

class House extends Model {
    static initModel(sequelize) {
        House.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            apartment_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
            house_no: { type: DataTypes.STRING(50), allowNull: false },
            description: { type: DataTypes.STRING(120) },
            comments: { type: DataTypes.TEXT },
            rent: { type: DataTypes.FLOAT.UNSIGNED, allowNull: false, defaultValue: 0 }
        }, {
            sequelize,
            modelName: 'House',
            tableName: 'houses'
        });
        return House;
    }
}

module.exports = House;
