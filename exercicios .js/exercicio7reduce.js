function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
    {
        preco: 12,
        nome:'pastel',
    },
	{
		preco: 5,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 40,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));