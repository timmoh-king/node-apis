const sequelize = require('../config/db');
const Apartment = require('./apartment')
const House = require('./house')
const Tenant = require('./tenant')


// Initialize models
Apartment.initModel(sequelize);
House.initModel(sequelize);
Tenant.initModel(sequelize);

// Associations
Apartment.hasMany(House, { foreignKey: 'apartment_id', as: 'houses', onDelete: 'CASCADE' });
House.belongsTo(Apartment, { foreignKey: 'apartment_id', as: 'apartment' });

House.hasOne(Tenant, { foreignKey: 'house_id', as: 'tenant', onDelete: 'SET NULL' });
Tenant.belongsTo(House, { foreignKey: 'house_id', as: 'house' });

module.exports = {
sequelize,
    Apartment,
    House,
    Tenant
};
