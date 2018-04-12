function associate(models){
    const {
        solicitacoes,
        orcamentos
    } = models;
    orcamentos.belongsTo(solicitacoes,{
        foreignKey:'solicitacao_id',
    });
}



module.exports = function(sequelize , DataTypes){
    var orcamentos = sequelize.define('orcamentos',{
        origem : DataTypes.STRING,
        cnpj_forncedor : DataTypes.STRING,
        valor : DataTypes.FLOAT,
        nome_fornecedor : DataTypes.STRING,


    });

    orcamentos.associate = associate;
    return orcamentos;
}