module.exports = function(sequelize , DataTypes){
    function associate(){
        
    }
    var usuario = sequelize.define('usuario',{
        nome : DataTypes.STRING,
        senha : DataTypes.STRING,
        adm : DataTypes.BOOLEAN,
    });
    
    return usuario;
}