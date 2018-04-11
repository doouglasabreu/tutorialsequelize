module.exports = function(sequelize , DataTypes){
    var usuario = sequelize.define('usuario',{
        nome : DataTypes.STRING,
        senha : DataTypes.STRING,
        adm : DataTypes.BOOLEAN,

    });
    
    return usuario;
}