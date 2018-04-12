function associate(models){
    const {
        usuario,
        solicitacoes
    } = models;
    solicitacoes.belongsTo(usuario,{
        foreignKey:'usuario_id',
    });
}



module.exports = function(sequelize , DataTypes){
    var solicitacoes = sequelize.define('solicitacoes',{
        justificativa : DataTypes.STRING,
        quantidade : DataTypes.STRING,
        data : DataTypes.DATE,
        descricao : DataTypes.STRING,


    });

    solicitacoes.associate = associate;
    return solicitacoes;
}