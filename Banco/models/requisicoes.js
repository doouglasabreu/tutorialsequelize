function associate(models){
    const {
        usuario,
        requisicoes
    } = models;
    requisicoes.belongsTo(usuario,{
        foreignKey:'usuario_id',
    });
}



module.exports = function(sequelize , DataTypes){
    var requisicoes = sequelize.define('requisicoes',{
    
        numero : {
            type:DataTypes.INTEGER,
            primaryKey: true,
         },
        data : DataTypes.DATE,
    });

    requisicoes.associate = associate;
    return requisicoes;
}