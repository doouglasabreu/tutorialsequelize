
module.exports = function(sequelize , DataTypes){
    var produtos_siorg = sequelize.define('produtos_siorg',{
        siorg : {
            type:DataTypes.INTEGER,
            primaryKey: true,
        } ,
        descricao : DataTypes.STRING,
        data : DataTypes.DATE,
    });

    return produtos_siorg;
}