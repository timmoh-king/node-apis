const { DataTypes, Model } = require('sequelize')

class Apartment extends Model {
    static initModel(sequelize) {
        Apartment.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            name: { type: DataTypes.STRING(150), allowNull: false },
            location: { type:DataTypes.STRING(255), allowNull: false },
            no_of_units: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, defaultValue: 0 }
        }, {
            sequelize,
            modelName: 'Apartment',
            tableName: 'apartments'
        });
        return Apartment;
    }
}

module.exports = Apartment;
