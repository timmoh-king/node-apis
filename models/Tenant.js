const { DataTypes, Model } = require('sequelize')
const dayjs = require('dayjs');

class Tenant extends Model {
    static initModel(sequelize) {
        Tenant.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            firstname: { type: DataTypes.STRING(120), allowNull: false },
            lastname: { type: DataTypes.STRING(120), allowNull: false },
            email: { type: DataTypes.STRING(150), allowNull: false, unique: true },
            phone_number: { type: DataTypes.STRING(30) },
            house_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
            date_rented: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: dayjs().format('YYYY-MM-DD') }
        }, {
            sequelize,
            modelName: 'Tenant',
            tableName: 'tenants'
        });
        return Tenant;
    }

    monthsLived() {
        const start = dayjs(this.date_rented);
        const now = dayjs();
    
        let months = (now.year() - start.year()) * 12 + (now.month() - start.month());
    
        if (now.date() < start.date()) months -= 1;
    
        return Math.max(0, months);
    }

    async totalRentPaid() {
        if (this.house && this.house.rent != null) {
          return this.monthsLived() * parseFloat(this.house.rent);
        }

        const House = require('./house');
        const house = await House.findByPk(this.house_id);
        if (!house) return 0;
        return this.monthsLived() * parseFloat(house.rent);
    }
}

module.exports = Tenant
