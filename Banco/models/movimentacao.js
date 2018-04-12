function associate(models){
    const {
        usuario,
        estoque,
        movimentacao
    } = models;
    movimentacao.belongsTo(usuario,{
        foreignKey:'usuario_id',
    });
    movimentacao.belongsTo(estoque,{
        foreignKey:'estoque_id',
    });
}



module.exports = function(sequelize , DataTypes){
    var movimentacao = sequelize.define('movimentacao',{
        local : DataTypes.STRING,
        quantidade_atual : DataTypes.INTEGER,
        quantidade_saida : DataTypes.INTEGER,
        quantidade_total : DataTypes.INTEGER,
        data : DataTypes.DATE,
        defeito : DataTypes.DATE,

    });

    movimentacao.associate = associate;
    return movimentacao;
}