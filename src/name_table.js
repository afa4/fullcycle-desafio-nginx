const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('mysql://root:root@db:3306/appdb');

class NamesTable extends Model { }

NamesTable.init(
    {
        name: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'NamesTable'
    }
);

module.exports = { NamesTable };
